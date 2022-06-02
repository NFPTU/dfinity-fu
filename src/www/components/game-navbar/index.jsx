import React, { useState, useEffect } from "react";
import {
    Background,
    Container,
    Title,
    TitleWrapper,
    Wrapper
} from "./game-navbar.elements";
import {
  useLocation
} from "react-router-dom";
import Resource from "./resource";

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
      <Wrapper>
        <Resource img={'/images/navbar/icons/gold.png'}/>
        <Resource img={'/images/navbar/icons/wood.png'}/>
        <TitleWrapper>
          <Background src={'/images/sidebarButton.png'} alt="background" />

          <Title>Ants Kingdoms</Title>
        </TitleWrapper>
        <Resource img={'/images/navbar/icons/meet.png'}/>
        <Resource img={'/images/navbar/icons/thunder.png'}/>
      </Wrapper>
    </Container>
  );
}

export default GameNavbar;
