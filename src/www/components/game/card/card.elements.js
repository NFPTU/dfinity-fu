import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #525d83;
  margin: 20px 40px;

  /* &:before {
    content: "";
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    left: -2px;
    background-color: #fff;
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    left: -2px;
    background-color: #fff;
    z-index: -2;
    filter: blur(40px);
  }

  &:nth-child(1):before {
      background: linear-gradient(235deg, #89ff00, #010615, #00bcd4);
  }

  &:nth-child(1):after {
    background: linear-gradient(235deg, #89ff00, #010615, #00bcd4);
  }

  &:nth-child(2):before {
    background: linear-gradient(235deg, #ff005e, #010615, #fbff00);
  }

  &:nth-child(2):after {
    background: linear-gradient(235deg, #ff005e, #010615, #fbff00);
  }

  &:nth-child(3):before {
    background: linear-gradient(235deg, #772aff, #010615, #2196F3);
  }

  &:nth-child(3):after {
    background: linear-gradient(235deg, #772aff, #010615, #2196F3);
  } */
`;


export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ImgWrapper = styled.div`
  width: 200px;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Info = styled.div`
  background-color: #5a985d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: 280px;
  height: 100px;
`

export const InfoTop = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.div`
  font-size: 20px;
`;

export const Desc = styled.div`
  font-size: 15px;
`;

export const Button = styled.button`
  margin-top: 5px;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid black;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    color: white;
    background-color: black;
  }
`;
