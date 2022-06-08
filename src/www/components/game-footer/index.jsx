import React, { useState } from 'react';
import { Container, Image, Item, Title } from './game-footer.elements';
import { Link } from 'react-router-dom';

function GameFooter() {
	const [active, setAvtive] = useState('Home');

	const items = [
		{
			id: 1,
			imgUrl: '/images/footer/breed.png',
			title: 'Home',
      to: '/home-claim'
		},
		{
			id: 2,
			imgUrl: '/images/footer/home.png',
			title: 'Inventory',
      to: '/inventory'
		},
		{
			id: 3,
			imgUrl: '/images/footer/inventory.png',
			title: 'Breeding',
      to: '/breeding'
		},
	];

	return (
		<Container>
			{items.map((item, index) => (
				<Link to={item.to} style={{textDecoration: 'none', color: 'black'}}>
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
