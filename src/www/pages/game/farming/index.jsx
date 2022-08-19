import React, { useState, useEffect, useRef } from 'react';
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
	ResourceFarmPerTime,
	ResourceItemName,
	ResourceItemValue,
	ResourceItemm,
	ResourceFarmPerTimeTitle,
	ResourceItemImg,
} from './farming.elements';
import './farming.css';
import { listMiniCard } from './mockData';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '../../../components/button';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import DialogContent from '@mui/material/DialogContent';
import SliderItem from './components/slider';
import Countdown from 'react-countdown';
import { getRemainingTime, toHHMMSS } from '../../../utils/utils';
import { useCanister, useConnect } from '@connect2ic/react';
import PopupList from '../../../components/popup-list';
import { withContext } from '../../../hooks';
import CardNft from '../../../components/card-nft';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { roundToTwoDecimal } from '../../../utils/utils';

function Farming(props) {
	const { setOpenProcess, tabMarketFooter } = props;

	const [listNftNest, setListNftNest] = useState([]);
	const [listNFtLand, setlistNFtLand] = useState([]);
	const [listNFt, setListNFt] = useState([]);
	const [cardSelected, setCardSelected] = useState();
	const [cardMiniActive, setCardMiniActive] = useState();
	const [showFarmDialog, setShowFarmDialog] = useState(false);
	const [valueResource, setValueResource] = useState({
		food: 0,
		gold: 0,
		leaf: 0,
		soil: 0,
	});
	const [listWorker, setListWorker] = useState([]);
	const [remainWorker, setRemainWorker] = useState([]);
	const [resourceFarmPerTime, setResourceFarmPerTime] = useState({});
	const [superheroes, { loading, error }] = useCanister('superheroes');
	const { principal } = useConnect();
	const [open, setOpen] = useState(false);

	const [inKingdom, setInKingdom] = useState('');

	const [isCompletedCount, setIsCompletedCount] = useState(true);

	const [isClaim, setIsClaim] = useState(true); 

	const getNFTByType = (type) => {
		return listNFt.filter((el) => el.attributes[0].value === type);
	};

	const getNFTById = (id) => {
		const listNFTs = listNFt?.find((el) => el.tokenId[0] == id);
		return listNFTs;
	};

	const toastEmitter = async (type, message) => {
		switch (type) {
			case 'warn':
				toast.warn(message, {
					position: 'top-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				break;

			case 'success':
				toast.success(message, {
					position: 'top-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			default:
				break;
		}
	};

	const onGetData = async () => {
		const resp = await superheroes?.getUserTokens(principal?.toString());
		const listLand = resp?.ok.filter((el) => el.attributes[0].value === 'Land');
		const listNest = resp?.ok.filter((el) => el.attributes[0].value === 'Nest');
		const inKingdom = resp?.ok.filter(
			(el) => el.attributes[0].value === 'Kingdom'
		);

		await onGetAvailWorker();
		setListNFt(resp?.ok);
		setCardSelected(listLand[0]);
		setCardMiniActive(listLand[0]?.tokenId[0]);
		setlistNFtLand(listLand);
		setListNftNest(listNest);
		setInKingdom(inKingdom);
	};

	const onGetAvailWorker = async () => {
		const resp = await superheroes?.getUserAvailableWorker(
			principal?.toString()
		);
		setListWorker(resp?.ok);
		setResourceFarmPerTime(resp?.ok[0]?.detail?.worker?.info?.farmPerTime);
		setRemainWorker(resp?.ok.length);
	};

	const onChangeCard = (item) => {
		setCardSelected(item);
		setCardMiniActive(item?.tokenId[0]);
	};


	const onClickFarm = async () => {
		if(listWorker?.length){
			setShowFarmDialog(true);
		}
		toast('You do not have worker ant to farm');
	};

	const handleClose = async () => {
		setShowFarmDialog(false);

		const resp = await superheroes?.getUserAvailableWorker(
			principal?.toString()
		);
		setRemainWorker(resp?.ok.length);
		setValueResource({
			food: 0,
			gold: 0,
			leaf: 0,
			soil: 0,
		});
	};

	const onChangeSlide = (item, value) => {
		const selectedWorker = Object.values(valueResource).reduce(
			(previousValue, currentValue) => previousValue + currentValue,
			0
		);

		const remainW = listWorker.length - selectedWorker;
		if (value - valueResource[item] <= remainW) {
			setRemainWorker(remainW);
			setValueResource((preValue) => ({ ...preValue, [item]: value }));
		}
	};

	const confirmDialog = async () => {
		setShowFarmDialog(false);
		Swal.fire({
			title: 'Do you want to farm resource now?',
			showDenyButton: false,
			showCancelButton: true,
			confirmButtonText: 'Ok',
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				onSubmitFarm();
			} else if (result.isDenied) {
				setShowFarmDialog(false);
			}
		});
	};

	const onSubmitFarm = async () => {
		setOpenProcess(true);
		const resp = await superheroes?.workerFarmInLand(
			sliceFarm(),
			cardSelected.tokenId[0]
		);
		await onGetData();
		setOpenProcess(false);
		toastEmitter("warn", "Farming..., please wait for timeout to claim resource !!!");
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
		return farmRequest;
	};

	const onClaimFarm = async (item) => {
		try {
			if (!isCompletedCount) {
				toastEmitter('warn', 'You need to wait for the time out to claim');
			} else {
				setOpenProcess(true);
				const resp = await superheroes?.claimResourceInLand(
					cardSelected.tokenId[0],
					item.id
				);
				await onGetData();
				setOpenProcess(false);
				setIsClaim(true);
				toastEmitter("success", "Claim Successfully !!!");
				setOpen(false);
			}

		} catch (err) {
			setOpenProcess(false);
		}
	};

	const onStakeNestInLand = async (nest) => {
		try {
			setOpenProcess(true);
			const res = await superheroes?.stakeNestInLand(
				nest?.tokenId[0],
				cardSelected.tokenId[0]
			);

			setOpenProcess(false);
			toastEmitter("success", "Dig Nest Successfully !!!");
			setOpen(false);
			onGetData();
		} catch (er) {}
	};

	const rendterBtn = (land) => {
		return <Btn onClick={() => onStakeNestInLand(land)}>Dig</Btn>;
	};

	const resourceItem = (item) => {
		return (
			<>
				<ListResource>
					{Object.entries(item?.resource).map(([key, value]) => {
						if (!value) return;
						<ResourceItem key={key}>
							<ResourceImg src={`/images/navbar/icons/${key}.png`} alt='' />
							<ResourceQuantity>{value || 0}</ResourceQuantity>
						</ResourceItem>;
					})}
				</ListResource>
				<Countdown
				onStart={(props) =>  setIsCompletedCount(false)}
					date={Date.now() + getRemainingTime(item.claimTimeStamp) * 1000}
					onComplete={(props) => onCompleteCount(props.completed)}
					onMount={(props) => {
						setIsCompletedCount(props.completed);

					}}
				/>
				<Button name='Claim' disabled={!isCompletedCount} onClick={() => onClaimFarm(item)} />
			</>
		);
	};

	const onCompleteCount = (props) => {
		setIsCompletedCount(props);
		setIsClaim(false);
		toast('Farm resource successfully!!!');
	};

	useEffect(() => {
		if (principal && superheroes) {
			onGetData();
		}
	}, [principal, superheroes]);

	return (
		<Container>
			<Wrapper>
				<Left>
					<LeftWrapper>
						<ListMiniCard>
							{!listNFtLand ? (
								<Stack spacing={1}>
									<Skeleton variant='rectangular' width={60} height={'100%'} />
								</Stack>
							) : (
								listNFtLand.map((el, index) => (
									<CardNft
										active={cardMiniActive === el?.tokenId[0] ? true : false}
										onChangeCard={onChangeCard}
										data={el}
										width={62}
										height={100}
										heightImg={60}
										miniCard={true}
										key={index}
									/>
								))
							)}
						</ListMiniCard>
						<CardWrapper>
							{!cardSelected ? (
								<Stack spacing={1}>
									<Skeleton variant='text' width={240} height={15} />
									<Skeleton variant='text' width={240} height={15} />
									<Skeleton variant='rectangular' width={240} height={245} />
								</Stack>
							) : (
								<CardNft data={cardSelected} heightImg={160} />
							)}
						</CardWrapper>
					</LeftWrapper>
				</Left>

				<Right>
					<Info>
						{!cardSelected ? (
							<Stack spacing={1} sx={{ marginBottom: '10px' }}>
								<Skeleton variant='text' width={435} height={10} />
								<Skeleton variant='text' width={435} height={10} />
							</Stack>
						) : (
							<InfoTop>
								<Type>{cardSelected?.attributes[0]?.value || 'Land'}</Type>
							</InfoTop>
						)}
						{!cardSelected ? (
							<Stack spacing={1} sx={{ marginBottom: '10px' }}>
								<Skeleton variant='rectangular' width={435} height={80} />
							</Stack>
						) : (
							<InfoBody>
								<InfoBodyLeft>
									<InfoBodyLeftItem>Rarity:</InfoBodyLeftItem>
									<InfoBodyLeftItem>Farming Time:</InfoBodyLeftItem>
									<InfoBodyLeftItem>In Kingdom:</InfoBodyLeftItem>
								</InfoBodyLeft>

								<InfoBodyRight>
									<InfoBodyRightItem>
										{cardSelected?.attributes[1]?.value || 'Uncommon'}
									</InfoBodyRightItem>
									<InfoBodyRightItem>
										{cardSelected?.detail?.land?.info?.farmingTime
											? toHHMMSS(cardSelected?.detail?.land?.info?.farmingTime)
											: 0}
									</InfoBodyRightItem>
									<InfoBodyRightItem>
										{inKingdom && inKingdom[0]?.name}
									</InfoBodyRightItem>
								</InfoBodyRight>
							</InfoBody>
						)}
					</Info>

					<ListResourceWrapper>
						<ResourceTitle>Resource</ResourceTitle>
						<ListResource>
							<ResourceItem>
								<ResourceImg src='/images/navbar/icons/gold.png' alt='' />
								<ResourceQuantity>
									{cardSelected?.detail?.land?.resource?.gold || 0}
								</ResourceQuantity>
							</ResourceItem>
							<ResourceItem>
								<ResourceImg src='/images/navbar/icons/soil.png' alt='' />
								<ResourceQuantity>
									{cardSelected?.detail?.land?.resource?.soil || 0}
								</ResourceQuantity>
							</ResourceItem>
							<ResourceItem>
								<ResourceImg src='/images/navbar/icons/food.png' alt='' />
								<ResourceQuantity>
									{cardSelected?.detail?.land?.resource?.food || 0}
								</ResourceQuantity>
							</ResourceItem>
							<ResourceItem>
								<ResourceImg src='/images/navbar/icons/leaf.jpeg' alt='' />
								<ResourceQuantity>
									{cardSelected?.detail?.land?.resource?.leaf || 0}
								</ResourceQuantity>
							</ResourceItem>
						</ListResource>
					</ListResourceWrapper>

					{cardSelected?.detail?.land?.claimableResource.map((el, index) => {
						return (
							<CountdownWrapper key={index}>
								<CountdownInside>{resourceItem(el)}</CountdownInside>
							</CountdownWrapper>
						);
					})}

					<BtnList>
						<Button disabled={!isCompletedCount || !isClaim} onClick={onClickFarm}>Farm</Button>
						<Button onClick={() => setOpen(true)}>Dig Nest</Button>
					</BtnList>

					<Dialog onClose={handleClose} open={showFarmDialog && showFarmDialog}>
						{listWorker?.length && (
							<DialogContent>
								<Stack sx={{ height: 300 }} spacing={1} direction='row'>
									<SliderItem
										min={0}
										max={listWorker.length}
										value={valueResource.food}
										handleSliderChange={(event, newValue) => {
											onChangeSlide('food', newValue);
										}}
										img={'/images/navbar/icons/food.png'}
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
										img={'/images/navbar/icons/leaf.jpeg'}
									/>
								</Stack>
								<Button name={'Farm'} onClick={confirmDialog} />
								Idle: {remainWorker}
								<ResourceFarmPerTimeTitle>
									List resource farm per time
								</ResourceFarmPerTimeTitle>
								<ResourceFarmPerTime>
									<ResourceItemm>
										<ResourceItemName>Food:</ResourceItemName>
										<ResourceItemValue>
											{roundToTwoDecimal(
												resourceFarmPerTime?.food * valueResource?.food
											)}
										</ResourceItemValue>
										<ResourceItemImg
											src={'/images/navbar/icons/food.png'}
											alt='resource item img'
										/>
									</ResourceItemm>
									<ResourceItem>
										<ResourceItemName>Gold:</ResourceItemName>
										<ResourceItemValue>
											{roundToTwoDecimal(
												resourceFarmPerTime?.gold * valueResource?.gold
											)}
										</ResourceItemValue>
										<ResourceItemImg
											src={'/images/navbar/icons/gold.png'}
											alt='resource item img'
										/>
									</ResourceItem>
									<ResourceItem>
										<ResourceItemName>Soil:</ResourceItemName>
										<ResourceItemValue>
											{roundToTwoDecimal(
												resourceFarmPerTime?.soil * valueResource?.soil
											)}
										</ResourceItemValue>
										<ResourceItemImg
											src={'/images/navbar/icons/soil.png'}
											alt='resource item img'
										/>
									</ResourceItem>
									<ResourceItem>
										<ResourceItemName>Leaf:</ResourceItemName>
										<ResourceItemValue>
											{roundToTwoDecimal(
												resourceFarmPerTime?.leaf * valueResource?.leaf
											)}
										</ResourceItemValue>
										<ResourceItemImg
											src={'/images/navbar/icons/leaf.jpeg'}
											alt='resource item img'
										/>
									</ResourceItem>
								</ResourceFarmPerTime>
							</DialogContent>
						)}
					</Dialog>
				</Right>
			</Wrapper>
			<PopupList
				dialogTitle={'Choose nest to dig nest into land'}
				open={open}
				setOpen={setOpen}>
				{getNFTByType('Nest').map((el, index) => {
					if (el?.detail?.nest?.inLand[0]) return;
					return (
						<CardNft
							key={index}
							data={el}
							footer={() => rendterBtn(el)}
							alt=''
						/>
					);
				})}
			</PopupList>
		</Container>
	);
}

export default withContext(Farming);
