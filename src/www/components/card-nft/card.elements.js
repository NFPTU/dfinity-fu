import styled from "styled-components";

export const CardContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  width: ${({width}) => width?(width + 'px') : '240px'};
  height: ${({height}) => height?(height + 'px'): '295px'};
  background: #1c2023;
  border-radius: 0.5rem; //9px
  ${({size}) => size =="small" ? `width: 145px;
  height:132px;`: ''}
  margin-top: ${({miniCard}) => miniCard ? '5px' : ''};
  border: ${({active}) => active ? '2px solid red' : '2px solid transparent'};
  margin-right: ${({size}) => size === "small" ? '6px' : ''};
  margin-bottom: ${({size}) => size === "small" ? '6px' : ''}
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px;
  color: #ffffff;
  font-weight: 400;
  font-size: 1rem;
`;

export const Type = styled.div`
  display: ${({miniCard}) => miniCard ? 'none' : ''};
`;

export const Id = styled.div`
  font-size: ${({miniCard}) => miniCard ? '8px' : '17px'};
`;

export const Body = styled.div`
    background: #141416;
    border-radius: 0.5rem;
    margin: 0px 10px;
`;

export const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BodyWrapperTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
    padding: 4px 6px;
    font-weight: 400;
    font-size: 1.1rem;
    position: absolute;
    display: ${({miniCard}) => miniCard ? 'none' : ''};
`;

export const Level = styled.div``;

export const Rarity = styled.div`
  width: 2rem;
  ${({size}) => size =="small" ? `width:24px;
  margin:5px;`: ''}
`;

export const RarityImg = styled.img`
  width: 100%;
  
`;

export const CardImg = styled.img`
  width: fit-content;
  height: ${({height}) => height?(height + 'px'): '230px'};
  ${({size}) => size =="small" ? `height:90px;`: ''};
  padding-bottom: ${({active}) => active ? '5px' : ''};
`

export const Footer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 100%;
    padding-bottom:10px;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    
`;

export const Name = styled.div`
    font-size: 1.5rem;
    text-transform: uppercase;
`;

export const CardImgWrapper= styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;