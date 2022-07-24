import React from 'react'
import {
    FilterImage,
    Mask,
    Price,
    ProductItem,
    ProductItemBottom,
    ProductItemBottomTop,
    ProductItemCategory,
    ProductItemFooter,
    ProductItemImage,
    ProductItemName,
    ProductItemTop,
    ViewProductBtn,
	PriceLogo,
	PriceWrapper,
	BuyBtn,
	NameWrapper
} from './nft-item.elements'
import { FavoriteBorder } from '@mui/icons-material';
import { Link } from 'react-router-dom'

function NftItem({ item }) {


  return (
                <ProductItem>
					<ProductItemTop>
						<ProductItemImage src={item?.image} alt='' />
						<FilterImage>
							<Mask></Mask>
							<ViewProductBtn>
								<Link to={`/nft/${Number(item?.index)}`} style={{textDecoration: 'none', color: '#fecc45'}}>
								View NFT
								</Link>
							</ViewProductBtn>
						</FilterImage>
					</ProductItemTop>

					<ProductItemBottom>
						<ProductItemBottomTop>
							<NameWrapper>
							<ProductItemName>{item?.name}</ProductItemName>
							<BuyBtn>Buy now</BuyBtn>
							</NameWrapper>
							<ProductItemCategory>Collection 1</ProductItemCategory>
						</ProductItemBottomTop>

						<ProductItemFooter>
							<FavoriteBorder />
							<PriceWrapper>
								<PriceLogo src="https://cryptologos.cc/logos/internet-computer-icp-logo.png" alt=""/>
								<Price>0.5</Price>
							</PriceWrapper>
						</ProductItemFooter>
					</ProductItemBottom>
				</ProductItem>
  )
}

export default NftItem