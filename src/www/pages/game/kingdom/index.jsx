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
		console.log(resp);
		const listNest = resp?.ok.filter(
			(el) => el.attributes[0].value === 'Kingdom'
		);
		setListLand(resp?.ok.filter((el) => el.attributes[0].value === 'Land'));
		setCardSelected(listNest[0]);
		setListNest(listNest);
	};

	const onChangeCard = (item) => {
		setCardSelected(item);

		console.log('cardSelected when click mini card:', cardSelected);
	};

	const handleClickMiniCard = (data) => {
		console.log('hi');
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
		setOpen(false);
		onGetData();
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
								{cardSelected && <CardNft data={cardSelected} />}
							</CardWrapper>
						</LeftWrapper>
					</Left>

					<Right>
						{/* <Info>
							<InfoTop>
								<Type>Kingdom</Type>
								<Level>Limit: 30</Level>
							</InfoTop>
							<InfoBody>
								<InfoBodyLeft>
									<InfoBodyLeftItem>Limit:</InfoBodyLeftItem>
									<InfoBodyLeftItem>Description:</InfoBodyLeftItem>
									<InfoBodyLeftItem>In Land:</InfoBodyLeftItem>
								</InfoBodyLeft>

								<InfoBodyRight>
									<InfoBodyRightItem>30</InfoBodyRightItem>
									<InfoBodyRightItem>Ant Nest #5</InfoBodyRightItem>
									<InfoBodyRightItem>20</InfoBodyRightItem>
								</InfoBodyRight>
							</InfoBody>
						</Info> */}

						<ListLand>
							<ListLandTitle>List All Land</ListLandTitle>
							<ListLandWrapper>
								{listLand.map((el, index) => {
									const tokenId = el?.tokenId[0];
									if (!el?.detail?.land?.inKingdom) return;
									return <CardNft key={index} data={el} alt='' size='small' />;
								})}
							</ListLandWrapper>
						</ListLand>

						<BtnList>
							<Btn onClick={() => setOpen(true)}>Expand Land</Btn>
						</BtnList>
					</Right>
				</Wrapper>
				<PopupList open={open} setOpen={setOpen}>
					{listLand.map((el, index) => {
						const tokenId = el?.tokenId[0];
						if (el?.detail?.land?.inKingdom) return;
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

export default withContext(Kingdom);
