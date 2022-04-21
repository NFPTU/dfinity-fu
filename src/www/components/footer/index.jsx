import React from 'react'
import {
  Container,
  Title
} from './footer'
import {
  Facebook,
  Instagram,
  Twitter
} from '@mui/icons-material';
import {
  BottomWrapper,
  BottomWrapperCenter,
  BottomWrapperLeft,
  BottomWrapperRight,
  Container,
  Icon,
  Logo,
  Name,
  TopWrapper,
  TopWrapperLeft,
  TopWrapperRight,
  LineFooter,
  BottomWrapperRightTop
} from './footer'

function Footer() {
  return (
    <>
    <Container>
      <TopWrapper>
        <TopWrapperLeft>
          <Logo src='https://motoko-lsp-client.gallerycdn.vsassets.io/extensions/motoko-lsp-client/motoko-lsp-client/2.2.0/1583876431744/Microsoft.VisualStudio.Services.Icons.Default' alt=''/>
          <Name>NFPTU</Name>
        </TopWrapperLeft>

        <TopWrapperRight>
          <Icon>
            <Facebook fontSize="large"/>
          </Icon>
          <Icon>
            <Instagram fontSize="large"/>
          </Icon>
          <Icon>
            <Twitter fontSize="large"/>
          </Icon>
        </TopWrapperRight>
      </TopWrapper>

      <BottomWrapper>
        <BottomWrapperLeft>
        NFPTU, ALL RIGHTS RESERVED 2021-2022 ©
        </BottomWrapperLeft>

        <BottomWrapperCenter>
        </BottomWrapperCenter>

        <BottomWrapperRight>
        <BottomWrapperRightTop>
          CONTACT
        </BottomWrapperRightTop>
        Discover, collect and trade NFTs on NFPTU
        </BottomWrapperRight>
      </BottomWrapper>

    </Container>
    <LineFooter></LineFooter>
    </>
  )
}

export default Footer