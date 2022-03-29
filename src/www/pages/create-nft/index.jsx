import { Upload, message, Form, Input, Button } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { client } from "../../utilities/ipfs";
import { superheroes } from "../../../declarations";
import { Principal } from "@dfinity/principal";
import { toList } from "../../utilities/idl";

const { Dragger } = Upload;

const IPFS_LINK = "https://dweb.link/ipfs/";

export const CreateNFTPage = (props) => {
    const [fileImg, setFileImg] = useState(true);
    const [prinpId, setPrinpId] = useState();

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

    useEffect(async() => {
        const connected = await window.ic.plug.isConnected();
        console.log(connected, 'connected');
        if (connected) {
            const principalId = await window.ic.plug.agent.getPrincipal();
            setPrinpId(principalId);
        }
        getLIst();
    }, []);

    const onFinish = async (values) => {
        console.log(values);
        const cid = await client.put([fileImg]);
        console.log(cid);
        const nFile = new File(
            [
                JSON.stringify({
                    description: values?.description,
                    name: values?.name,
                    image: IPFS_LINK + cid,
                }),
            ],
            `${values?.name}.json`,
            { type: "text/plain" }
        );
        const metadataCID = await client.put([nFile]);
        console.log(metadataCID);
        const res = await superheroes.mint(prinpId, [
            { tokenUri: IPFS_LINK + metadataCID },
        ]);
        console.log(res);
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const getLIst = async () => {
        const res = await superheroes.getUserTokens(prinpId);
        console.log(res);
    };

    const onConnectWallet = async () => {
        try {
            const publicKey = await window.ic.plug.requestConnect({
                whitelist: ['hozae-racaq-aaaaa-aaaaa-c'],
                host: 'http://127.0.0.1:8000/',
            });
            console.log(`The connected user's public key is:`, publicKey);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            {!prinpId ? (
                <Button type="primary" onClick={onConnectWallet}>
                    Connect Wallet
                </Button>
            ) : (
                <>Connected Wallet : {prinpId} </>
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
        </>
    );
};
