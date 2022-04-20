import { Container } from "@mui/material";
import React from "react";

import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";

import {
  CaptionImage,
  Container,
  WrapperImage,
  Box,
  Button,
  ButtonWatchlist,
  CheckBox,
  CollectionID,
  FeedBack,
  FillterItems,
  Fillters,
  IconImage,
  IconSelect,
  Image,
  IntroTitle,
  LeftBox,
  ListButton,
  Price,
  Right,
  RightBox,
  ScrollCheckBox,
  ScrollSelect,
  Select,
  Sreachbox,
  Title,
  TotalInfor,
  TotalItems,
  ImageTitle,
  Avatar
} from "./list-elements";
import { Block } from "@mui/icons-material";

function ListCollections() {
  return (
    <Container>
      <WrapperImage>
        <CaptionImage src="https://images.hdqwalls.com/wallpapers/bthumb/2020-goku-4k-artwork-9i.jpg" />

        <IconImage>
            <Avatar alt="Remy Sharp" src="https://c4.wallpaperflare.com/wallpaper/517/550/386/dragon-ball-dragon-ball-super-goku-ultra-instinct-dragon-ball-wallpaper-preview.jpg" 
            sx = {{width: 100, height: 100}}
            />
        </IconImage>
      </WrapperImage>

      <Right>
        <ButtonWatchlist></ButtonWatchlist>

        <ListButton></ListButton>
      </Right>

      <Title></Title>

      <TotalInfor></TotalInfor>

      <IntroTitle></IntroTitle>

      <IconSelect></IconSelect>

      <Box>
        <LeftBox>
          <Fillters>
            <ScrollSelect>
              <Button></Button>
            </ScrollSelect>

            <ScrollCheckBox>
              {/* <CheckBox type="checkbox" /> */}
            </ScrollCheckBox>
          </Fillters>
        </LeftBox>

        <RightBox>
          <Sreachbox></Sreachbox>

          <Select></Select>

          <Select></Select>

          <FillterItems></FillterItems>

          <FillterItems></FillterItems>

          <TotalItems></TotalItems>

          <ImageTitle>
            <Image />

            <CollectionID></CollectionID>

            <Price></Price>

            <FeedBack></FeedBack>
          </ImageTitle>
        </RightBox>
      </Box>
    </Container>
    
  );
}

export default ListCollections;
