import React, { useState, useEffect } from 'react';
import { Container, Image, Item, Title } from './game-footer.elements';
import { Link } from 'react-router-dom';
import { withContext } from '../../hooks';

function GameFooter(props) {
	const { tabMarketFooter, setTabMarketFooter } = props

	// const [active, setAvtive] = useState('Kingdom');

	const handleActive = (value) => {
		setTabMarketFooter(value);
		const tabFooterActive = JSON.stringify(value);
		localStorage.setItem('tabFooterActive', tabFooterActive);
	}

	useEffect(() => {
		localStorage.setItem('tabFooterActive', JSON.stringify('Kingdom'));
	}, [])

	const items = [
		{
			id: 6,
			imgUrl: '/images/footer/breed.png',
			title: 'Kingdom',
			to: '/kingdom',
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
						onClick={() => handleActive(item.title)}
						active={item.title === tabMarketFooter  ? true : false}>
						<Image src={item.imgUrl} alt='' />
						<Title>{item.title}</Title>
					</Item>
				</Link>
			))}
		</Container>
	);
}

export default withContext(GameFooter);
