import React, { useState, useEffect } from 'react'
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
    Type
} from './new-card.elements'
import { rarity_type } from './rarity_type'

function NewCard(props) {
    const [rarityImg, setRarityImg] = useState('')
    
    const { width, height, data} = props

	//Set url to image rarity card: 
	const handleRarityType = () => {
        const raNFT = data?.attributes[1]?.value
		const raImg = rarity_type?.find((item) => item.type === raNFT)

		setRarityImg(raImg?.src)
	}

	useEffect(() => {
		handleRarityType()
	}, [rarity_type, data])
    
  return (
    <CardContainer width={width} height={height}>
        <CardWrapper>
            <Top>
                <Type>{data?.attributes[0]?.value}</Type>
                <Id>{data?.tokenId[0]}</Id>
            </Top>

            <Body>
                <BodyWrapper>
                    <BodyWrapperTop>
                        <Level>Lvl <span style={{color: '#5a985d'}}>{data?.attributes[2]?.value}</span></Level>
                        <Rarity>
                            <RarityImg src={rarityImg} alt="rarity"/>
                        </Rarity>
                    </BodyWrapperTop>
                    <CardImg src={data?.image} alt=""/>
                </BodyWrapper>
            </Body>

            <Footer>
                <Name>{data?.description}</Name>
            </Footer>
        </CardWrapper>
    </CardContainer>
  )
}

export default NewCard
