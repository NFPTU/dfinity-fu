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
} from './card.elements';
import { rarity_type } from './rarity_type'

function CardNft(props) {
	const [rarityImg, setRarityImg] = useState('')

	const { width, height, data , footer} = props;

	const { attributes, description, detail, image, name, tokenId } = data;

	const rarity = attributes[1]?.value

	//Set url to image rarity card: 
	const handleRarityType = () => {
		const ra = rarity_type?.find((item) => item.type === rarity)

		setRarityImg(ra?.src)
	}

	useEffect(() => {
		handleRarityType()
	}, [rarity, rarity_type])

	return (
		<CardContainer width={width} height={height}>
			<CardWrapper>
				<Top>
					<Type>{attributes[0]?.value}</Type>
					<Id>{name}</Id>
				</Top>

				<Body>
					<BodyWrapper>
						<BodyWrapperTop>
							<Level>
								{attributes[2]?.trait_type} <span style={{ color: '#5a985d' }}>{attributes[2]?.value}</span>
							</Level>
							{rarityImg && <Rarity>
								<RarityImg src={rarityImg} alt='rarity' />
							</Rarity>}
						</BodyWrapperTop>
						<CardImg src={image} alt='' />
					</BodyWrapper>
				</Body>

				{footer ? <Footer>
				{footer()}
				</Footer>: ''}
			</CardWrapper>
		</CardContainer>
	);
}

export default CardNft;
