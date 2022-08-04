import React, { useState, useEffect } from 'react';
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

function Breeding(props) {
	const { setOpenProcess, resource } = props;
	const [data, setData] = useState([]);
	const [queenNFT, setQueenNFT] = useState({});
	const [listWorkerNFT, setListWorkerNFT] = useState([]);
	const [remainWorker, setRemainWorker] = useState([]);
	const [worker, setWorker] = useState();
	const [completedCount, setCompletedCount] = useState(false);
	const [listNest, setListNest] = useState([]);

	const [superheroes, { loading, error }] = useCanister('superheroes');
	const { principal, isConnected, disconnect } = useConnect();

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
		await onGetAvailWorker();
		setData(resp?.ok);
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
		const queen = getNFTByType('Queen');
		setWorker(getNFTById(queen[0]?.detail?.queen?.breedingWorkerId));
		setQueenNFT(queen && queen[0]);
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
		const foodNeeded = queenNFT?.detail?.queen?.info?.resourcePerWorker?.food;
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
				const res = await superheroes.breedAntWorkder(listQ[0]?.tokenId[0]);
				setOpenProcess(false);
			}
		}
	};

	console.log('completedCount', completedCount);

	const onClaimWorker = async (e) => {
		if (!completedCount) {
			e?.preventDefault();
			toastEmitter('warn', 'You need to wait for the time out to claim');
		} else {
			if (
				worker?.detail?.worker?.breedTimestamp &&
				!getRemainingTime(worker?.detail?.worker?.breedTimestamp)
			) {
				setOpenProcess(true);
				const res = await superheroes.claimWorkerEgg(queenNFT?.tokenId[0]);
				await onGetData();
				setOpenProcess(false);
				toastEmitter('success', 'Claim egg successfully !!!');
			}
		}
	};

	const onUpgrade = async (e) => {
		const listQ = getNFTByType('Queen');
		setOpenProcess(true);
		const res = await superheroes.upgradeLevelQueen(listQ[0]?.tokenId[0]);
		setOpenProcess(false);
	};

	const onBreeding = async (e) => {
		if (!queenNFT?.detail?.queen?.breedingWorkerId) {
			await onBreedingWorker();
		} else {
			await onClaimWorker();
		}
		await onGetData();
	};

	const onCompleteCount = (props) => {
		setCompletedCount(true);
		toastEmitter('success', 'Breeding successfully !!!');
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

	return (
		<>
			<Container>
				<Wrapper>
					<Left>
						{queenNFT ? (
							<CardNft data={queenNFT} />
						) : (
							<Stack spacing={1}>
								<Skeleton variant='text' width={240} height={15} />
								<Skeleton variant='text' width={240} height={15} />
								<Skeleton variant='rectangular' width={240} height={245} />
							</Stack>
						)}
					</Left>

					<Right>
						<Info>
							{!queenNFT ? (
								<Stack spacing={1} sx={{ marginBottom: '10px' }}>
									<Skeleton variant='text' width={380} height={10} />
									<Skeleton variant='text' width={380} height={10} />
								</Stack>
							) : (
								<InfoTop>
									<Type>Queen</Type>
									<Level>
										{'Level'}:{' '}
										{(queenNFT?.detail?.queen?.level &&
											Number(queenNFT?.detail?.queen?.level)) ||
											1}
									</Level>
								</InfoTop>
							)}
							{!queenNFT ? (
								<Stack spacing={1}>
									<Skeleton variant='rectangular' width={380} height={80} />
								</Stack>
							) : (
								<InfoBody>
									<InfoBodyLeft>
										<InfoBodyLeftItem>Rarity:</InfoBodyLeftItem>
										<InfoBodyLeftItem>Food Per Worker:</InfoBodyLeftItem>
										<InfoBodyLeftItem>Breed Worker Time:</InfoBodyLeftItem>
									</InfoBodyLeft>

									<InfoBodyRight>
										<InfoBodyRightItem>
											{(queenNFT?.attributes &&
												queenNFT?.attributes[1]?.value) ||
												'Uncommon'}
										</InfoBodyRightItem>
										<InfoBodyRightItem>
											{queenNFT?.detail?.queen?.info?.resourcePerWorker?.food}
										</InfoBodyRightItem>
										<InfoBodyRightItem>
											{queenNFT?.detail?.queen?.info?.breedWorkerTime
												? toHHMMSS(
														queenNFT?.detail?.queen?.info?.breedWorkerTime
												  )
												: 0}
										</InfoBodyRightItem>
									</InfoBodyRight>
								</InfoBody>
							)}
						</Info>

						{worker?.detail?.worker?.breedTimestamp && !completedCount && (
							<CountdownWrapper>
								<CountdownInside>
									<Countdown
										date={
											Date.now() +
											getRemainingTime(worker?.detail?.worker?.breedTimestamp) *
												1000
										}
										onComplete={(props) => onCompleteCount(props.completed)}
									/>
								</CountdownInside>
							</CountdownWrapper>
						)}

						<BtnList>
							<Btn
								onClick={onBreeding}
								// disabled={
								// 	queenNFT?.detail?.queen?.breedingWorkerId && !completedCount
								// }
							>
								{!queenNFT?.detail?.queen?.breedingWorkerId
									? 'Breeding'
									: 'Claim'}
							</Btn>
							<Btn onClick={onUpgrade}>Upgrade</Btn>
						</BtnList>
					</Right>
				</Wrapper>
			</Container>
		</>
	);
}

export default withContext(Breeding);
