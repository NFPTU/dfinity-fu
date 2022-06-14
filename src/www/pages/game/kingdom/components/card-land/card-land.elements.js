import styled from "styled-components";

export const LandItem = styled.div`
    position: relative;
    width: 84px;
    height: 118px;
    background-color: #1c2023;
    border-radius: 9px;
    margin-right: 10px;
    border: ${({active}) => active ? '1px solid white' : ''};
    box-shadow: ${({active}) => active ? '3px 3px 5px 0px rgba(0, 0, 0, 0.75)' : ''};
`

export const LandItemTop = styled.div`
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 12px;
    padding: 5px;
`

export const LandItemType = styled.div`

`

export const LandItemId = styled.div`

`

export const LandItemBody = styled.div`
    background: #141416;
    border-radius: 0.5rem;
`

export const LandItemImg = styled.img`
    width: 100%;
    height: 70px;
`

export const LandItemFooter = styled.div`
    background: #ffffff;
    height: 20px;
    font-size: 12px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const LandItemName = styled.div`

`