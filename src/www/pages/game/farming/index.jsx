import React, { useState, useEffect } from 'react';
import Card from '../../../components/card-nft';
import {
	Btn,
	BtnList,
	Container,
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
	CountdownInside,
} from './farming.elements';
import './farming.css';
import { listMiniCard } from './mockData';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useCanister, useConnect } from '@connect2ic/react';
import Button from '../../../components/button';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import DialogContent from '@mui/material/DialogContent';
import SliderItem from './components/slider';
import Countdown from 'react-countdown';
import { getRemainingTime } from '../../../utils/utils';

function Farming() {
	const [listNFt, setListNFt] = useState([]);
	const [cardSelected, setCardSelected] = useState();
	const [showFarmDialog, setShowFarmDialog] = useState();
	const [valueResource, setValueResource] = useState({
		food: 0,
		gold: 0,
		leaf: 0,
		soil: 0,
	});
	const [listWorker, setListWorker] = useState([]);
	const [remainWorker, setRemainWorker] = useState([]);
	const [superheroes, { loading, error }] = useCanister('superheroes');
	const { principal } = useConnect();

	const onGetData = async () => {
		const resp = await superheroes?.getUserTokens(principal?.toString());
		const listLand = resp?.ok.filter((el) => el.attributes[0].value === 'Land');
		console.log(listLand);
		setCardSelected(listLand[0]);
		setListNFt(listLand);
	};

	const onGetAvailWorker = async () => {
		const resp = await superheroes?.getUserAvailableWorker(
			principal?.toString()
		);
		setListWorker(resp?.ok);
		setRemainWorker(resp?.ok.length);
		console.log(resp);
	};

	useEffect(() => {
		if (principal && superheroes) {
			console.log(superheroes);
			onGetData();
		}
	}, [principal, superheroes]);

	const onChangeCard = (item) => {
		setCardSelected(item);

		console.log('cardSelected when click mini card:', cardSelected);
	};

	const onClickFarm = () => {
		onGetAvailWorker();
		setShowFarmDialog(true);
	};

	const handleClose = () => {
		setShowFarmDialog(false);
	};

	const onChangeSlide = (item, value) => {
		const selectedWorker = Object.values(valueResource).reduce(
			(previousValue, currentValue) => previousValue + currentValue,
			0
		);
		console.log(selectedWorker);
		const remainW = listWorker.length - selectedWorker;
		if (value - valueResource[item] <= remainW) {
			setRemainWorker(remainW);
			setValueResource((preValue) => ({ ...preValue, [item]: value }));
		}
	};

	const onSubmitFarm = async () => {
		console.log(superheroes);
		const resp = await superheroes?.workerFarmInLand(
			sliceFarm(),
			cardSelected.tokenId[0]
		);
		console.log(resp);
		onGetData();
		setShowFarmDialog(false);
	};

	const sliceFarm = () => {
		const farmRequest = {};
		farmRequest.food = listWorker
			.slice(0, valueResource.food)
			.map((el) => el.tokenId[0]);
		farmRequest.soil = listWorker
			.slice(0, valueResource.soil)
			.map((el) => el.tokenId[0]);
		farmRequest.leaf = listWorker
			.slice(0, valueResource.leaf)
			.map((el) => el.tokenId[0]);
		farmRequest.gold = listWorker
			.slice(0, valueResource.gold)
			.map((el) => el.tokenId[0]);
		farmRequest.countIds = listWorker.length - remainWorker;
		console.log(farmRequest);
		return farmRequest;
	};

	const onClaimFarm = async (item) => {
		console.log(item);
		const resp = await superheroes?.claimResourceInLand(
			cardSelected.tokenId[0],
			item.id
		);
		onGetData();
		console.log(resp);
	};

	const resourceItem = (item) => {
		return (
			<>
				<Countdown
					date={Date.now() + getRemainingTime(item.claimTimeStamp) * 1000}
				/>
				<Button name='Claim' onClick={() => onClaimFarm(item)} />
			</>
		);
	};

	console.log('cardSelected farming beta', cardSelected);

	return (
		<Container>
			<Wrapper>
				<Left>
					<LeftWrapper>
						<ListMiniCard>
							{listNFt.map((el) => (
								<CardImg
									onClick={() => onChangeCard(el)}
									src={el.image}
									alt=''
								/>
							))}
						</ListMiniCard>
						<CardWrapper>
							{cardSelected && <Card data={cardSelected} width={280} height={380}/>}
						</CardWrapper>
					</LeftWrapper>
				</Left>

				<Right>
					<Info>
						<InfoTop>
							<Type>{cardSelected?.attributes[0]?.value || 'Land'}</Type>
							<Level>Limit: {cardSelected?.attributes[2]?.value || 0}</Level>
						</InfoTop>
						<InfoBody>
							<InfoBodyLeft>
								<InfoBodyLeftItem>Rarity:</InfoBodyLeftItem>
								<InfoBodyLeftItem>Farming Time:</InfoBodyLeftItem>
								<InfoBodyLeftItem>Food Per Worker:</InfoBodyLeftItem>
								<InfoBodyLeftItem>Breed Worker Time:</InfoBodyLeftItem>
								<InfoBodyLeftItem>Undefined:</InfoBodyLeftItem>
							</InfoBodyLeft>

							<InfoBodyRight>
								<InfoBodyRightItem>
									{cardSelected?.attributes[1]?.value || 'Uncommon'}
								</InfoBodyRightItem>
								<InfoBodyRightItem>
									{Number(cardSelected?.detail?.land?.info?.farmingTime) || 0}
								</InfoBodyRightItem>
								<InfoBodyRightItem>20</InfoBodyRightItem>
								<InfoBodyRightItem>12 hours</InfoBodyRightItem>
								<InfoBodyRightItem>Undefined</InfoBodyRightItem>
							</InfoBodyRight>
						</InfoBody>
					</Info>

					<ListResourceWrapper>
						<ResourceTitle>Resource</ResourceTitle>
						<ListResource>
							<ResourceItem>
								<ResourceImg
									src='https://play.farmersworld.io/img/plain-gold-icon.png'
									alt=''
								/>
								<ResourceQuantity>
									{cardSelected?.detail?.land?.resource?.gold || 0}
								</ResourceQuantity>
							</ResourceItem>
							<ResourceItem>
								<ResourceImg
									src='https://play.farmersworld.io/img/plain-gold-icon.png'
									alt=''
								/>
								<ResourceQuantity>
									{cardSelected?.detail?.land?.resource?.soil || 0}
								</ResourceQuantity>
							</ResourceItem>
							<ResourceItem>
								<ResourceImg
									src='https://play.farmersworld.io/img/plain-gold-icon.png'
									alt=''
								/>
								<ResourceQuantity>
									{cardSelected?.detail?.land?.resource?.food || 0}
								</ResourceQuantity>
							</ResourceItem>
							<ResourceItem>
								<ResourceImg
									src='https://play.farmersworld.io/img/plain-gold-icon.png'
									alt=''
								/>
								<ResourceQuantity>
									{cardSelected?.detail?.land?.resource?.leaf || 0}
								</ResourceQuantity>
							</ResourceItem>
						</ListResource>
					</ListResourceWrapper>

					{cardSelected?.detail?.land?.claimableResource.map((el) => {
						return (
							<CountdownWrapper>
								<CountdownInside>{resourceItem(el)}</CountdownInside>
							</CountdownWrapper>
						);
					})}

					<BtnList>
						<Btn onClick={onClickFarm}>Farm</Btn>
					</BtnList>

					<Dialog onClose={handleClose} open={showFarmDialog}>
						{listWorker?.length ? (
							<DialogContent>
								<Stack sx={{ height: 300 }} spacing={1} direction='row'>
									<SliderItem
										min={0}
										max={listWorker.length}
										value={valueResource.food}
										handleSliderChange={(event, newValue) => {
											onChangeSlide('food', newValue);
										}}
										img={'/images/navbar/icons/meet.png'}
									/>
									<SliderItem
										min={0}
										max={listWorker.length}
										value={valueResource.gold}
										handleSliderChange={(event, newValue) => {
											onChangeSlide('gold', newValue);
										}}
										img={'/images/navbar/icons/gold.png'}
									/>
									<SliderItem
										min={0}
										max={listWorker.length}
										value={valueResource.soil}
										handleSliderChange={(event, newValue) => {
											onChangeSlide('soil', newValue);
										}}
										img={'/images/navbar/icons/soil.png'}
									/>
									<SliderItem
										min={0}
										max={listWorker.length}
										value={valueResource.leaf}
										handleSliderChange={(event, newValue) => {
											onChangeSlide('leaf', newValue);
										}}
										img={'/images/navbar/icons/leaf.png'}
									/>
								</Stack>
								<Button name={'Farm'} onClick={onSubmitFarm} />
								Idle: {remainWorker}
							</DialogContent>
						) : (
							<div>You need more ant worker!</div>
						)}
					</Dialog>
				</Right>
			</Wrapper>
		</Container>
	);
}

export default Farming;
