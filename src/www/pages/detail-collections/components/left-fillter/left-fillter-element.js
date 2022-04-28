import styled from "styled-components"

export const Container = styled.div`
        width: 100%;
  display: flex;
`;

export const LeftBox = styled.div`
  height: auto;
  width: 20%;
  border: 1px solid;
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

export const CheckBox = styled.input`

`;
export const FilltersOff = styled.div`
  width: 100%;
  height: 50x;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
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
export const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 22px;
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
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
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
    opacity: ${(props) => (props.isToggle === true ? 1 : 0)};
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

