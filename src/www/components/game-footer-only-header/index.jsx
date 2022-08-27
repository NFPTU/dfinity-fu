import React, { useState, useEffect } from 'react';
import {
	Container,
	Image,
	Item,
	Title,
} from './game-footer-only-header.elements';
import { Link } from 'react-router-dom';

function GameFooterOnlyHeader() {

	return (
		<Container>
			<Link to='/market' style={{ textDecoration: 'none', color: 'black' }}>
				<Item>
					<Image src='/images/footer/breed.png' alt='' />
					<Title>Marketplace</Title>
				</Item>
			</Link>
		</Container>
	);
}

export default GameFooterOnlyHeader;
