import React, { useState, useEffect } from 'react';
import { Container, Image, Item, Title } from './game-footer.elements';
import { Link } from 'react-router-dom';
import { withContext } from '../../hooks';

function GameFooter(props) {
	const { tabMarketFooter, setTabMarketFooter } = props

	// const [active, setAvtive] = useState('Kingdom');

	const handleActive = (value) => {
		if (value === 'Marketplace') {
			sessionStorage.setItem('tabFooterActive', 'Kingdom');
		} else {
			setTabMarketFooter(value);
			const tabFooterActive = value;
			sessionStorage.setItem('tabFooterActive', tabFooterActive);
		}
	}

	useEffect(() => {
		let mounted = true
		if (mounted) {
			const tabFooterFromStorage = sessionStorage.getItem('tabFooterActive');
			if (tabFooterFromStorage) {
				setTabMarketFooter(tabFooterFromStorage);
			} else {
				sessionStorage.setItem('tabFooterActive', 'Kingdom');
				setTabMarketFooter('Kingdom');
			}
		}

		return () => mounted = false;

	}, [])

	const items = [
		{
			id: 1,
			imgUrl: '/images/footer/breed.png',
			title: 'Kingdom',
			to: '/kingdom',
		},
		{
			id: 2,
			imgUrl: '/images/footer/breed.png',
			title: 'Land',
			to: '/land',
		},
		{
			id: 3,
			imgUrl: '/images/footer/breed.png',
			title: 'Nest',
			to: '/nest',
		},
		{
			id: 4,
			imgUrl: '/images/footer/breed.png',
			title: 'Queen',
			to: '/queen',
		},
		{
			id: 5,
			imgUrl: '/images/footer/breed.png',
			title: 'Marketplace',
			to: '/market',
		},
		{
			id: 6,
			imgUrl: '/images/footer/breed.png',
			title: 'Battle',
			to: '/battle',
		}
	];

	return (
		<Container>
			{items.map((item, index) => (
				<Link to={item.to} style={{ textDecoration: 'none', color: 'black' }}>
					<Item
						key={index}
						onClick={() => handleActive(item.title)}
						active={item.title === tabMarketFooter ? true : false}>
						<Image src={item.imgUrl} alt='' />
						<Title>{item.title}</Title>
					</Item>
				</Link>
			))}
		</Container>
	);
}

export default withContext(GameFooter);
