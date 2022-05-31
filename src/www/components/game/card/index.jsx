import React from 'react';
import {
	Button,
	Container,
	Content,
	Desc,
	Glass,
	Img,
	ImgWrapper,
	Info,
	Name,
	InfoTop,
} from './card.elements';

function Card({ data }) {
	const { attributes, description, detail, image, name, tokenId } = data;
	return (
		<Container>
			<Content>
				<ImgWrapper>
					<Img src={image} alt='' />
				</ImgWrapper>
				<Info>
					<InfoTop>
						<Name>{name}</Name>
						<Desc>{description}</Desc>
					</InfoTop>
					{attributes[0].value !== 'Land' && <Button>Stake</Button>}
				</Info>
			</Content>
		</Container>
	);
}

export default Card;
