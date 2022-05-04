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

function NftItem({ item }) {

  return (
                <ProductItem>
					<ProductItemTop>
						<ProductItemImage src={item?.image} alt='' />
						<FilterImage>
							<Mask></Mask>
							<ViewProductBtn>View NFT</ViewProductBtn>
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