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
import { useCanister, useConnect } from '@connect2ic/react';

function GameNavbar() {
  const [navbarTitle, setNavbarTitle] = useState('Ants Kingdoms')
  const [resource, setResource] = useState({})

  const [superheroes, { loading, error }] = useCanister('superheroes');
  const { principal, isConnected, disconnect, activeProvider , isIdle, connect, isConnecting} = useConnect();

  const location = useLocation()
  const path = location.pathname.slice(1)

  useEffect(() => {
    if(path === 'inventory'){
      setNavbarTitle('Inventory')
    }
  }, [location])

  //Get user info (resource)
  const getUserInfo = async() => {
		const res = await superheroes.getUserInfo(principal?.toString())
		setResource(res?.userState?.resource)
	}

  useEffect(() => {
    getUserInfo()
  }, [superheroes, principal])

  console.log('resource', resource)

  return (
    <Container>
      <Wrapper>
        <Resource img={'/images/navbar/icons/gold.png'} resource={resource?.gold}/>
        <Resource img={'/images/navbar/icons/soil.png'} resource={resource?.soil}/>
        <TitleWrapper>
          <Background src={'/images/sidebarButton.png'} alt="background" />

          <Title>Ants Kingdoms</Title>
        </TitleWrapper>
        <Resource img={'/images/navbar/icons/meet.png'} resource={resource?.food}/>
        <Resource img={'/images/navbar/icons/leaf.png'} resource={resource?.leaf}/>
      </Wrapper>
    </Container>
  );
}

export default GameNavbar;
