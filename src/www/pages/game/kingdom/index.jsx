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

function Kingdom() {
	const [listNest, setListNest] = useState([]);
	const [cardSelected, setCardSelected] = useState();
	const [cardSelectedId, setCardSelectedId] = useState();

	const [superheroes, { loading, error }] = useCanister('superheroes');
	const { principal } = useConnect();

	const onGetData = async () => {
		const resp = await superheroes?.getUserTokens(principal?.toString());
		const listNest = resp?.ok.filter((el) => el.attributes[0].value === 'Nest');

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

		setCardSelectedId(data?.tokenId[0])
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
								{cardSelected && (
									<Card data={cardSelected} width={260} height={360} />
								)}
							</CardWrapper>
						</LeftWrapper>
					</Left>

					<Right>
						<Info>
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
						</Info>

						<ListLand>
							<ListLandTitle>List All Land</ListLandTitle>
							<ListLandWrapper>
								{listNest.map((el, index) => {
									const tokenId = el?.tokenId[0]

									return (
										<CardLand
											key={index}
											data={el}
											handleClickMiniCard={handleClickMiniCard}
											active={tokenId === cardSelectedId ? true : false}
											alt=''
										/>
									);
								})}
							</ListLandWrapper>
						</ListLand>

						<BtnList>
							<Btn>Expand</Btn>
						</BtnList>
					</Right>
				</Wrapper>
			</Container>
		</>
	);
}

export default Kingdom;
