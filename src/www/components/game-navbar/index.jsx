import React from "react";
import {
    Container,
    Item,
    ItemImg,
    LeftImg,
    LeftTitle,
    LeftWrapper,
    MidImg,
    MidTitle,
    MiddleWrapper,
    Option,
    RightImg,
    RightWrapper
} from "./game-navbar.elements";

function GameNavbar() {

  return (
    <Container>
      <LeftWrapper>
        <LeftImg src={'/images/navbar/NavbarLeft.png'} alt=""/>
        <LeftTitle>Ants</LeftTitle>
      </LeftWrapper>

      <MiddleWrapper>
        <MidImg src={'/images/navbar/NavbarMid.png'} alt=""/>
        <MidTitle>Ants Kingdoms</MidTitle>
      </MiddleWrapper>

      <RightWrapper>
        <RightImg src={'/images/navbar/NavbarRight.png'} alt=""/>
        <Option>
            <Item>
                <ItemImg src={'images/navbar/SettingsBtn.png'}/>
            </Item>
            <Item>
                <ItemImg src={'images/navbar/LogoutBtn.png'}/>
            </Item>
        </Option>
      </RightWrapper>
    </Container>
  );
}

export default GameNavbar;
