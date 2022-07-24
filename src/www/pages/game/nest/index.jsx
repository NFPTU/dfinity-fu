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
import { withContext } from "../../../hooks";
import CardNft from "../../../components/card-nft";

function Nest(props) {
  const { setOpenProcess } = props

  const [listNFt, setListNFt] = useState([]);
  const [listNest, setListNest] = useState([]);
  const [cardSelected, setCardSelected] = useState();
  const [open, setOpen] = useState(false);

  const [superheroes, { loading, error }] = useCanister('superheroes');
  const { principal } = useConnect();

  const onGetData = async () => {
    const resp = await superheroes?.getUserTokens(principal?.toString());
    const listNest = resp?.ok.filter((el) => el.attributes[0].value === 'Nest');
    console.log(resp?.ok);
    setListNFt(resp?.ok)
    setCardSelected(listNest[0]);
    setListNest(listNest);
  };

  const rendterBtn = (land) => {
    return <Btn onClick={() => onStakeQueenInNest(land)}>Stake</Btn>
  }

  const onStakeQueenInNest = async (queen) => {
    try {
      setOpenProcess(true)
      const res = await superheroes?.stakeQueenInNest(
        queen?.tokenId[0],
        cardSelected?.tokenId[0],
      );
      console.log(res);
    } catch (er) {
      console.log(er);
    }
    setOpenProcess(false)
    onGetData()
    setOpen(false)
  };

  const onChangeCard = (item) => {
    setCardSelected(item);
  };

  const getNFTByType = (type) => {
    return listNFt.filter((el) => el.attributes[0].value === type);
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
              {/* <ListMiniCard>
                {listNest.map((el) => (
                  <CardImg
                    onClick={() => onChangeCard(el)}
                    src={el.image}
                    alt=''
                  />
                ))}
              </ListMiniCard> */}
              <CardWrapper>
                {cardSelected && <Card data={cardSelected} />}
              </CardWrapper>
            </LeftWrapper>
          </Left>

          <Right>
            <Info>
              <InfoTop>
                <Type>{cardSelected?.attributes[0]?.value || 'Nest'}</Type>
                <Level>{'Level'}: {(cardSelected?.detail?.nest?.level && Number(cardSelected?.detail?.nest?.level)) || 1}</Level>
              </InfoTop>
              <InfoBody>
                <InfoBodyLeft>
                  <InfoBodyLeftItem>Rarity:</InfoBodyLeftItem>
                  <InfoBodyLeftItem>Limit Ant:</InfoBodyLeftItem>
                </InfoBodyLeft>

                <InfoBodyRight>
                  <InfoBodyRightItem>{cardSelected?.attributes[1]?.value}</InfoBodyRightItem>
                  <InfoBodyRightItem>{cardSelected?.detail?.nest?.limit && Number(cardSelected?.detail?.nest?.limit)}</InfoBodyRightItem>
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
          {getNFTByType('Queen').map((el, index) => {
            if (el?.detail?.queen?.inNest[0]) return
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
