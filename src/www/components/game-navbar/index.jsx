import React, { useState, useEffect } from "react";
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
import {
  useLocation
} from "react-router-dom";

function GameNavbar() {
  const [navbarTitle, setNavbarTitle] = useState('Ants Kingdoms')

  const location = useLocation()
  const path = location.pathname.slice(1)

  useEffect(() => {
    if(path === 'inventory'){
      setNavbarTitle('Inventory')
    }
  }, [location])

  return (
    <Container>
      <LeftWrapper>
        <LeftImg src={'/images/navbar/NavbarLeft.png'} alt=""/>
        <LeftTitle>Ants</LeftTitle>
      </LeftWrapper>

      <MiddleWrapper>
        <MidImg src={'/images/navbar/NavbarMid.png'} alt="" type={path === 'home-claim' ? 'home' : ''}/>
        <MidTitle>{navbarTitle}</MidTitle>
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
