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

    console.log(rarityImg)

    const { width, height} = props

	//Set url to image rarity card: 
	const handleRarityType = () => {
		const ra = rarity_type?.find((item) => item.type === 'Common')

		setRarityImg(ra?.src)
	}

	useEffect(() => {
		handleRarityType()
	}, [rarity_type])
    
  return (
    <CardContainer width={width} height={height}>
        <CardWrapper>
            <Top>
                <Type>Land</Type>
                <Id>#1234</Id>
            </Top>

            <Body>
                <BodyWrapper>
                    <BodyWrapperTop>
                        <Level>Lvl <span style={{color: '#5a985d'}}>3</span></Level>
                        <Rarity>
                            <RarityImg src={rarityImg} alt="rarity"/>
                        </Rarity>
                    </BodyWrapperTop>
                    <CardImg src={'/images/card/rarity/tectos 1 cut.png'} alt=""/>
                </BodyWrapper>
            </Body>

            <Footer>
                <Name>Ant Land #9</Name>
            </Footer>
        </CardWrapper>
    </CardContainer>
  )
}

export default NewCard
