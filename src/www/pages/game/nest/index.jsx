import React, { useState, useEffect } from 'react';
import Card from '../../../components/card-nft';
import {
	Btn,
	BtnList,
	Container,
	Info,
	InfoBody,
	InfoBodyLeft,
	InfoBodyLeftItem,
	InfoBodyRight,
	InfoBodyRightItem,
	InfoTop,
	Left,
	Level,
	Right,
	Type,
	Wrapper,
	CardImg,
	LeftWrapper,
	ListMiniCard,
	CardWrapper,
} from './nest.elements';
import './nest.css';
import { useCanister, useConnect } from '@connect2ic/react';
import PopupList from '../../../components/popup-list';
import CardLand from '../kingdom/components/card-land';
import { withContext } from '../../../hooks';
import CardNft from '../../../components/card-nft';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function Nest(props) {
	const { setOpenProcess } = props;

	const [listNFt, setListNFt] = useState([]);
	const [listNest, setListNest] = useState([]);
	const [cardSelected, setCardSelected] = useState();
	const [open, setOpen] = useState(false);

	const [inLand, setInLand] = useState('');

	const [superheroes, { loading, error }] = useCanister('superheroes');
	const { principal } = useConnect();

	console.log('listNest', listNest[0]?.detail?.nest?.inLand[0]);

	const onGetData = async () => {
		const resp = await superheroes?.getUserTokens(principal?.toString());
		const listNest = resp?.ok.filter((el) => el.attributes[0].value === 'Nest');
		const inLand = resp?.ok?.find((el) => el.tokenId[0] == listNest[0]?.detail?.nest?.inLand[0]);

		setInLand(inLand);
		setListNFt(resp?.ok);
		setCardSelected(listNest[0]);
		setListNest(listNest);
	};

	const rendterBtn = (land) => {
		return <Btn onClick={() => onStakeQueenInNest(land)}>Stake</Btn>;
	};

	const onStakeQueenInNest = async (queen) => {
		try {
			setOpenProcess(true);
			const res = await superheroes?.stakeQueenInNest(
				queen?.tokenId[0],
				cardSelected?.tokenId[0]
			);
		} catch (er) {
			console.log(er);
		}
		setOpenProcess(false);
		onGetData();
		setOpen(false);
	};

	const onChangeCard = (item) => {
		setCardSelected(item);
	};

	const getNFTByType = (type) => {
		return listNFt.filter((el) => el.attributes[0].value === type);
	};

	const getNFTById = (id) => {
		const listNFT = listNFt?.find((el) => el.tokenId[0] == id);
		return listNFT;
	};


	const onUpgrade = async (e) => {
		const listNest = getNFTByType('Nest');
		setOpenProcess(true);
		const res = await superheroes.upgradeLevelNest(listNest[0]?.tokenId[0]);
		setOpenProcess(false);
	};

	useEffect(() => {
		if (principal && superheroes) {
			onGetData();
		}
	}, [principal, superheroes]);

	return (
		<>
			<Container>
				<Wrapper>
					<Left>
						<LeftWrapper>
							<ListMiniCard>
								{listNest.map((el) => (
									<CardImg
										onClick={() => onChangeCard(el)}
										src={el.image}
										alt=''
									/>
								))}
							</ListMiniCard>
							<CardWrapper>
								{cardSelected ? (
									<Card data={cardSelected} />
								) : (
									<Stack spacing={1}>
										<Skeleton variant='text' width={240} height={15} />
										<Skeleton variant='text' width={240} height={15} />
										<Skeleton variant='rectangular' width={240} height={245} />
									</Stack>
								)}
							</CardWrapper>
						</LeftWrapper>
					</Left>

					<Right>
						<Info>
							{cardSelected ? (
								<InfoTop>
									<Type>{cardSelected?.attributes[0]?.value || 'Nest'}</Type>
									<Level>
										{'Level'}:{' '}
										{(cardSelected?.detail?.nest?.level &&
											Number(cardSelected?.detail?.nest?.level)) ||
											1}
									</Level>
								</InfoTop>
							) : (
								<Stack spacing={1} sx={{ marginBottom: '10px' }}>
									<Skeleton variant='text' width={380} height={10} />
									<Skeleton variant='text' width={380} height={10} />
								</Stack>
							)}
							{!cardSelected ? (
								<Stack spacing={1} sx={{ marginTop: '10px' }}>
									<Skeleton variant='rectangular' width={380} height={80} />
								</Stack>
							) : (
								<InfoBody>
									<InfoBodyLeft>
										<InfoBodyLeftItem>Rarity:</InfoBodyLeftItem>
										<InfoBodyLeftItem>Limit Ant:</InfoBodyLeftItem>
										<InfoBodyLeftItem>In Land:</InfoBodyLeftItem>
									</InfoBodyLeft>

									<InfoBodyRight>
										<InfoBodyRightItem>
											{cardSelected?.attributes[1]?.value}
										</InfoBodyRightItem>
										<InfoBodyRightItem>
											{cardSelected?.detail?.nest?.limit &&
												Number(cardSelected?.detail?.nest?.limit)}
										</InfoBodyRightItem>
										<InfoBodyRightItem>
											{inLand && inLand.name}
										</InfoBodyRightItem>
									</InfoBodyRight>
								</InfoBody>
							)}
						</Info>

						<BtnList>
							<Btn onClick={onUpgrade}>Upgrade</Btn>
							<Btn onClick={() => setOpen(true)}>Add Queen</Btn>
						</BtnList>
					</Right>
				</Wrapper>
				<PopupList open={open} setOpen={setOpen}>
					{getNFTByType('Queen').map((el, index) => {
						if (el?.detail?.queen?.inNest[0]) return;
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
		</>
	);
}

export default withContext(Nest);
