import React, { useState, useEffect } from 'react'
import {
    Favorite,
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
import { useCanister, useConnect } from '@connect2ic/react';
import { Input } from 'antd';
import { Principal } from '@dfinity/principal';
import { toast } from 'react-toastify';

function DetailNft() {
    const {
        isConnected,
        disconnect,
        activeProvider,
        isIdle,
        connect,
        isConnecting,
        principal
    } = useConnect();
    const [superheroes, { loading, error }] = useCanister('superheroes');
    const [listAllNFt, setListAllNFt] = useState([]);
    const [nft, setNft] = useState()
    const [value, setValue] = useState()

    const handleInputChange = (value) => {
        console.log(value);
        setValue(value.target.value)
    }

    const location = useLocation();

    const desc = location.pathname.split('/')[2];

    const [isToggleDetails, setIsToggleDetails] = useState(true)

    const handleToggle = (type) => {
        if (type === 'details') {
            setIsToggleDetails(prev => !prev)
        }
    }

    useEffect(async () => {
        if (principal && superheroes) {
            getListAll();
        }
    }, [principal, superheroes]);

    const getListAll = async () => {
        const res = await superheroes.getAllTokens();
        const promise4all = Promise.all(
            res.map(function (el) {
                return customAxios(el.metadata[0]?.tokenUri);
            })
        );
        const resu = await promise4all;
		const newlist = res.map((el, index) => {
			return {...el, ...resu[index]}
		})
		console.log(newlist);
        setListAllNFt(newlist);
    };

    const getNft = () => {
        const nft = listAllNFt.find((item) => Number(item.index) == desc)
        console.log(nft);
        setNft(nft)
    }

    useEffect(() => {
        getNft()
    }, [listAllNFt])

    const onSendNFT = async () => {
        const res = await superheroes.transfer(Principal.fromText(value), BigInt(desc))
        console.log(res);
        getListAll();
        toast('Send NFT success!')
    }

    return (
        <Container>
            <TopWrapper>
                <TopWrapperLeft>
                    <ImageContainer>
                        <ImageTop>
                            <Logo src="https://cryptologos.cc/logos/internet-computer-icp-logo.png" alt="" />
                            <HeartWrapper>
                                <Favorite style={{ cursor: 'pointer' }} />
                                <div style={{ marginLeft: '5px' }}>1</div>
                            </HeartWrapper>
                        </ImageTop>

                        <Image src={nft?.image} alt="" />
                    </ImageContainer>
                </TopWrapperLeft>

                <TopWrapperRight>
                    <NftName>{nft?.name}</NftName>

                    <OwnerWrapper>
                        <OwnedBy>
                            <OwnedByTitle>Owned by</OwnedByTitle>
                            <OwnedByTitleName>{nft?.owner?.toString()}</OwnedByTitleName>
                        </OwnedBy>

                    </OwnerWrapper>

                    <PriceWrapper>
                        <PriceDetail>
                            <Input
                                value={value}
                                size="small"
                                onChange={handleInputChange}
                                placeholder='Principal'
                            />
                        </PriceDetail>

                        <ButtonWrapper onClick={onSendNFT}>
                            <BuyWrapper>
                                <AccountBalanceWallet />
                                <BuyTitle >Send NFT</BuyTitle>
                            </BuyWrapper>

                        </ButtonWrapper>
                    </PriceWrapper>

                </TopWrapperRight>
            </TopWrapper>
        </Container>
    )
}

export default DetailNft