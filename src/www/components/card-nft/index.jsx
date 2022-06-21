import React, { useState, useEffect } from 'react';
import {
	Body,
	BodyWrapper,
	BodyWrapperTop,
	CardContainer,
	CardImg,
	CardWrapper,
	Footer,
	Id,
	Level,
	Name,
	Rarity,
	RarityImg,
	Top,
	Type,
	CardImgWrapper
} from './card.elements';
import { rarity_type } from './rarity_type'

function CardNft(props) {
	const [rarityImg, setRarityImg] = useState('')

	const { width, height, data, footer, size, heightImg } = props;

	const { attributes, description, detail, image, name, tokenId } = data;

	const rarity = attributes && attributes[1]?.value

	//Set url to image rarity card: 
	const handleRarityType = () => {
		const ra = rarity_type?.find((item) => item.type === rarity)

		setRarityImg(ra?.src)
	}

	useEffect(() => {
		handleRarityType()
	}, [rarity, rarity_type])

	return (
		<CardContainer width={width} height={height} size={size}>
			<CardWrapper>
				<Top>
					<Type>{attributes && attributes[0]?.value}</Type>
					<Id>{name}</Id>
				</Top>

				<Body>
					<BodyWrapper>
						<BodyWrapperTop>
							{rarityImg && <Rarity size={size}>
								<RarityImg src={rarityImg} alt='rarity' />
							</Rarity>}
						</BodyWrapperTop>
						<CardImgWrapper>
							<CardImg className="card-img" src={image} alt='' height={heightImg} size={size}/>
						</CardImgWrapper>
					</BodyWrapper>
				</Body>

				{footer ? <Footer>
					{footer()}
				</Footer> : ''}
			</CardWrapper>
		</CardContainer>
	);
}

export default CardNft;
