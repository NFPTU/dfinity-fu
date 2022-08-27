import React, { useState, useEffect, useRef } from 'react';
import Card from '../../../components/game/card-origin';
import {
	Btn,
	BtnList,
	Container,
	CountdownInside,
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
	CardWrapper,
	LeftWrapper,
	ListMiniCard,
	NotiBody,
	NotiBtn,
	NotiNavigate,
	NotiTitle,
	NotiWrapper,
	WrapperNoti,
	WrapperLoader
} from './breeding.elements';
import { useCanister, useConnect } from '@connect2ic/react';
import { getRemainingTime, toHHMMSS } from '../../../utils/utils';
import Countdown from 'react-countdown';
import isCompleted from 'react-countdown';
import Swal from 'sweetalert2';
import { withContext } from '../../../hooks';
import CardNft from '../../../components/card-nft';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { levelData } from '../../admin/nft';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Link } from 'react-router-dom';
import { GridLoader } from 'react-spinners';

function Breeding(props) {
	const {
		setOpenProcess,
		resource,
		setCompletedCountBreeding,
		setCardSelectedBreeding,
	} = props;
	const [data, setData] = useState([]);
	const [queenNFT, setQueenNFT] = useState({});
	const [listQueenMiniCard, setListQueenMiniCard] = useState([]);
	const [listWorkerNFT, setListWorkerNFT] = useState([]);
	const [remainWorker, setRemainWorker] = useState([]);
	const [worker, setWorker] = useState();
	const [listNest, setListNest] = useState([]);
	const [cardSelected, setCardSelected] = useState();
	const [cardMiniActive, setCardMiniActive] = useState();

	const [completedCount, setCompletedCount] = useState(false);

	const [inNest, setInNest] = useState('');

	const [resourceUpgrade, setResourceUpgrade] = useState({});

	const [superheroes, { loading, error }] = useCanister('superheroes');
	const { principal, isConnected, disconnect } = useConnect();

	const onChangeCard = (item) => {
		setCardSelected(item);
		setWorker(getNFTById(item?.detail?.queen?.breedingWorkerId));
		setCardMiniActive(item?.tokenId[0]);
	};


	useEffect(() => {
		const getResourceUpgrade = (name, rarity, level) => {
			const infoArr = levelData.reduce((total, current) => {
				return current.name !== name ? [...total] : [...total, current];
			}, []);

			const listLevel = infoArr[0]?.info?.reduce((total, current) => {
				return current.rarity !== rarity
					? [...total]
					: [...total, current.info];
			}, []);

			const listResource = listLevel[0]?.reduce((total, current) => {
				return current.level !== level
					? [...total]
					: [...total, current.costResource];
			}, []);

			setResourceUpgrade(listResource && listResource[0]);
		};

		getResourceUpgrade('Queen', 'Common', 2);
	}, []);

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

	//=================================================================================

	//Get All NFT
	const onGetData = async () => {
		const resp = await superheroes?.getUserTokens(principal?.toString());
		const queenNFTs = resp?.ok.filter(
			(el) => el.attributes[0].value === 'Queen'
		);

		const inNest = resp?.ok?.find(
			(el) => el.tokenId[0] == queenNFTs[0]?.detail?.queen?.inNest[0]
		);

		setInNest(inNest);
		setData(resp?.ok);
		await onGetAvailWorker();
	};

	//Filter NFT by type
	const getNFTByType = (type) => {
		const listNFT = data?.filter((el) => {
			return el.attributes[0].value === type;
		});
		return listNFT;
	};

	const getNFTById = (id) => {
		const listNFT = data?.find((el) => el.tokenId[0] == id);
		return listNFT;
	};

	//Get Queen NFT:
	const getQueenNFT = () => {
		const queenList = getNFTByType('Queen');
		let queenItem = queenList.find(
			(el) => el?.tokenId[0] == cardSelected?.tokenId[0]
		);
		let queen = queenItem || queenList[0];
		setWorker(getNFTById(queen?.detail?.queen?.breedingWorkerId));
		setQueenNFT(queen);
		setCardSelected(queen);
		setCardMiniActive(queen?.tokenId[0]);
		setListQueenMiniCard(queenList);
	};

	//update Queen NFT:
	const updateQueenNFT = async () => {
		const resp = await superheroes?.getUserTokens(principal?.toString());
		const queenNFTs = resp?.ok.filter(
			(el) => el.attributes[0].value === 'Queen'
		);

		setWorker(
			resp?.ok?.find(
				(el) => el.tokenId[0] == queenItem?.detail?.queen?.breedingWorkerId
			)
		);
		setQueenNFT(queenItem);
		setCardSelected(queenItem);
		setCardMiniActive(queenItem?.tokenId[0]);
		setListQueenMiniCard(queenNFTs);
	};

	//Get List Nest:
	const getListNest = () => {
		const listNest = getNFTByType('Nest');

		setListNest(listNest && listNest);
	};

	//Get List Worker:
	const getListWorkerNFT = () => {
		const listWorker = getNFTByType('Worker');

		setListWorkerNFT(listWorker && listWorker);
	};

	const handleCompleteCountDown = () => {
		setEndCountDown(true);
		onGetData();
		toastDialog();
	};

	//===================== Call Superheroes ==========================
	const onBreedingWorker = async () => {
		const foodNeeded =
			cardSelected?.detail?.queen?.info?.resourcePerWorker?.food;
		const limitWorkerInNest = Number(listNest[0]?.detail?.nest?.limit);
		if (resource?.food < foodNeeded) {
			toastEmitter('warn', 'You need more food to breeding');
		} else {
			if (remainWorker === limitWorkerInNest) {
				toastEmitter(
					'warn',
					'Can not breeding! The number of ant worker in the nest has reached the limit'
				);
			} else {
				setOpenProcess(true);
				const listQ = getNFTByType('Queen');
				const res = await superheroes.breedAntWorkder(cardSelected?.tokenId[0]);
				setOpenProcess(false);
			}
		}
	};

	const onClaimWorker = async (e) => {
		if (
			worker?.detail?.worker?.breedTimestamp &&
			!getRemainingTime(worker?.detail?.worker?.breedTimestamp)
		) {
			setOpenProcess(true);
			const res = await superheroes.claimWorkerEgg(cardSelected?.tokenId[0]);
			setOpenProcess(false);
			toastEmitter('success', 'Claim egg successfully !!!');
		} else {
			e?.preventDefault();
			toastEmitter('warn', 'You need to wait for the time out to claim');
		}
	};

	const confirmDialogUpdate = async () => {
		if (cardSelected) {
			if (cardSelected?.detail?.queen?.breedingWorkerId && !completedCount) {
				toastEmitter('warn', 'You need to wait for the time out to upgrade');
			} else {
				Swal.fire({
					title: 'Do you want to upgrade queen now?',
					showDenyButton: false,
					showCancelButton: true,
					confirmButtonText: 'Ok',
					html: `
				<h2><b>Amount of resources needed to upgrade</b></h2><br />
				<div style={{color: 'red'}}>food ${resourceUpgrade?.food}</div>
				<div>gold ${resourceUpgrade?.gold}</div>
				<div>leaf ${resourceUpgrade?.leaf}</div>
				<div>soil ${resourceUpgrade?.soil}</div>
				`,
				}).then((result) => {
					/* Read more about isConfirmed, isDenied below */
					if (result.isConfirmed) {
						onUpgrade();
					} else if (result.isDenied) {
					}
				});
			}
		}
	};

	const onUpgrade = async (e) => {
		if (
			resource?.food < resourceUpgrade?.food ||
			resource?.gold < resourceUpgrade?.gold ||
			resource?.leaf < resourceUpgrade?.leaf ||
			resource?.soil < resourceUpgrade?.soil
		) {
			toast('You do not have enough resource to upgrade!!!');
		} else {
			const listQ = getNFTByType('Queen');
			setOpenProcess(true);
			const res = await superheroes.upgradeLevelQueen(cardSelected?.tokenId[0]);
			setOpenProcess(false);
			await onGetData();
			toast('Upgrade queen successfully!!!');
		}
	};

	const confirmDialogBreeding = async () => {
		Swal.fire({
			title: 'Do you want to breeding now?',
			showDenyButton: false,
			showCancelButton: true,
			confirmButtonText: 'Ok',
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				onBreedingWorker();
			} else if (result.isDenied) {
			}
		});
	};

	const onBreeding = async (e) => {
		if (cardSelected) {
			if(cardSelected?.detail?.queen?.inNest.length === 0 || cardSelected?.detail?.queen?.inNest.length === 1 && cardSelected?.detail?.queen?.inNest[0]) {
				toastEmitter('warn', 'you need to stake queen to nest to start breeding');
			}else if (!cardSelected?.detail?.queen?.breedingWorkerId) {
				setCompletedCount(false);
				setCompletedCountBreeding(false);
				await onBreedingWorker();
			} else {
				await onClaimWorker();
			}
			await onGetData();
		}
		onGetData();
	};

	const onCompleteCount = (props) => {
		setCompletedCount(props);
		setCompletedCountBreeding(props);
		toastEmitter('success', 'Breeding successfully!!!');
	};

	const onMountCount = (props) => {
		setCompletedCount(props);
		setCompletedCountBreeding(props);
	};

	const onGetAvailWorker = async () => {
		const resp = await superheroes?.getUserAvailableWorker(
			principal?.toString()
		);
		setRemainWorker(resp?.ok.length);
	};

	//=================================================================

	useEffect(() => {
		onGetData();
	}, [superheroes, principal]);

	useEffect(() => {
		if (data) {
			getQueenNFT();
			getListWorkerNFT();
			getListNest();
		}
	}, [data]);

	const handleNavigateMarket = () => {
		sessionStorage.setItem('tabFooterActive', 'Kingdom');
	};


	return (
		<>
			<Container>
				{!cardSelected ? (
					<WrapperLoader>
						<GridLoader color={'#e89f01'} />
					</WrapperLoader>
				) : typeof cardSelected === 'undefined' ? (
					<WrapperNoti>
						<NotiWrapper>
							<NotiTitle>
								Currently you do not have Queen Ants, please buy at least 1 to
								continue!!!
							</NotiTitle>
							<NotiBody>
								<NotiNavigate>Go to the market here</NotiNavigate>
								<Link
									to='/market'
									style={{ textDecoration: 'none', color: 'black' }}>
									<NotiBtn onClick={handleNavigateMarket}>
										<LocalGroceryStoreIcon sx={{ marginRight: '5px' }} /> Market
									</NotiBtn>
								</Link>
							</NotiBody>
						</NotiWrapper>
					</WrapperNoti>
				) : (
					<Wrapper>
						<LeftWrapper>
							<ListMiniCard>
								{!listQueenMiniCard ? (
									<Stack spacing={1}>
										<Skeleton
											variant='rectangular'
											width={60}
											height={'100%'}
										/>
									</Stack>
								) : (
									listQueenMiniCard.map((el, index) => (
										<CardNft
											key={index}
											active={cardMiniActive === el?.tokenId[0] ? true : false}
											onChangeCard={onChangeCard}
											data={el}
											width={62}
											height={100}
											heightImg={60}
											miniCard={true}
											queen={true}
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
									<CardNft
										miniCard={false}
										data={cardSelected}
										heightImg={160}
									/>
								)}
							</CardWrapper>
						</LeftWrapper>

						<Right>
							<Info>
								{!cardSelected ? (
									<Stack spacing={1} sx={{ marginBottom: '10px' }}>
										<Skeleton variant='text' width={380} height={10} />
										<Skeleton variant='text' width={380} height={10} />
									</Stack>
								) : (
									<InfoTop>
										<Type>Queen</Type>
										<Level>
											{'Level'}:{' '}
											{(cardSelected?.detail?.queen?.level &&
												Number(cardSelected?.detail?.queen?.level)) ||
												1}
										</Level>
									</InfoTop>
								)}
								{!cardSelected ? (
									<Stack spacing={1}>
										<Skeleton variant='rectangular' width={380} height={80} />
									</Stack>
								) : (
									<InfoBody>
										<InfoBodyLeft>
											<InfoBodyLeftItem>Rarity:</InfoBodyLeftItem>
											<InfoBodyLeftItem>Food Per Worker:</InfoBodyLeftItem>
											<InfoBodyLeftItem>Breed Worker Time:</InfoBodyLeftItem>
											<InfoBodyLeftItem>In Nest:</InfoBodyLeftItem>
										</InfoBodyLeft>

										<InfoBodyRight>
											<InfoBodyRightItem>
												{(cardSelected?.attributes &&
													cardSelected?.attributes[1]?.value) ||
													'Uncommon'}
											</InfoBodyRightItem>
											<InfoBodyRightItem>
												{
													cardSelected?.detail?.queen?.info?.resourcePerWorker
														?.food
												}
											</InfoBodyRightItem>
											<InfoBodyRightItem>
												{cardSelected?.detail?.queen?.info?.breedWorkerTime
													? toHHMMSS(
															cardSelected?.detail?.queen?.info?.breedWorkerTime
													  )
													: 0}
											</InfoBodyRightItem>
											<InfoBodyRightItem>
												Nest #{cardSelected?.detail?.queen?.inNest[0]}
											</InfoBodyRightItem>
										</InfoBodyRight>
									</InfoBody>
								)}
							</Info>

							{worker?.detail?.worker?.breedTimestamp &&
								getRemainingTime(worker?.detail?.worker?.breedTimestamp) && (
									<CountdownWrapper>
										<CountdownInside>
											<Countdown
												date={
													Date.now() +
													getRemainingTime(
														worker?.detail?.worker?.breedTimestamp
													) *
														1000
												}
												onComplete={(props) => {
													onCompleteCount(props.completed && props.completed);
												}}
												onMount={(props) => {
													onMountCount(props.completed && props.completed);
												}}
											/>
										</CountdownInside>
									</CountdownWrapper>
								)}

							<BtnList>
								<Btn
									disabled={
										!cardSelected ||
										(cardSelected?.detail?.queen?.breedingWorkerId &&
											!completedCount)
									}
									onClick={onBreeding}>
									{!cardSelected?.detail?.queen?.breedingWorkerId
										? 'Breeding'
										: 'Claim'}
								</Btn>
								<Btn
									disabled={
										!cardSelected ||
										(cardSelected?.detail?.queen?.breedingWorkerId &&
											!completedCount)
									}
									onClick={confirmDialogUpdate}>
									Upgrade
								</Btn>
							</BtnList>
						</Right>
					</Wrapper>
				)}
			</Container>
		</>
	);
}

export default withContext(Breeding);
