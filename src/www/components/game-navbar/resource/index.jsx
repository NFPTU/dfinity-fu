import React from "react";
import {
  Container,
  IconWrapper,
  Image,
  ResourceNumber,
  Background
} from "./resource.elements";


function Resource({ img, resource }) {

  return (
    <Container>
      <Background src={'/images/navbar/NavbarMid.png'} alt="background"/>

      <IconWrapper>
        <Image src={img} alt="icon_image" />
      </IconWrapper>

      <ResourceNumber>{resource || 0}</ResourceNumber>
    </Container>
  );
}

export default Resource;
