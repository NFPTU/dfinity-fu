import React from 'react';
import {
	BodyWrapper,
	Container,
	FormItemDesc,
	FormItemName,
	RedIcon,
	Required,
	Title,
	FormItem,
	Wrapper,
	FormWrapper,
} from './create-nft.elements';
import { Upload, message, Form, Input, Button, Skeleton, Select } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { client } from '../../utilities/ipfs';
import { superheroes } from '../../../declarations';
import { Principal } from '@dfinity/principal';
import { toList } from '../../utilities/idl';
import { idlFactory } from '../../../declarations/superheroes.did.js';
import { customAxios } from '../../utils/custom-axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { withContext } from '../../hooks';

const { Dragger } = Upload;
const { Option } = Select;
import { useCanister, useConnect } from '@connect2ic/react';

const IPFS_LINK = 'https://dweb.link/ipfs/';

function CreateNft(props) {
	const {
		isConnected,
		disconnect,
		activeProvider,
		isIdle,
		connect,
		isConnecting,
		principal
	} = useConnect();
	const [fileImg, setFileImg] = useState(true);
	const [listNFt, setListNFt] = useState([]);
	const [listAllNFt, setListAllNFt] = useState([]);
	const [superheroes, { loading, error }] = useCanister('superheroes');

	function onChange(value) {
		console.log(`selected ${value}`);
	}

	function onSearch(val) {
		console.log('search:', val);
	}

	const onChangeFile = async (info) => {
		const { status } = info.file;
		console.log(info);
		message.success(`${info.file.name} file uploaded successfully.`);
		return info.file;
	};
	const requestUpdate = async (info) => {
		const resImg = await onChangeFile(info);
		setFileImg(resImg);
		info.onSuccess('okk');
	};

	useEffect(async () => {
		if(principal && superheroes) {
			getLIst();
		}
	}, [principal, superheroes]);

	const getListAll = async () => {
		console.log('SUPERHEROES_CANISTER_ID', process.env.SUPERHEROES_CANISTER_ID );
		const res = await superheroes.getAllTokens();
		console.log(res);
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
		toast('Minting NFT!!!');
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
			{ type: 'text/plain' }
		);
		const metadataCID = await client.put([nFile]);
		const res = await superheroes.mint(Principal.fromText(principal), [
			{ tokenUri: `${IPFS_LINK}${metadataCID}/${values?.name}.json` },
		]);
		toast('Minted NFT success!!!');
		getLIst();
		getListAll();
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	const getLIst = async () => {
		const res = await superheroes.getUserTokens(Principal.fromText(principal));
		const promise4all = Promise.all(
			res.map(function (el) {
				return customAxios(el.metadata[0]?.tokenUri);
			})
		);
		const resu = await promise4all;
		setListNFt(resu);
	};


	return (
		<Container>
			<Wrapper>
				<Title>Create New Item</Title>
				<Required>
					<RedIcon>*</RedIcon> Required fields
				</Required>

				<BodyWrapper>
					<Form
						name='basic'
						labelCol={{ span: 8 }}
						wrapperCol={{ span: 16 }}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete='off'>
						<FormWrapper>
							<FormItem>
								<FormItemName>
									Image, Video, Audio, or 3D Model
									<RedIcon>*</RedIcon>
								</FormItemName>
								<FormItemDesc>
									File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
									OGG, GLB, GLTF. Max size: 100 MB
								</FormItemDesc>
								<Form.Item
									name='image'
									rules={[{ required: true, message: 'Please upload image!' }]}>
									<Dragger customRequest={requestUpdate}>
										<p className='ant-upload-drag-icon'>
											<InboxOutlined />
										</p>
										<p className='ant-upload-text'>
											Click or drag file to this area to upload
										</p>
										<p className='ant-upload-hint'>
											Support for a single or bulk upload. Strictly prohibit
											from uploading company data or other band files
										</p>
									</Dragger>
								</Form.Item>
							</FormItem>

							<FormItem
								name='name'
								rules={[{ required: true, message: 'Please input NFT name!' }]}>
								<FormItemName>
									Name
									<RedIcon>*</RedIcon>
								</FormItemName>
								<Input size='large' placeholder='Item name' />
							</FormItem>

							<FormItem name='description'>
								<FormItemName>Description</FormItemName>
								<FormItemDesc>
									The description will be included on the item's detail page
									underneath its image. Markdown syntax is supported
								</FormItemDesc>
								<Input
									size='large'
									placeholder='Provide a detailed description of your item'
								/>
							</FormItem>

							<FormItem name='collection'>
								<FormItemName>Collection</FormItemName>
								<FormItemDesc>
									This is the collection where your item will appear.
								</FormItemDesc>
								<Select
									showSearch
									placeholder='Select collection'
                                    style={{ width: 1000 }}
									optionFilterProp='children'
									onChange={onChange}
									onSearch={onSearch}
									filterOption={(input, option) =>
										option.children
											.toLowerCase()
											.indexOf(input.toLowerCase()) >= 0
									}>
									<Option value='jack'>Collection 1</Option>
									<Option value='lucy'>Collection 2</Option>
									<Option value='tom'>Collection 3</Option>
								</Select>
							</FormItem>

							<FormItem name='supply'>
								<FormItemName>Supply</FormItemName>
								<FormItemDesc>
									The number of items that can be minted. No gas cost to you!
								</FormItemDesc>
								<Input size='large' placeholder='1' />
							</FormItem>

							<FormItem>
								<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
									<Button type='primary' htmlType='submit'>
										Submit
									</Button>
								</Form.Item>
							</FormItem>
						</FormWrapper>
					</Form>
				</BodyWrapper>
			</Wrapper>
		</Container>
	);
}

export default withContext(CreateNft);
