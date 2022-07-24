import React, { useEffect, useState } from 'react';
import NftItem from '../../components/nft-item';
import {
	Container,
	ListNftWrapper,
	Title,
	TopWrapper,
} from './list-nft.elements';
import { customAxios } from '../../utils/custom-axios';
import { useCanister, useConnect } from '@connect2ic/react';

function ListNft() {
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
	const [prinpId, setPrinpId] = useState();
	const [listNFt, setListNFt] = useState([]);
	const [listAllNFt, setListAllNFt] = useState([]);

	const [superheroes, { loading, error }] = useCanister('superheroes');
	useEffect(async () => {
		if(superheroes) {
			getListAll();
		}
	}, [superheroes]);

	const getListAll = async () => {
		const res = await superheroes.getAllTokens();
		const promise4all = Promise.all(
			res.map(function (el) {
				return customAxios(el.metadata[0]?.tokenUri);
			})
		);
		const resu = await promise4all;
		const newlist = res.map((el, index) => {
			return {...el, ...resu[index]}
		})
		console.log(newlist);
		setListAllNFt(newlist);
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

	return (
		<Container>
			<TopWrapper>
				<Title>Explore</Title>
			</TopWrapper>

			<ListNftWrapper>
				{listAllNFt.map((item, index) => (
					<NftItem item={item} key={index} />
				))}
			</ListNftWrapper>
		</Container>
	);
}

export default ListNft;
