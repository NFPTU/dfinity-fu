import React from 'react';

import {
	Container,
	BoxClaimBorder,
	BoxClaim,
	TextBtn,
	ImgBtn,
} from './home-claim';
function Homeclaim() {
	return (
		<>
			<Container>
				<BoxClaimBorder>
					<BoxClaim>
						<ImgBtn src={'/images/sidebarButton.png'} alt='' />
						<TextBtn>Claim</TextBtn>
					</BoxClaim>
				</BoxClaimBorder>
			</Container>
		</>
	);
}

export default Homeclaim;
