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
import isCompleted from 'react-countdown'
import Swal from 'sweetalert2';
import { withContext } from '../../../hooks';
import CardNft from '../../../components/card-nft';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function Breeding(props) {
	const { setOpenProcess } = props;
	const [data, setData] = useState([]);
	const [queenNFT, setQueenNFT] = useState({});
	const [listWorkerNFT, setListWorkerNFT] = useState([]);
	const [worker, setWorker] = useState();
	const [completedCount, setCompletedCount] = useState(false);

	const [superheroes, { loading, error }] = useCanister('superheroes');
	const { principal, isConnected, disconnect } = useConnect();

	// ======================== DIALOG SWEETALERT 2 =================================
	//show dialog stake when choose:
	const dialogClaim = async () => {
		Swal.fire({
			title: 'Do you want to breeding ant worker?',
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: 'Yes',
			denyButtonText: `No`,
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				Swal.fire('Saved!', '', 'success').then((result) => {
					if (result.isConfirmed) {
						onBreedingWorker();
					}
				});
			} else if (result.isDenied) {
				Swal.fire('Changes are not saved', '', 'info');
			}
		});
	};

	const Toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.addEventListener('mouseenter', Swal.stopTimer);
			toast.addEventListener('mouseleave', Swal.resumeTimer);
		},
	});

	const toastDialog = async () => {
		Toast.fire({
			icon: 'success',
			title: 'Breeding Ant Worker successfully!!!',
		});
	};

	//=================================================================================

	//Get All NFT
	const onGetData = async () => {
		const resp = await superheroes?.getUserTokens(principal?.toString());
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
		const listQ = getNFTByType('Queen');
		const res = await superheroes.breedAntWorkder(listQ[0]?.tokenId[0]);
	};

	const onClaimWorker = async (e) => {
		if (
			worker?.detail?.worker?.breedTimestamp &&
			!getRemainingTime(worker?.detail?.worker?.breedTimestamp)
		) {
			const res = await superheroes.claimWorkerEgg(queenNFT?.tokenId[0]);
			await onGetData();
		}
	};

	const onUpgrade = async (e) => {
		const listQ = getNFTByType('Queen');
		const res = await superheroes.upgradeLevelQueen(listQ[0].tokenId[0]);
	};

	const onBreeding = async (e) => {
		setOpenProcess(true);
		if (!queenNFT?.detail?.queen?.breedingWorkerId) {
			await onBreedingWorker();
		} else {
			await onClaimWorker();
		}
		await onGetData();
		setOpenProcess(false);
	};

	//=================================================================

	useEffect(() => {
		onGetData();
	}, [superheroes, principal]);

	useEffect(() => {
		if (data) {
			getQueenNFT();
			getListWorkerNFT();
		}
	}, [data]);

	console.log('queenNFT', queenNFT);

	console.log('worker', worker)

	console.log('completedCount', completedCount)

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

						{(worker?.detail?.worker?.breedTimestamp && !completedCount) && (
							<CountdownWrapper>
								<CountdownInside>
									<Countdown
										date={
											Date.now() +
											getRemainingTime(worker?.detail?.worker?.breedTimestamp) *
												1000
										}
										onComplete={(props) => setCompletedCount(props.completed)}
									/>
								</CountdownInside>
							</CountdownWrapper>
						)}

						<BtnList>
							<Btn onClick={onBreeding}>
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
