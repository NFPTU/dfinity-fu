import styled from "styled-components";

export const CardContainer = styled.div`
  /* margin: 0 auto; */
  box-sizing: border-box;
  position: relative;
  width: ${({width}) => width + 'px' || '280px'};
  height: ${({height}) => height + 'px' || '380px'};
  background: #1c2023;
  border-radius: 0.5rem; //9px
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 8px;
  color: #ffffff;
  font-weight: 400;
  font-size: 1rem;
`;

export const Type = styled.div`
  
`;

export const Id = styled.div``;

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
`;

export const Level = styled.div``;

export const Rarity = styled.div`
  width: 2rem;
`;

export const RarityImg = styled.img`
  width: 100%;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 230px;
`;

export const Footer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: blueviolet;
    height: 2.5rem;
    width: 100%;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    
`;

export const Name = styled.div`
    font-size: 1.5rem;
    text-transform: uppercase;
`;
