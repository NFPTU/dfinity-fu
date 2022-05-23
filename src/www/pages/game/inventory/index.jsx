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
  TextBtn
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
              <button>ID</button>
              <button>Name</button>
              <button>Rarity</button>
            </BodyTopList>
          </BodyTop>

          <BodyBorder>
            <Body>
              <h3>Cart</h3>
            </Body>
          </BodyBorder>
        </BodyWrapper>
      </Container>
    </>
  );
}

export default Inventory;
