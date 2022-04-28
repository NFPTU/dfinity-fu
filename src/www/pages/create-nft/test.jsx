import { Upload, message, Form, Input, Button, Skeleton } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { client } from "../../utilities/ipfs";
import { superheroes } from "../../../declarations";
import { Principal } from "@dfinity/principal";
import { toList } from "../../utilities/idl";
import { idlFactory } from "../../../declarations/superheroes.did.js";
import { customAxios } from "../../utils/custom-axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const { Dragger } = Upload;

const IPFS_LINK = "https://dweb.link/ipfs/";

export const CreateNFTPage = (props) => {
    const [fileImg, setFileImg] = useState(true);
    const [prinpId, setPrinpId] = useState();
    const [listNFt, setListNFt] = useState([]);
    const [listAllNFt, setListAllNFt] = useState([]);

    //Use for select:
    const onChangeFile = async (info) => {
        const { status } = info.file;
        console.log(info);
        message.success(`${info.file.name} file uploaded successfully.`);
        return info.file;
    };
    const requestUpdate = async (info) => {
        const resImg = await onChangeFile(info);
        setFileImg(resImg);
        info.onSuccess("okk");
    };

    useEffect(async () => {
        const connected = await window.ic.plug.isConnected();
        getListAll()
        console.log(connected, "connected");
        if (connected) {
            const principalId = await window.ic.plug.agent.getPrincipal();
            setPrinpId(principalId);
            console.log(principalId);
        }
    }, []);
    useEffect(async () => {
        getLIst();
    }, [prinpId]);

    const getListAll = async  () => {
        const res = await superheroes.getAllTokens();
        const promise4all = Promise.all(
            res.map(function (el) {
                return customAxios(el.metadata[0]?.tokenUri);
            })
        );
        const resu = await promise4all;
        console.log(resu);
        setListAllNFt(resu);
    };

    const onFinish = async (values) => {
        toast("Minting NFT!!!")
        const cid = await client.put([fileImg]);
        const nFile = new File(
            [
                JSON.stringify({
                    description: values?.description,
                    name: values?.name,
                    image: `${IPFS_LINK}${cid}/${values?.image?.file?.name}`,
                }),
            ],
            `${values?.name}.json`,
            { type: "text/plain" }
        );
        const metadataCID = await client.put([nFile]);
        const res = await superheroes.mint(prinpId, [
            { tokenUri: `${IPFS_LINK}${metadataCID}/${values?.name}.json` },
        ]);
        toast("Minted NFT success!!!")
        getLIst();
        getListAll()
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const getLIst = async () => {
        const res = await superheroes.getUserTokens(prinpId);
        const promise4all = Promise.all(
            res.map(function (el) {
                return customAxios(el.metadata[0]?.tokenUri);
            })
        );
        const resu = await promise4all;
        setListNFt(resu);
    };

    const onConnectWallet = async () => {
        try {
            const publicKey = await window.ic.plug.requestConnect({
                whitelist: [process.env.SUPERHEROES_CANISTER_ID],
            });
            const NNSUiActor = await window.ic.plug.createActor({
                canisterId: process.env.SUPERHEROES_CANISTER_ID,
                interfaceFactory: idlFactory,
            });

            const princi = await window.ic.plug.agent.getPrincipal();
            setPrinpId(princi);

            console.log(`The connected user's public key is:`, publicKey);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
        <Link to="/footer"> 
        Test Link
        </Link>
            {!prinpId ? (
                <Button type="primary" onClick={onConnectWallet}>
                    Connect Wallet
                </Button>
            ) : (
                <>Connected Wallet : {prinpId?.toString()} </>
            )}
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="image"
                    rules={[
                        { required: true, message: "Please upload image!" },
                    ]}
                >
                    <Dragger customRequest={requestUpdate}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">
                            Click or drag file to this area to upload
                        </p>
                        <p className="ant-upload-hint">
                            Support for a single or bulk upload. Strictly
                            prohibit from uploading company data or other band
                            files
                        </p>
                    </Dragger>
                </Form.Item>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        { required: true, message: "Please input NFT name!" },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label="Description" name="description">
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <div>
                Your NFTs
                {listNFt.map((el) => (
                    <img src={el.image} />
                ))}
            </div>

            <Skeleton loading={!listAllNFt.length}>
                All NFTs
                {listAllNFt.map((el) => (
                    <img src={el.image} />
                ))}
            </Skeleton>
        </>
    );
};
