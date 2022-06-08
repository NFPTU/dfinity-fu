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
import { getRemainingTime } from '../../../utils/utils';
import Countdown from "react-countdown";
import Swal from 'sweetalert2'

function Breeding() {
	const [data, setData] = useState([]);
	const [queenNFT, setQueenNFT] = useState({});
	const [listWorkerNFT, setListWorkerNFT] = useState([]);
	const [breedTimestamp, setBreedTimestamp] = useState();

	const [breedingWorker, setBreedingWorker] = useState();
	const [endCountDown, setEndCountDown] = useState(false);

	const [superheroes, { loading, error }] = useCanister('superheroes');
	const { principal, isConnected, disconnect } = useConnect();
	
	//Get last worker in list of worker NFT:
	const lastWorker = listWorkerNFT && listWorkerNFT[listWorkerNFT.length - 1]

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
						onBreedingWorker()
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
		  toast.addEventListener('mouseenter', Swal.stopTimer)
		  toast.addEventListener('mouseleave', Swal.resumeTimer)
		}
	  })

	const toastDialog = async () => {		  
		  Toast.fire({
			icon: 'success',
			title: 'Breeding Ant Worker successfully!!!'
		  })
	}


	//=================================================================================

	//Get All NFT
	const onGetData = async () => {
		// console.log(superheroes, principal?.toString());
		// const response = await superheroes?.getTokensMetadata();
		const resp = await superheroes?.getUserTokens(principal?.toString());

		setData(resp?.ok);
	};

	//Filter NFT by type
	const getNFTByType = (type) => {
		const listNFT = data?.filter((el) => {
			return el.attributes[0].value === type;
		});
		return listNFT
	};

	//Get Queen NFT:
	const getQueenNFT = () => {
		const queen = getNFTByType('Queen')

		setQueenNFT(queen && queen[0]);
	};

	//Get List Worker:
	const getListWorkerNFT = () => {
		const listWorker = getNFTByType('Worker')

		setListWorkerNFT(listWorker && listWorker)
	}

	const handleCompleteCountDown = () => {
		setEndCountDown(true)

		toastDialog()
	}

	//===================== Call Superheroes ==========================
	const onBreedingWorker = async() => {
		const listQ = getNFTByType('Queen');
		const res = await superheroes.breedAntWorkder(listQ[0]?.tokenId[0])

		res && setBreedingWorker(res)
	  }

	  const onClaimWorker = async(e) => {
		// const listQ = getNFTByType('Worker');
		// const res = await superheroes.claimWorkerEgg(listQ[0].tokenId[0])
		// console.log('onClaimWorker' ,res);
		if(endCountDown){
			console.log('handle claim worker...')
		}
		else if(endCountDown) {
			e.preventDefault()
		}
	  }
	//=================================================================

	useEffect(() => {
		onGetData();
	}, [superheroes, principal]);

	useEffect(() => {
		getQueenNFT();
		getListWorkerNFT();
	}, [data]);

	useEffect(() => {
		const breedTime =  lastWorker?.detail?.worker?.breedTimestamp

		setBreedTimestamp(breedTime)
	}, [lastWorker, breedingWorker])


	return (
		<>
			<Container>
				<Wrapper>
					<Left>
						<Card data={queenNFT} />
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

						<CountdownWrapper>
							<CountdownInside>
								{
									breedTimestamp && (
										<Countdown 
										onComplete={handleCompleteCountDown}
										date={Date.now() + (getRemainingTime(BigInt(breedTimestamp)) * 1000)}/>	
									)
								}
							</CountdownInside>
						</CountdownWrapper>

						<BtnList>
							<Btn disabled={true} onClick={dialogClaim}>Breeding</Btn>
							<Btn disabled={endCountDown} onCLick={onClaimWorker}>Claim Worker Ant</Btn>
						</BtnList>
					</Right>
				</Wrapper>
			</Container>
		</>
	);
}

export default Breeding;
