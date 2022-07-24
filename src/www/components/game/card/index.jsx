import React, { useState, useEffect } from 'react';
import {
	Button,
	Container,
	Content,
	Desc,
	Glass,
	Img,
	ImgWrapper,
	Info,
	Name,
	InfoTop,
} from './card.elements';
import StakePopUp from '../../game/popup';
import { useCanister, useConnect } from '@connect2ic/react';

function Card(props) {
	const { data, list, listOrigin } = props;

	const { attributes, description, detail, image, name, tokenId } = data;
	const typeNFT = attributes[0].value;

	const [isOpen, setIsOpen] = useState(false);
	const [listStake, setListStake] = useState([]);

	const [superheroes, { loading, error }] = useCanister('superheroes');

	const handleOpenPopup = () => {
		setIsOpen(true);

		if (typeNFT === 'Queen') {
			const listNest = getNFTByType('Nest');
			setListStake(listNest);
		}
		if (typeNFT === 'Nest') {
			const listLand = getNFTByType('Land');
			setListStake(listLand);
		}
	};

	//Stake Nest In Land:
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
		} catch (er) {
			console.log(er);
		}
	};

	//List Of Queen in Nest:
	const onStakeQueenInNest = async () => {
		try {
			const listNest = getNFTByType('Queen');
			const listLand = getNFTByType('Nest');
			const res = await superheroes?.stakeQueenInNest(
				listNest[0]?.tokenId[0],
				listLand[0]?.tokenId[0]
			);
		} catch (er) {
			console.log(er);
		}
	};

	const getNFTByType = (type) => {
		return listOrigin.filter((el) => el.attributes[0].value === type);
	};

	return (
		<>
			<Container>
				<Content>
					<ImgWrapper>
						<Img src={image} alt='' />
					</ImgWrapper>
					<Info>
						<InfoTop>
							<Name>{name}</Name>
							<Desc>{description}</Desc>
						</InfoTop>
						{(typeNFT !== 'Land' && typeNFT !== 'Worker') && (
							<Button onClick={handleOpenPopup}>Stake</Button>
						)}
					</Info>
				</Content>
			</Container>
			<StakePopUp
				isOpen={isOpen}
				listStake={listStake}
				passChildData={setIsOpen}
				typeNFT={typeNFT}
			/>
		</>
	);
}

export default Card;
