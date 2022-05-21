import React from "react";
import { Container, PlayBtn, Title, Wrapper, ImgBtn } from "./login-game.elements";

function LoginGame() {


    return (
    <Container style={{backgroundImage: `url(/images/background.png)`}}>
      <Wrapper>
      <Title>Ants Kingdoms</Title>
      <PlayBtn><ImgBtn src={"/images/playBtn.png"} alt=""/></PlayBtn>
      </Wrapper>
    </Container>
  );
}

export default LoginGame;
