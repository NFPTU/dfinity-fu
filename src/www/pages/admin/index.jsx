import React, { useEffect, useState } from 'react';
import { metadata, levelData } from './nft';
import { useCanister, useConnect } from '@connect2ic/react';
import { Principal } from '@dfinity/principal';

function Admin() {
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
	const [superheroes, { loading, error }] = useCanister('superheroes');
	const [token] = useCanister('token');
	

	const onSubmit = async () => {
			console.log(superheroes);
			const res = await superheroes?.setTokensMetadata(metadata);
			console.log(res);
			const res2 = await superheroes?.setLevelMetadata(levelData);
			console.log(res2);
			const response = await superheroes?.getTokensMetadata();
			console.log(response);
		
	};

	const onClaim = async () => {
		try {
			console.log(
				superheroes,
				activeProvider,
				isIdle,
				isConnecting,
				isConnected
			);
			connect();
			const res = await superheroes?.claiming();
			console.log(res);
		} catch (er) {
			console.log('Err', er);
		}
	};

	const onStakeNestInLand = async () => {
		try {
			const listNest = getNFTByType('Nest');
			const listLand = getNFTByType('Land');
			console.log('nest', listNest);
			console.log('land', listLand);
			const res = await superheroes?.stakeNestInLand(
				listNest[0]?.tokenId[0],
				listLand[0]?.tokenId[0]
			);
			console.log('res', res);
		} catch (er) {
			console.log(er);
		}
	};

	const onStakeQueenInNest = async () => {
		try {
			const listNest = getNFTByType('Queen');
			const listLand = getNFTByType('Nest');
			const res = await superheroes?.stakeQueenInNest(
				listNest[0]?.tokenId[0],
				listLand[0]?.tokenId[0]
			);
			console.log(res);
		} catch (er) {
			console.log(er);
		}
	};

	const onGetData = async () => {
		console.log(principal?.toString());
		const resp = await superheroes?.getUserTokens(principal?.toString());
		setListNFt(resp?.ok);
		console.log(resp);
	};

	const onChangeName = async () => {
		const resp = await superheroes?.updateUser('main');
		console.log('response :', resp);
	};

	const onBreedingWorker = async () => {
		const listQ = getNFTByType('Queen');
		console.log(listQ);
		const res = await superheroes.breedAntWorkder(listQ[0]?.tokenId[0]);
		console.log('onBreedingWorker', res);
	};

	const onClaimWorker = async () => {
		const listQ = getNFTByType('Queen');
		const res = await superheroes.claimWorkerEgg(listQ[listQ.length-1].tokenId[0]);
		console.log('onClaimWorker', res);
	};

	const onWorkerFarmInLand = async () => {
		const farmRequest = {
			food: [],
			gold: [],
			leaf: [],
			soil: [],
			countIds: [],
		};
		const listQ = getNFTByType('Land');
		const res = await superheroes.workerFarmInLand(
			farmRequest,
			listQ[0].tokenId[0]
		);
	};

	const getNFTByType = (type) => {
		return listNFt.filter((el) => el.attributes[0].value === type);
	};

	const onClaimResourceInLand = async () => {
		const listQ = getNFTByType('Land');
		const res = await superheroes.claimResourceInLand(listQ[0].tokenId[0]);
		console.log(res);
	};

	const getUserInfo = async () => {
		const res = await superheroes.getUserInfo(principal?.toString());
		console.log(res);
	};

	const createOrder = async () => {
		const listQ = getNFTByType('Land');
		const res = await superheroes.createOrder(listQ[0].tokenId[0], 10);
		console.log(res);
	};

	const transfer = async () => {
		const res = await token.transfer(Principal.fromText(process.env.SUPERHEROES_CANISTER_ID), 5000000);
		console.log(res);
		const res2 = await token.balanceOf(Principal.fromText(process.env.SUPERHEROES_CANISTER_ID));
		console.log(res2);
	};


	return (
		<>
			<button onClick={getUserInfo}> get User</button>
			<br />
			<button onClick={onGetData}> get Data</button>
			<br />
			<button onClick={onSubmit}> Submit</button>

			<br />
			<button onClick={onClaim}> Claiming NFT</button>
			<br />
			<button onClick={onStakeNestInLand}> stake nest NFT</button>
			<br />
			<button onClick={onStakeQueenInNest}> stake Queen NFT</button>
			<br />
			<button onClick={onChangeName}> change name</button>
			<br />
			<button onClick={onBreedingWorker}> Breeding worker ant</button>
			<br />
			<button onClick={onClaimWorker}> Claim worker ant</button>
			<br />
			<button onClick={onWorkerFarmInLand}> worker ant Farm land</button>
			<br />
			<button onClick={onClaimResourceInLand}> claim Resource In Land</button>
			<br />
			<button onClick={transfer}> transfer</button>
		</>
	);
}

export default Admin;
