import React, { useState, useEffect } from 'react'
import { Favorite,
         Description,
         Facebook,
         AccountBalanceWallet,
         Ballot,
         ExpandLess,
         ExpandMore
} from '@mui/icons-material';
import { 
    BuyTitle,
    BuyWrapper,
    CollectionName,
    CollectionWrapper,
    Container,
    DescInfo,
    DescToggle,
    DescWrapper,
    DetailsInfo,
    DetailsToggle,
    DetailsWrapper,
    FavoriteName,
    FavoriteWrapper,
    HeartWrapper,
    IconItem,
    IconWrapper,
    Image,
    ImageContainer,
    ImageTop,
    Logo,
    LogoPrice,
    NftName,
    OwnedBy,
    OwnedByTitle,
    OwnedByTitleName,
    OwnerWrapper,
    Price,
    PriceDetail,
    PriceWrapper,
    TopWrapper,
    TopWrapperLeft,
    TopWrapperRight,
    DescScroll,
    DetailsInfoLeft,
    DetailsInfoRight,
    DetailsToggleLeft,
    DetailsToggleLeftTitle,
    DetailsInfoLeftItem,
    DetailsInfoRightItem,
    ButtonWrapper,
    MakeOfferTitle,
    MakeOfferWrapper
} from './detail-nft.elements'
import ItemActivity from './components/item-activity'

function DetailNft() {
    const [isToggleDetails, setIsToggleDetails] = useState(true)

    const handleToggle = (type) => {
        if(type === 'details'){
            setIsToggleDetails(prev => !prev)
        }
    }

  return (
    <Container>
        <TopWrapper>
            <TopWrapperLeft>
                <ImageContainer>
                    <ImageTop>
                        <Logo src="https://cryptologos.cc/logos/internet-computer-icp-logo.png" alt=""/>
                        <HeartWrapper>
                            <Favorite style={{cursor: 'pointer'}}/>
                            <div style={{marginLeft: '5px'}}>1</div>
                        </HeartWrapper>
                    </ImageTop>

                    <Image src="https://lh3.googleusercontent.com/F6w8g8ZVJJkRo7VbfjppXLlprPQvIU9YRaYhChszhZV3ijOJKZgWglT7u50pbP13MUjizZIk_nE-dkPHbqmYzpD-d94yRC4GDuB7=w600" alt=""/>
                </ImageContainer>

                <DescWrapper>
                    <DescToggle>
                        <Description style={{marginRight: '10px'}}/>
                        Description
                    </DescToggle>
                    <DescScroll>
                    <DescInfo>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</DescInfo>
                    </DescScroll>
                </DescWrapper>

                <DetailsWrapper>
                    <DetailsToggle onClick={() => handleToggle('details')}>
                        <DetailsToggleLeft>
                            <Ballot />
                            <DetailsToggleLeftTitle>Details</DetailsToggleLeftTitle>
                        </DetailsToggleLeft>
                        {
                            isToggleDetails 
                            ? <ExpandMore style={{cursor: 'pointer'}} /> 
                            : <ExpandLess style={{cursor: 'pointer'}} />
                        }
                    </DetailsToggle>
                    <DetailsInfo isToggle={isToggleDetails}>
                        <DetailsInfoLeft>
                            <DetailsInfoLeftItem>Contract Address</DetailsInfoLeftItem>
                            <DetailsInfoLeftItem>Token ID</DetailsInfoLeftItem>
                            <DetailsInfoLeftItem>Token Standard</DetailsInfoLeftItem>
                            <DetailsInfoLeftItem>Blockchain</DetailsInfoLeftItem>
                            <DetailsInfoLeftItem>Creator Fees</DetailsInfoLeftItem>
                        </DetailsInfoLeft>

                        <DetailsInfoRight>
                            <DetailsInfoRightItem>0x123...567</DetailsInfoRightItem>
                            <DetailsInfoRightItem>1478</DetailsInfoRightItem>
                            <DetailsInfoRightItem>ERC-721</DetailsInfoRightItem>
                            <DetailsInfoRightItem>ICP</DetailsInfoRightItem>
                            <DetailsInfoRightItem>0%</DetailsInfoRightItem>
                        </DetailsInfoRight>
                    </DetailsInfo>
                </DetailsWrapper>
            </TopWrapperLeft>

            <TopWrapperRight>
                <CollectionWrapper>
                    <CollectionName>Sweet Pool - Public</CollectionName>
                    <IconWrapper>
                        <IconItem flag={'right'}><Facebook /></IconItem>
                        <IconItem><Facebook /></IconItem>
                        <IconItem flag={'left'}><Facebook /></IconItem>
                        <IconItem flag={'left'}><Facebook /></IconItem>
                    </IconWrapper>
                </CollectionWrapper>

                <NftName>Staked JELLY</NftName>

                <OwnerWrapper>
                    <OwnedBy>
                        <OwnedByTitle>Owned by</OwnedByTitle>
                        <OwnedByTitleName>DC45DF</OwnedByTitleName>
                    </OwnedBy>

                    <FavoriteWrapper>
                        <Favorite style={{cursor: 'pointer'}}/>
                        <FavoriteName>1 favorite</FavoriteName>
                    </FavoriteWrapper>
                </OwnerWrapper>

                <PriceWrapper>
                    <PriceDetail>
                        <LogoPrice src="https://cryptologos.cc/logos/internet-computer-icp-logo.png" alt=""/>
                        <Price>2,305</Price>
                    </PriceDetail>
                    
                    <ButtonWrapper>
                    <BuyWrapper>
                        <AccountBalanceWallet />
                        <BuyTitle>Buy Now</BuyTitle>
                    </BuyWrapper>

                    <MakeOfferWrapper>
                        <AccountBalanceWallet />
                        <MakeOfferTitle>Make Offer</MakeOfferTitle>
                    </MakeOfferWrapper>
                    </ButtonWrapper>
                </PriceWrapper>
                
                <ItemActivity />
            </TopWrapperRight>
        </TopWrapper>
    </Container>
  )
}

export default DetailNft