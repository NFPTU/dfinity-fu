import styled from "styled-components";

export const Container = styled.div`
  /* position: relative; */
  width: 100%;
  display: flex;
  flex-direction: column;//
  align-items: center;
`;

export const WrapperImage = styled.div`
  /* position: relative; */
  /* margin: 0; */
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  
`;

export const CaptionImage = styled.img`
  width: 100%;
  height: 248px;
  
  ;
`;

export const IconImage = styled.div`
  z-index: 1;
  margin-top: -50px;
`;

export const Right = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const ButtonWatchlist = styled.div`
  margin-right: 10px;
`;

export const ListButton = styled.div`
  display: flex;
  /* border-radius: 10px; */
  
`;

export const ListButtonItem = styled.div`
  border-right: ${(flag) => flag === 'right' ? '' : '1px solid rgb(229, 232, 235)'};
    border-bottom: 1px solid rgb(229, 232, 235);
    border-left: ${(flag) => flag === 'left' ? '' : '1px solid rgb(229, 232, 235)'};
    border-top: 1px solid rgb(229, 232, 235);
    padding: 7px 10px;
    &:hover {
        box-shadow: 0px 0px 3px 0px #888888;
    }
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;

  
`;

export const Title = styled.div`
  text-align: center;
  font-weight: bold;
  size: 20px;
  display: flex;
  justify-content: center;
  
`;

export const CheckCircle = styled.div`
  
  position: absolute;
  align-self: center;


`
export const TotalInfor = styled.div`
  display: flex;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const ListButtonView = styled.div`
  /* border: 1px solid; */
  padding: 10px;
  /* border-radius: 0px 0px 0px 5px; */
  text-align: center;
  padding: 4%;
  width: 200px;
  border-right: ${(flag) => flag === 'right' ? '' : '1px solid rgb(229, 232, 235)'};
    border-bottom: 1px solid rgb(229, 232, 235);
    border-left: ${(flag) => flag === 'left' ? '' : '1px solid rgb(229, 232, 235)'};
    border-top: 1px solid rgb(229, 232, 235);
    padding: 7px 10px;
    &:hover {
        box-shadow: 0px 0px 3px 0px #888888;
    }
`
export const NumerReport = styled.div`
  display: flex;
  justify-content: center;
`
export const TittleReport = styled.div`
  
`

export const CurrencyBitcoinIcon = styled.div`
  
`
export const IntroTitle = styled.div`
  text-align: center;
  padding-left: 150px;
  padding-right: 150px;
  
`;
export const IconSelect = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TittleIcon = styled.div`
  text-align: center;
  align-self: center;
`;



export const Box = styled.div`

`;
export const LeftBox = styled.div`

`;
export const Fillters = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
`;
export const ScrollSelect = styled.div`

`;
export const Button = styled.button`

`;
export const ScrollCheckBox = styled.div`

`;
export const CheckBox = styled.input`

`;
export const RightBox = styled.div`

`;
export const Sreachbox = styled.div`

`;
export const Select = styled.button`

`;
export const FillterItems = styled.button`

`;
export const TotalItems = styled.button`

`;
export const Image = styled.img`

`;
export const CollectionID = styled.button`

`;
export const Price = styled.button`

`;
export const FeedBack = styled.button`

`;
export const ImageTitle = styled.div`

`;

