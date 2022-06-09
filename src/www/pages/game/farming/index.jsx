import React, { useState, useEffect } from 'react';
import Card from '../../../components/game/card-origin';
import {
	Btn,
	BtnList,
	Container,
	Countdown,
	CountdownWrapper,
	Hour,
	Info,
	InfoBody,
	InfoBodyLeft,
	InfoBodyLeftItem,
	InfoBodyRight,
	InfoBodyRightItem,
	InfoTop,
	Left,
	Level,
	Minutes,
	Right,
	Second,
	Type,
	Wrapper,
	CardImg,
	LeftWrapper,
	ListMiniCard,
	CardWrapper,
	ListResource,
	ListResourceWrapper,
	ResourceImg,
	ResourceItem,
	ResourceQuantity,
	ResourceTitle,
} from './farming.elements';
import './farming.css';

function Farming() {
	const listMiniCard = [
		{
			id: 1,
			imgUrl:
				'https://ipfs.io/ipfs/QmUCg2d1Ww2734tiCwEPA5s3WL1Pr9jMTNsoPx3A9vKsJe',
		},
		{
			id: 2,
			imgUrl:
				'https://gateway.ipfs.io/ipfs/QmPiXkBCNYgKw1J4Yxnj9Z6RUPfmxER5ePPc8YCkdykinN',
		},
		{
			id: 3,
			imgUrl:
				'https://bafybeifcb7jiwqztcr4buscdhbtl6ukpsecmhbngxp63tudjp23anhwiiy.ipfs.dweb.link/',
		},
		{
			id: 4,
			imgUrl:
				'https://gateway.ipfs.io/ipfs/QmVy4xphMjDCYGmzQR6FhU8E6gHEaMpKbzf39wKFyqNBVV',
		},
		{
			id: 5,
			imgUrl:
				'https://gateway.ipfs.io/ipfs/QmPUoWpAkUVAhWo2EFwqaGxEczBptftCv5cdJXsFvfGr6T',
		},
		{
			id: 6,
			imgUrl:
				'https://ipfs.io/ipfs/QmUCg2d1Ww2734tiCwEPA5s3WL1Pr9jMTNsoPx3A9vKsJe',
		},
		{
			id: 7,
			imgUrl:
				'https://gateway.ipfs.io/ipfs/QmPiXkBCNYgKw1J4Yxnj9Z6RUPfmxER5ePPc8YCkdykinN',
		},
		{
			id: 8,
			imgUrl:
				'https://bafybeifcb7jiwqztcr4buscdhbtl6ukpsecmhbngxp63tudjp23anhwiiy.ipfs.dweb.link/',
		},
		{
			id: 9,
			imgUrl:
				'https://gateway.ipfs.io/ipfs/QmVy4xphMjDCYGmzQR6FhU8E6gHEaMpKbzf39wKFyqNBVV',
		},
		{
			id: 10,
			imgUrl:
				'https://gateway.ipfs.io/ipfs/QmPUoWpAkUVAhWo2EFwqaGxEczBptftCv5cdJXsFvfGr6T',
		},
	];

	return (
		<Container>
			<Wrapper>
				<Left>
					<LeftWrapper>
						<ListMiniCard>
							{listMiniCard.map((item) => (
								<CardImg
									onClick={() => handleClickCardMini(item.imgUrl)}
									src={item.imgUrl}
									alt=''
								/>
							))}
						</ListMiniCard>
						<CardWrapper>
							<Card />
						</CardWrapper>
					</LeftWrapper>
				</Left>

				<Right>
					<Info>
						<InfoTop>
							<Type>Queen</Type>
							<Level>LV: 1</Level>
						</InfoTop>
						<InfoBody>
							<InfoBodyLeft>
								<InfoBodyLeftItem>Rarity:</InfoBodyLeftItem>
								<InfoBodyLeftItem>In Nest:</InfoBodyLeftItem>
								<InfoBodyLeftItem>Food Per Worker:</InfoBodyLeftItem>
								<InfoBodyLeftItem>Breed Worker Time:</InfoBodyLeftItem>
								<InfoBodyLeftItem>Undefined:</InfoBodyLeftItem>
							</InfoBodyLeft>

							<InfoBodyRight>
								<InfoBodyRightItem>Common</InfoBodyRightItem>
								<InfoBodyRightItem>10</InfoBodyRightItem>
								<InfoBodyRightItem>20</InfoBodyRightItem>
								<InfoBodyRightItem>12 hours</InfoBodyRightItem>
								<InfoBodyRightItem>Undefined</InfoBodyRightItem>
							</InfoBodyRight>
						</InfoBody>
					</Info>

					<ListResourceWrapper>
						<ResourceTitle>Cost</ResourceTitle>
						<ListResource>
							<ResourceItem>
								<ResourceImg
									src='https://play.farmersworld.io/img/plain-gold-icon.png'
									alt=''
								/>
								<ResourceQuantity>100</ResourceQuantity>
							</ResourceItem>
							<ResourceItem>
								<ResourceImg
									src='https://play.farmersworld.io/img/plain-gold-icon.png'
									alt=''
								/>
								<ResourceQuantity>100</ResourceQuantity>
							</ResourceItem>
							<ResourceItem>
								<ResourceImg
									src='https://play.farmersworld.io/img/plain-gold-icon.png'
									alt=''
								/>
								<ResourceQuantity>100</ResourceQuantity>
							</ResourceItem>
							<ResourceItem>
								<ResourceImg
									src='https://play.farmersworld.io/img/plain-gold-icon.png'
									alt=''
								/>
								<ResourceQuantity>100</ResourceQuantity>
							</ResourceItem>
						</ListResource>
					</ListResourceWrapper>

					<CountdownWrapper>
						<Countdown>
							<Hour>00:</Hour>
							<Minutes>00:</Minutes>
							<Second>12</Second>
						</Countdown>
					</CountdownWrapper>

					<BtnList>
						<Btn>Farm</Btn>
					</BtnList>
				</Right>
			</Wrapper>
		</Container>
	);
}

export default Farming;
