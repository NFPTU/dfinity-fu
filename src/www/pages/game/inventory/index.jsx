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
	CardItem,
	SkeletonList,
} from './inventory.elements';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useCanister, useConnect } from '@connect2ic/react';
import Card from '../../../components/game/card';
import { nftType } from './mockData';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function Inventory() {
	const [data, setData] = useState([]);
	const [type, setType] = useState('All');
	const [filterData, setFilterData] = useState([]);

	const [superheroes, { loading, error }] = useCanister('superheroes');
	const { principal, isConnected, disconnect } = useConnect();

	//Handle when click sidebar:
	const handleClickSideBar = (type) => {
		setType(type);
		getNFTByType(type);
	};

	//Filter NFT by type:
	const getNFTByType = (type) => {
		const listNFT = data.filter((el) => {
			if (type === 'All') {
				return el;
			} else {
				return el.attributes[0].value === type;
			}
		});

		setFilterData(listNFT);
	};

	//Handle

	//Get All NFT
	const onGetData = async () => {
		// console.log(superheroes, principal?.toString());
		// const response = await superheroes?.getTokensMetadata();
		const resp = await superheroes?.getUserTokens(principal?.toString());

		setData(resp?.ok);
	};

	useEffect(() => {
		onGetData();
	}, [superheroes, principal]);

	useEffect(() => {
		setFilterData(data);
	}, [data]);

	console.log(data)

	return (
		<>
			<Container>
				<SidebarBorder>
					<SideBar></SideBar>
					<ListBtn>
						{nftType.map((item) => (
							<Btn
								key={item.id}
								active={type === item.name ? true : false}
								onClick={() => handleClickSideBar(item.name)}>
								<ImgBtn src={item.image} alt='' />
								<TextBtn>{item.name}</TextBtn>
							</Btn>
						))}
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
						<CardList>
							{filterData ? (
								filterData?.map((item, index) => (
									<Card data={item} key={index} list={filterData} listOrigin={data}/>
								))
							) : (
								<SkeletonList>
									<Stack spacing={1} sx={{ margin: '40px' }}>
										<Skeleton variant='rectangular' width={300} height={300} />
										<Skeleton variant='text' width={300} />
										<Skeleton variant='text' width={300} />
										<Skeleton variant='text' width={300} />
									</Stack>

									<Stack spacing={1} sx={{ margin: '40px' }}>
										<Skeleton variant='rectangular' width={300} height={300} />
										<Skeleton variant='text' width={300} />
										<Skeleton variant='text' width={300} />
										<Skeleton variant='text' width={300} />
									</Stack>

									<Stack spacing={1} sx={{ margin: '40px' }}>
										<Skeleton variant='rectangular' width={300} height={300} />
										<Skeleton variant='text' width={300} />
										<Skeleton variant='text' width={300} />
										<Skeleton variant='text' width={300} />
									</Stack>

									<Stack spacing={1} sx={{ margin: '40px' }}>
										<Skeleton variant='rectangular' width={300} height={300} />
										<Skeleton variant='text' width={300} />
										<Skeleton variant='text' width={300} />
										<Skeleton variant='text' width={300} />
									</Stack>

									<Stack spacing={1} sx={{ margin: '40px' }}>
										<Skeleton variant='rectangular' width={300} height={300} />
										<Skeleton variant='text' width={300} />
										<Skeleton variant='text' width={300} />
										<Skeleton variant='text' width={300} />
									</Stack>
								</SkeletonList>
							)}
						</CardList>
					</BodyBorder>
				</BodyWrapper>
			</Container>
		</>
	);
}

export default Inventory;
