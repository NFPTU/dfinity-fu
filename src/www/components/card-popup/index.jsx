import React, { useState } from 'react';

import {
	Container,
	Glass,
	Content,
	ImgWrapper,
	Img,
	Info,
	InfoTop,
	Name,
	Desc,
} from './card-popup.element';

function CardPopUp({ data, handleClickCardStake, border }) {
	const { attributes, description, detail, image, name, tokenId } = data;
	return (
		<>
			<Container onClick={() => handleClickCardStake(tokenId[0])} border={border}>
				<Glass></Glass>
				<Content>
					<ImgWrapper>
						<Img src={image} alt='' />
					</ImgWrapper>
					<Info>
						<InfoTop>
							<Name>{name}</Name>
							<Desc>{description}</Desc>
						</InfoTop>
					</Info>
				</Content>
			</Container>
		</>
	);
}

export default CardPopUp;
