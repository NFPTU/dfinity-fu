import React from "react";
import { Container, PlayBtn, Title, Wrapper, ImgBtn } from "./login-game.elements";
import images from "../../assets/images";

function LoginGame() {

    const { background, playBtn } = images

    console.log(background)

    return (
    <Container style={{backgroundImage: `url(${background})`}}>
      <Wrapper>
      <Title>Ants Kingdoms</Title>
      <PlayBtn><ImgBtn src={playBtn} alt=""/></PlayBtn>
      </Wrapper>
    </Container>
  );
}

export default LoginGame;
