import React, { useState, useEffect } from "react";
import Card from "../../../components/card-nft";
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
  CardWrapper
} from "./nest.elements";
import "./nest.css";
import { useCanister, useConnect } from '@connect2ic/react';
import PopupList from "../../../components/popup-list";
import CardLand from "../kingdom/components/card-land";

function Nest() {
  const [listNest, setListNest] = useState([]);
  const [cardSelected, setCardSelected] = useState();
  const [open, setOpen] = useState(false);

  const [superheroes, { loading, error }] = useCanister('superheroes');
	const { principal } = useConnect();

  const onGetData = async () => {
		const resp = await superheroes?.getUserTokens(principal?.toString());
		const listNest = resp?.ok.filter((el) => el.attributes[0].value === 'Nest');

		setCardSelected(listNest[0]);
		setListNest(listNest);
	};

  const rendterBtn = (land) => {
		return <Btn onClick={() => onStakeLand(land)}>Stake</Btn>
	}

	const onStakeLand =async (land) => {
		setOpenProcess(true)
		await superheroes.stakeLandToKingdom(land.tokenId[0],cardSelected.tokenId[0])
		setOpenProcess(false)
	}

  const onChangeCard = (item) => {
		setCardSelected(item);

		console.log('cardSelected when click mini card:', cardSelected);
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
              {cardSelected && <Card data={cardSelected} width={280} height={380}/>}
              </CardWrapper>
            </LeftWrapper>
          </Left>

          <Right>
            <Info>
              <InfoTop>
                <Type>{cardSelected?.attributes[0]?.value || 'Nest'}</Type>
                <Level>{cardSelected?.attributes[2]?.trait_type || 'Level'}: {cardSelected?.attributes[2]?.value || 0}</Level>
              </InfoTop>
              <InfoBody>
                <InfoBodyLeft>
                  <InfoBodyLeftItem>Limit:</InfoBodyLeftItem>
                  <InfoBodyLeftItem>Description:</InfoBodyLeftItem>
                  <InfoBodyLeftItem>In Land:</InfoBodyLeftItem>
                  <InfoBodyLeftItem>Queen In: </InfoBodyLeftItem>
                  <InfoBodyLeftItem>Undefined:</InfoBodyLeftItem>
                </InfoBodyLeft>

                <InfoBodyRight>
                  <InfoBodyRightItem>{cardSelected?.attributes[3]?.value}</InfoBodyRightItem>
                  <InfoBodyRightItem>{cardSelected?.description}</InfoBodyRightItem>
                  <InfoBodyRightItem>20</InfoBodyRightItem>
                  <InfoBodyRightItem>12 hours</InfoBodyRightItem>
                  <InfoBodyRightItem>Undefined</InfoBodyRightItem>
                </InfoBodyRight>
              </InfoBody>
            </Info>

            <BtnList>
              <Btn>Upgrade</Btn>
              <Btn onClick={() => setOpen(true)}>Add Queen</Btn>
            </BtnList>
          </Right>
        </Wrapper>
        <PopupList open={open} setOpen={setOpen}>
				{listNest.map((el, index) => {
									const tokenId = el?.tokenId[0]
									if(el?.detail?.queen?.inKingdom) return 
									return (
										<CardLand
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

export default Nest;
