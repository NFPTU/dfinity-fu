import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px 140px; 
`

export const TopWrapper = styled.div`
    display: flex;
    width: 100%;
`

export const TopWrapperLeft = styled.div`
    flex: 5;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    width: 100%;
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 5px 0px #888888;
    border-radius: 10px;
    height: 420px;
    width: 500px;
`

export const ImageTop = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    padding: 12px;
    height: 42px;
    width: 100%;
    background: rgb(255, 255, 255);
    box-sizing: border-box;
    border: 1px solid rgb(229, 232, 235);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`

export const Logo = styled.img`
    width: 30px; 
`

export const HeartWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const Image = styled.img`
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    box-sizing: border-box;
`

export const DescWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    margin-top: 22px;
    width: 100%;
    border: 2px solid rgb(229, 232, 235);
`

export const DescToggle = styled.div`
    height: 66px;
    display: flex;
    align-items: center;
    margin-left: 25px;
    font-size: 18px;
    font-weight: 600;
`

export const DescScroll = styled.div`
    height: 200px;
    overflow-y: scroll; 
    border-top: 2px solid rgb(229, 232, 235);
`

export const DescInfo = styled.div`
    margin: 25px;
`

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

export const TopWrapperRight = styled.div`
    flex: 7;
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const CollectionWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`

export const CollectionName = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: #2081e2;
    cursor: pointer;
`

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const IconItem = styled.div`
    border-right: ${(flag) => flag === 'right' ? '' : '1px solid rgb(229, 232, 235)'};
    border-bottom: 1px solid rgb(229, 232, 235);
    border-left: ${(flag) => flag === 'left' ? '' : '1px solid rgb(229, 232, 235)'};
    border-top: 1px solid rgb(229, 232, 235);
    padding: 7px 10px;
    &:hover {
        box-shadow: 0px 0px 3px 0px #888888;
    }
`

export const NftName = styled.div`
    font-size: 22px;
    font-weight: bold;
    margin-top: 10px;
`

export const OwnerWrapper = styled.div`
    margin-top: 30px;
    font-size: 18px;
    color: rgb(112 122 131);
    display: flex;
    align-items: center;
`

export const OwnedBy = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
`

export const OwnedByTitle = styled.div`
    margin-right: 8px;
`

export const OwnedByTitleName = styled.div`
    cursor: pointer;
    color: rgb(32 129 226);
    &:hover {
        opacity: 0.8;
    }
`

export const FavoriteWrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        color: black;
    }
`

export const FavoriteName = styled.div`
    margin-left: 8px;
`

export const PriceWrapper = styled.div`
    border: 2px solid rgb(229, 232, 235);
    border-radius: 10px;
    padding: 20px;
`

export const PriceDetail = styled.div`
    display: flex;
    align-items: center;
`

export const LogoPrice = styled.img`
    width: 30px;
    margin-right: 10px;
`

export const Price = styled.div`
    font-size: 25px;
    font-weight: bold;
`

export const BuyWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: rgb(32 129 226);
    width: 200px;
    height: 50px;
    margin-top: 20px;
    border-radius: 10px;
    &:hover {
        opacity: 0.8;
    }
    cursor: pointer;
`

export const BuyTitle = styled.div`
    margin-left: 10px;
`

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const MakeOfferWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(32 129 226);
    border: 1px solid rgb(32 129 226);
    background-color: white;
    width: 200px;
    height: 50px;
    margin-top: 20px;
    border-radius: 10px;
    &:hover {
        box-shadow: 0px 0px 5px 0px #888888;
    }
    margin-left: 10px;
    cursor: pointer;
`

export const MakeOfferTitle = styled.div`
    margin-left: 10px;
`