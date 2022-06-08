import React, { useState, useEffect } from 'react';
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

function Card(props) {
	const { data, size } = props;

	const { attributes, description, detail, image, name, tokenId } = data;

	return (
		<>
				<Content>
					<ImgWrapper>
						<Img src={image} alt='' />
					</ImgWrapper>
					{/* <Info>
						<InfoTop>
							<Name>{name}</Name>
							<Desc>{description}</Desc>
						</InfoTop>
					</Info> */}
				</Content>
		</>
	);
}

export default Card;
