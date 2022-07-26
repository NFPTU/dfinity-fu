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
import { Principal } from '@dfinity/principal';

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
	const [listNFt, setListNFt] = useState([]);
	const [listAllNFt, setListAllNFt] = useState([]);

	const [superheroes, { loading, error }] = useCanister('superheroes');
	useEffect(async () => {
		if(superheroes) {
			getListAll();
			getLIst()
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
		setListAllNFt(newlist);
	};

	const getLIst = async () => {
		const res = await superheroes.getUserTokens(Principal.fromText(principal));
		const promise4all = Promise.all(
			res.map(function (el) {
				return customAxios(el.metadata[0]?.tokenUri);
			})
		);
		const resu = await promise4all;
		const newlist = res.map((el, index) => {
			return {...el, ...resu[index]}
		})
		setListNFt(newlist);
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

			<TopWrapper>
				<Title>My NFT</Title>
			</TopWrapper>

			<ListNftWrapper>
				{listNFt.map((item, index) => (
					<NftItem item={item} key={index} />
				))}
			</ListNftWrapper>
		</Container>
	);
}

export default ListNft;
