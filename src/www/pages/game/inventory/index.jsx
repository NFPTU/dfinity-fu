import React from "react";
import {
  Body,
  BodyTop,
  BodyTopList,
  BodyTopTitle,
  BodyWrapper,
  Container,
  SideBar,
  BodyBorder,
  SidebarBorder,
  ListBtn,
  Btn,
  ImgBtn,
  TextBtn,
  BodyTopItem,
  BodyTopName,
  BodyTopImg,
  Cart
} from "./inventory.elements";

function Inventory() {

  return (
    <>
      <Container>
        <SidebarBorder>
          <SideBar></SideBar>
          <ListBtn>
            <Btn>
              <ImgBtn src={'/images/sidebarButton.png'} alt=""/>
              <TextBtn>All</TextBtn>
            </Btn>
            <Btn>
              <ImgBtn src={'/images/sidebarButton.png'} alt=""/>
              <TextBtn>Nest</TextBtn>
            </Btn>
            <Btn>
              <ImgBtn src={'/images/sidebarButton.png'} alt=""/>
              <TextBtn>Ant</TextBtn>
            </Btn>
          </ListBtn>
        </SidebarBorder>

        <BodyWrapper>
          <BodyTop>
            <BodyTopTitle>Sort By</BodyTopTitle>
            <BodyTopList>
              <BodyTopItem>
                <BodyTopImg src={'/images/navbar/NavbarMid.png'} alt=""/>
                <BodyTopName>ID</BodyTopName>
              </BodyTopItem>
              <BodyTopItem>
                <BodyTopImg src={'/images/navbar/NavbarMid.png'} alt="" />
                <BodyTopName>Name</BodyTopName>
              </BodyTopItem>
              <BodyTopItem>
                <BodyTopImg src={'/images/navbar/NavbarMid.png'} alt="" />
                <BodyTopName>Rarity</BodyTopName>
              </BodyTopItem>
            </BodyTopList>
          </BodyTop>

          <BodyBorder>
            <Body></Body>
            <Cart>Cart</Cart>
          </BodyBorder>
        </BodyWrapper>
      </Container>
    </>
  );
}

export default Inventory;
