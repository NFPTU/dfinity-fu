import styled from "styled-components";
import * as palette from "./types";

export const Container = styled.div`
  height: ${palette.HEIGHT_NAVBAR};
  position: sticky;
  z-index: 100;
  top: 0; // cứng ở 1 chỗ
  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
  padding-top: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  margin-top: 3px;
`;

export const TitleWrapper = styled.div`
  position: relative;
  width: 205px;
  height: 80px;
`;

export const Background = styled.img`
  position: absolute;
  width: 100%;
`;

export const Title = styled.div`
  position: absolute;
  width: 100%;
  top: 48%;
  left: 65%;
  transform: translate(-50%, -50%);
  font-size: 20px;
`;

export const WalletAddress = styled.div`
    border: 3px solid black;
    border-radius: 20px;
    padding: 7px 9px;
    font-size: 17px;
    margin-bottom: 8px;
    width: 120px;
    cursor: pointer;
    background: white;
`