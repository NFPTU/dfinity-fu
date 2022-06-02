import React from "react";
import {
  Container,
  IconWrapper,
  Image,
  ResourceNumber,
  Background
} from "./resource.elements";


function Resource({ img }) {

  return (
    <Container>
      <Background src={'/images/navbar/NavbarMid.png'} alt="background"/>

      <IconWrapper>
        <Image src={img} alt="icon_image" />
      </IconWrapper>

      <ResourceNumber>1000</ResourceNumber>
    </Container>
  );
}

export default Resource;
