import React from 'react';

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

function CardPopUp({ data }) {
	return (
		<>
			<Container>
				<Glass></Glass>
				<Content>
					<ImgWrapper>
						<Img src={data?.image} alt='' />
					</ImgWrapper>
					<Info>
						<InfoTop>
							<Name>Ant worker #2</Name>
							<Desc>Description of Ant worker #2</Desc>
						</InfoTop>
					</Info>
				</Content>
			</Container>
		</>
	);
}

export default CardPopUp;
