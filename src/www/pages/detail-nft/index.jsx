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
import { useLocation } from 'react-router-dom';
import { superheroes } from "../../../declarations";
import { customAxios } from "../../utils/custom-axios";

function DetailNft() {
    const [prinpId, setPrinpId] = useState();
    const [listAllNFt, setListAllNFt] = useState([]);
    const [nft, setNft] = useState()

    const location = useLocation();

    const desc = location.pathname.split('/')[2];

    const [isToggleDetails, setIsToggleDetails] = useState(true)

    const handleToggle = (type) => {
        if(type === 'details'){
            setIsToggleDetails(prev => !prev)
        }
    }

    useEffect(async () => {
        const connected = await window.ic.plug.isConnected();
        getListAll()
       
        if (connected) {
            const principalId = await window?.ic?.plug?.agent?.getPrincipal();
            setPrinpId(principalId);
           
        }
    }, []);

    const getListAll = async  () => {
        const res = await superheroes.getAllTokens();
        const promise4all = Promise.all(
            res.map(function (el) {
                return customAxios(el.metadata[0]?.tokenUri);
            })
        );
        const resu = await promise4all;
      
        setListAllNFt(resu);
    };

    const getNft = () => {
        const nft = listAllNFt.find((item) => item.description === desc)
        setNft(nft)
    }

    useEffect(() => {
        getNft()     
    }, [listAllNFt])

    

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

                    <Image src={nft?.image} alt=""/>
                </ImageContainer>

                <DescWrapper>
                    <DescToggle>
                        <Description style={{marginRight: '10px'}}/>
                        Description
                    </DescToggle>
                    <DescScroll>
                    <DescInfo>{nft?.description}</DescInfo>
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

                <NftName>{nft?.name}</NftName>

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