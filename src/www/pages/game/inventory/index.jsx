import React, { useState, useEffect } from 'react';
import {
	Body,
	BodyTop,
	BodyTopList,
	BodyTopTitle,
	BodyWrapper,
	Container,
	SideBar,
	BodyBorder,
	SidebarBorder,
	ListBtn,
	Btn,
	ImgBtn,
	TextBtn,
	BodyTopItem,
	BodyTopName,
	BodyTopImg,
	CardList,
  CardItem
} from './inventory.elements';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useCanister, useConnect } from '@connect2ic/react';
import Card from '../../../components/game/card'

function Inventory() {
	const [data, setData] = useState([]);

	const [superheroes, { loading, error }] = useCanister('superheroes');
	const { principal, isConnected, disconnect } = useConnect();

	const onGetData = async () => {
		// console.log(superheroes, principal?.toString());
		// const response = await superheroes?.getTokensMetadata();
		const resp = await superheroes?.getUserTokens(principal?.toString());

		setData(resp);
	};

	useEffect(() => {
		onGetData();
	}, [superheroes, principal]);

  console.log('data', data?.ok)

	return (
		<>
			<Container>
				<SidebarBorder>
					<SideBar></SideBar>
					<ListBtn>
						<Btn>
							<ImgBtn src={'/images/sidebarButton.png'} alt='' />
							<TextBtn>All</TextBtn>
						</Btn>
						<Btn>
							<ImgBtn src={'/images/sidebarButton.png'} alt='' />
							<TextBtn>Nest</TextBtn>
						</Btn>
						<Btn>
							<ImgBtn src={'/images/sidebarButton.png'} alt='' />
							<TextBtn>Ant</TextBtn>
						</Btn>
					</ListBtn>
				</SidebarBorder>

				<BodyWrapper>
					<BodyTop>
						<BodyTopTitle>Sort By</BodyTopTitle>
						<BodyTopList>
							<BodyTopItem>
								<BodyTopImg src={'/images/navbar/NavbarMid.png'} alt='' />
								<BodyTopName>ID</BodyTopName>
							</BodyTopItem>
							<BodyTopItem>
								<BodyTopImg src={'/images/navbar/NavbarMid.png'} alt='' />
								<BodyTopName>Name</BodyTopName>
							</BodyTopItem>
							<BodyTopItem>
								<BodyTopImg src={'/images/navbar/NavbarMid.png'} alt='' />
								<BodyTopName>Rarity</BodyTopName>
							</BodyTopItem>
						</BodyTopList>
					</BodyTop>

					<BodyBorder>
						<Body></Body>
						<CardList>
              {
                data?.ok?.map((item, index) => (
					<Card data={item} key={index}/>
                ))
              }
						</CardList>
					</BodyBorder>
				</BodyWrapper>
			</Container>
		</>
	);
}

export default Inventory;
