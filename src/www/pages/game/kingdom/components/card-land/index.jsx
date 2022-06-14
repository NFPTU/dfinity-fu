import React from "react";
import {
    LandItem,
    LandItemBody,
    LandItemFooter,
    LandItemId,
    LandItemImg,
    LandItemName,
    LandItemTop,
    LandItemType
} from './card-land.elements'

function CardLand(props) {

  const { data, handleClickMiniCard, active } = props

  const { attributes, description, detail, image, name, tokenId } = data;

  return (
    <LandItem onClick={() => handleClickMiniCard(data)} active={active}>
      <LandItemTop>
        <LandItemType>{attributes[0]?.value}</LandItemType>
      </LandItemTop>

      <LandItemBody>
        <LandItemImg src={image} alt="card mini" />
      </LandItemBody>

      <LandItemFooter>
        <LandItemName>{name}</LandItemName>
      </LandItemFooter>
    </LandItem>
  );
}

export default CardLand;
