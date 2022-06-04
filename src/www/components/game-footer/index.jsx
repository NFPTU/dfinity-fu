import React, { useState } from "react";
import { Container, Image, Item, Title } from "./game-footer.elements";

function GameFooter() {
  const [active, setAvtive] = useState('Home')

  const items = [
    {
      id: 1,
      imgUrl: '/images/footer/breed.png',
      title: "Home",
    },
    {
      id: 2,
      imgUrl: '/images/footer/home.png',
      title: "Inventory",
    },
    {
      id: 3,
      imgUrl: '/images/footer/inventory.png',
      title: "Breeding",
    },
  ];

  return (
    <Container>
      {items.map((item, index) => (
        <Item
         key={index} 
         onClick={() => setAvtive(item.title)}
         active={active === item.title ? true : false}>
          <Image src={item.imgUrl} alt="" />
          <Title>{item.title}</Title>
        </Item>
      ))}
    </Container>
  );
}

export default GameFooter;
