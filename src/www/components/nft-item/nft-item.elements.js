import styled from 'styled-components'

export const ProductItem = styled.div`
    width: 263px;
    height: 360px;
    margin-right: 20px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 5px 0px #888888;
    display: flex;
    flex-direction: column;
`

export const FilterImage = styled.div` 
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 3;
    transition: all 0.5s ease;
    cursor: pointer;
    display:  flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
`

export const ProductItemTop = styled.div`
    flex: 3;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 262px;
    &:hover ${FilterImage}{
        opacity: 1;
    }
`

export const ProductItemImage = styled.img`
    height: 263px;
    width: 100%;
    z-index: 2;
`

export const Mask = styled.div`
    position: absolute;
    background-color: black;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.6;
`

export const ViewProductBtn = styled.div`
    z-index: 1;
    position: absolute;
    background-color: transparent;
    border: 2px solid #fecc45;
    color: #fecc45;
    padding: 4px 12px;
`

export const ProductItemBottom = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0px 10px;
    min-height: 100px;
`

export const ProductItemBottomTop = styled.div`
    height: 66%;
`

export const NameWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const BuyBtn = styled.div`
    color: #18a5ff;
    font-weight: bold;
`


export const ProductItemName = styled.div`
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
`

export const ProductItemCategory = styled.div`
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
    font-style: italic;
`

export const ProductItemFooter = styled.div`
    height: 33%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 400;
`

export const PriceWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const PriceLogo = styled.img`
    width: 20px;
    margin-right: 7px;
`


export const Price = styled.div`
    font-size: 16px;
    font-weight: 500;
`

export const PageContainer = styled.div`

`