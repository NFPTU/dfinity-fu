import React from 'react'
import {
  Button,
  Container,
  Content,
  Desc,
  Glass,
  Img,
  ImgWrapper,
  Info,
  Name,
  InfoTop
} from './card.elements'

function Card({ data }) {
  return (
    <Container>
        <Glass></Glass>
        <Content>
            <ImgWrapper>
            <Img src={data?.image} alt="" />
            </ImgWrapper>
            <Info>
              <InfoTop>
                  <Name>Ant worker #2</Name>
                  <Desc>Description of Ant worker #2</Desc>
              </InfoTop>
              <Button>Stake</Button>
            </Info>
        </Content>
    </Container>
  )
}

export default Card