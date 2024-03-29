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
	LeftWrapper,
	CardWrapper,
	ListLand,
	ListLandWrapper,
	ListLandTitle,
} from './kingdom.elements';
import './kingdom.css';
import CardLand from './components/card-land';
import { useCanister, useConnect } from '@connect2ic/react';
import PopupList from '../../../components/popup-list';
import { withContext } from '../../../hooks';
import CardNft from '../../../components/card-nft';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { toast } from 'react-toastify';

function Kingdom(props) {
	const { setOpenProcess } = props;
	const [listNest, setListNest] = useState([]);
	const [listLand, setListLand] = useState([]);
	const [cardSelected, setCardSelected] = useState();
	const [cardSelectedId, setCardSelectedId] = useState();
	const [open, setOpen] = useState(false);

	const [superheroes, { loading, error }] = useCanister('superheroes');
	const { principal } = useConnect();

	const onGetData = async () => {
		const resp = await superheroes?.getUserTokens(principal?.toString());
		const listNest = resp?.ok.filter(
			(el) => el.attributes[0].value === 'Kingdom'
		);
		setListLand(resp?.ok.filter((el) => el.attributes[0].value === 'Land'));
		setCardSelected(listNest[0]);
		setListNest(listNest);
	};

	const onChangeCard = (item) => {
		setCardSelected(item);
	};

	const handleClickMiniCard = (data) => {
		onChangeCard(data);

		setCardSelectedId(data?.tokenId[0]);
	};

	const rendterBtn = (land) => {
		return <Btn onClick={() => onStakeLand(land)}>Stake</Btn>;
	};

	const onStakeLand = async (land) => {
		setOpenProcess(true);
		await superheroes.stakeLandToKingdom(
			land.tokenId[0],
			cardSelected.tokenId[0]
		);
		setOpenProcess(false);
		toast('Stake Land Successfully !!!');
		setOpen(false);
		onGetData();
	};

	const handleExpandLand = () => {
		if (cardSelected) {
			setOpen(true);
		}
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
							<CardWrapper>
								{!cardSelected ? (
									<Stack spacing={1}>
										<Skeleton variant='text' width={240} height={15} />
										<Skeleton variant='text' width={240} height={15} />
										<Skeleton variant='rectangular' width={240} height={245} />
									</Stack>
								) : (
									cardSelected && <CardNft data={cardSelected} />
								)}
							</CardWrapper>
						</LeftWrapper>
					</Left>

					<Right>
						<ListLand>
							<ListLandTitle>List All Land</ListLandTitle>
							<ListLandWrapper>
								{cardSelected ? (
									listLand.map((el, index) => {
										const tokenId = el?.tokenId[0];
										if (!el?.detail?.land?.inKingdom) return;
										return (
											<>
												<CardNft key={index} data={el} alt='' size='small' />
											</>
										);
									})
								) : (
									<Stack spacing={1}>
										<Skeleton variant='text' width={123} height={10} />
										<Skeleton variant='text' width={123} height={10} />
										<Skeleton variant='rectangular' width={123} height={100} />
									</Stack>
								)}
							</ListLandWrapper>
						</ListLand>

						<BtnList>
							<Btn disabled={!cardSelected} onClick={handleExpandLand}>
								Expand Land
							</Btn>
						</BtnList>
					</Right>
				</Wrapper>
				<PopupList
					dialogTitle={'Choose land to expand into kingdom'}
					open={open}
					setOpen={setOpen}>
					{listLand.map((el, index) => {
						const tokenId = el?.tokenId[0];
						if (el?.detail?.land?.inKingdom) return;
						return (
							<div style={{ marginLeft: '15px' }}>
								<CardNft
									key={index}
									data={el}
									footer={() => rendterBtn(el)}
									alt=''
								/>
							</div>
						);
					})}
				</PopupList>
			</Container>
		</>
	);
}

export default withContext(Kingdom);
