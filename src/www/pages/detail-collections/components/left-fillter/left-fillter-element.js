import styled from "styled-components"

export const Container = styled.div`
        width: 100%;
  display: flex;
`;

export const LeftBox = styled.div`
  height: auto;
  width: 20%;
  border: 1px solid gray;
  border-right: ${(flag) => flag === 'right' ? '' : '1px solid rgb(229, 232, 235)'};
  border-bottom: 1px solid rgb(229, 232, 235);
  border-left: ${(flag) => flag === 'left' ? '' : '1px solid rgb(229, 232, 235)'};
  border-top: 1px solid rgb(229, 232, 235);
`;
export const FilltersOn = styled.div`
  cursor: pointer;
`;
export const ScrollSelect = styled.div`

`;
export const Button = styled.div`
  border: 1px solid;
  
  border-radius: 1px;
  /* flex: 1; */
  width: auto;
  margin-right: 10px;
  margin-bottom: 10px;
`;
export const TotalButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  
`;
export const ScrollCheckBox = styled.div`

`;

export const FilltersOff = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border: 1px solid gray;
  border-right: 1px solid rgb(229, 232, 235);
  border-left: 1px solid rgb(229, 232, 235);
  border-top: 1px solid rgb(229, 232, 235);
  border-bottom: 1px solid rgb(229, 232, 235);
`;
export const TextFillter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const TextFillterNon = styled.p`
    margin-top: 4px;
`;
export const IconOff = styled.div`
  
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 260px;
  overflow-y: auto;
  border: 1px solid gray;
  border-right: 1px solid rgb(229, 232, 235);
  border-left: 1px solid rgb(229, 232, 235);
  border-top: 1px solid rgb(229, 232, 235);
  border-bottom: 1px solid rgb(229, 232, 235);
`

export const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const DetailsToggle = styled.div`
    height: 66px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 25px;
    padding-right: 25px;
    font-size: 18px;
    font-weight: 600;
    border: 2px solid rgb(229, 232, 235);
    cursor: pointer;
`
export const DetailsToggleLeft = styled.div`
    display: flex;
    align-items: center;
`
export const DetailsToggleLeftTitle = styled.div`
    margin-left: 10px;
`
export const DetailsInfo = styled.div`
    display: flex;
    border-right: 2px solid rgb(229, 232, 235);
    border-bottom: 2px solid rgb(229, 232, 235);
    border-left: 2px solid rgb(229, 232, 235);
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    align-items: center;
    justify-content: space-between;
    padding: 10px 25px 0px 25px;
    display: ${(props) => (props.isToggle === true ? 'none' : '')};
`
export const DetailsInfoLeftItem = styled.div`
    margin-bottom: 20px;
`

export const DetailsInfoRightItem = styled.div`
    margin-bottom: 20px;
`
export const DetailsInfoLeft = styled.div`
    
`
export const DetailsInfoRight = styled.div`
`
export const ListIconCollection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap:wrap ;
`
export const IconCollection = styled.div`
  display: flex;

`
export const CheckBox = styled.div`
  display: flex;
  flex-direction: column;
 

`
export const CheckBoxInfor = styled.div`
  display: flex;
  justify-content: space-between;

`
export const Number = styled.div`
  margin-top: 10px;
`
