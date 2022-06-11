import React, { useEffect, useState } from 'react';
import {} from './home.elements';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useCanister, useConnect } from '@connect2ic/react';
import Card from '../../components/card-nft';
import Button from '../../components/button';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import DialogContent from '@mui/material/DialogContent';
import SliderItem from './components/slider';
import Countdown from 'react-countdown';
import { getRemainingTime } from '../../utils/utils';

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
			<div>
				<Countdown
					date={Date.now() + getRemainingTime(item.claimTimeStamp) * 1000}
				/>
				<Button name='Claim' onClick={() => onClaimFarm(item)} />
			</div>
		);
	};

  console.log('cardSelected', cardSelected)

	return (
		<Container>
			<Grid container spacing={2}>
				<Grid item xs={1}>
					{listNFt.map((el) => (
						<div onClick={() => onChangeCard(el)}>
							<Card data={el} />
						</div>
					))}
				</Grid>
				<Grid item xs={4}>
					{cardSelected && <Card data={cardSelected} />}
				</Grid>
				<Grid item xs={7}>
					Detail
					{cardSelected?.detail?.land?.claimableResource.map((el) =>
						resourceItem(el)
					)}
					<Button name={'Farm'} onClick={onClickFarm} />
				</Grid>
			</Grid>
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
		</Container>
	);
}

export default Farming;
