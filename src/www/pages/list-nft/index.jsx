import React, { useEffect, useState } from 'react';
import NftItem from '../../components/nft-item';
import {
	Container,
	ListNftWrapper,
	Title,
	TopWrapper,
} from './list-nft.elements';
import { superheroes } from '../../../declarations';
import { customAxios } from '../../utils/custom-axios';

function ListNft() {
	const [fileImg, setFileImg] = useState(true);
	const [prinpId, setPrinpId] = useState();
	const [listNFt, setListNFt] = useState([]);
	const [listAllNFt, setListAllNFt] = useState([]);

	useEffect(async () => {
		const connected = await window.ic.plug.isConnected();
		getListAll();
		console.log(connected, 'connected');
		if (connected) {
			const principalId = await window?.ic?.plug?.agent?.getPrincipal();
			setPrinpId(principalId);
			console.log(principalId);
		}
	}, []);
	useEffect(async () => {
		getLIst();
	}, [prinpId]);

	const getListAll = async () => {
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
