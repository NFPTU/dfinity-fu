import React, { useEffect, useState } from 'react';
import { metadata } from './nft';
import { useCanister, useConnect } from '@connect2ic/react';

function Admin() {
	const [superheroes, { loading, error }] = useCanister('superheroes');
	const { principal, isConnected, disconnect } = useConnect();
	const [listNFt, setListNFt] = useState([]);

	const onSubmit = async () => {
		try {
			console.log(process.env.SUPERHEROES_CANISTER_ID);
			const newArr = metadata.map((el) => ({ nonfungible: el }));
			console.log(metadata);
			const res = await superheroes?.setTokensMetadata(metadata);
			console.log(res);
			const response = await superheroes?.getTokensMetadata();
			console.log(response);
		} catch (er) {
			console.log(er);
		}
	};

	const onClaim = async () => {
		try {
			const res = await superheroes?.claiming();
			console.log(res);
		} catch (er) {
			console.log(er);
		}
	};

	const onStakeNestInLand = async () => {
		try {
			const listNest = getNFTByType('Nest');
			const listLand = getNFTByType('Land');
			console.log(listNest, listLand);
			const res = await superheroes?.stakeNestInLand(
				listNest[0].tokenId[0],
				listLand[0].tokenId[0]
			);
			console.log(res);
		} catch (er) {
			console.log(er);
		}
	};

	const onStakeQueenInNest = async () => {
		try {
			const listNest = getNFTByType('Queen');
			const listLand = getNFTByType('Nest');
			const res = await superheroes?.stakeQueenInNest(
				listNest[0].tokenId[0],
				listLand[0].tokenId[0]
			);
			console.log(res);
		} catch (er) {
			console.log(er);
		}
	};

	const onGetData = async () => {
		// console.log(superheroes, principal?.toString());
		const resp = await superheroes?.getUserTokens(principal?.toString());
		setListNFt(resp?.ok);
		console.log(resp);
	};

  const onChangeName = async () => {
    const resp = await superheroes?.updateUser("main");
		console.log(resp);
  }

	const getNFTByType = (type) => {
		return listNFt.filter((el) => el.attributes[0].value === type);
	};

	return (
		<>
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
		</>
	);
}

export default Admin;
