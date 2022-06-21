import React, { useState } from 'react';
import { Container, Image, Item, Title } from './game-footer.elements';
import { Link } from 'react-router-dom';

function GameFooter() {
	const [active, setAvtive] = useState('Home');

	const items = [
		{
			id: 6,
			imgUrl: '/images/footer/breed.png',
			title: 'Kingdom',
			to: '/',
		},
		{
			id: 4,
			imgUrl: '/images/footer/breed.png',
			title: 'Land',
			to: '/land',
		},
		{
			id: 5,
			imgUrl: '/images/footer/breed.png',
			title: 'Nest',
			to: '/nest',
		},
		{
			id: 3,
			imgUrl: '/images/footer/breed.png',
			title: 'Queen',
			to: '/queen',
		},
		{
			id: 7,
			imgUrl: '/images/footer/breed.png',
			title: 'Marketplace',
			to: '/market',
		},
		{
			id: 8,
			imgUrl: '/images/footer/breed.png',
			title: 'Battle',
			to: '/battle',
		},
	];

	return (
		<Container>
			{items.map((item, index) => (
				<Link to={item.to} style={{ textDecoration: 'none', color: 'black' }}>
					<Item
						key={index}
						onClick={() => setAvtive(item.title)}
						active={active === item.title ? true : false}>
						<Image src={item.imgUrl} alt='' />
						<Title>{item.title}</Title>
					</Item>
				</Link>
			))}
		</Container>
	);
}

export default GameFooter;
