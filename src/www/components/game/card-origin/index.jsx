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
} from './card-origin.elements'

function Card({ data }) {
  return (
    <Container>
        <Content>
            <ImgWrapper>
            <Img src={data?.image} alt="" />
            </ImgWrapper>
            <Info>
              <InfoTop>
                  <Name>{data?.name}</Name>
                  <Desc>{data?.description}</Desc>
              </InfoTop>
              {/* <Button>Stake</Button> */}
            </Info>
        </Content>
    </Container>
  )
}

export default Card