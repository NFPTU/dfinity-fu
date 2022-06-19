import React, { useState, useEffect } from 'react';
import {
	Background,
	Container,
	Title,
	TitleWrapper,
	Wrapper,
} from './game-navbar.elements';
import { useLocation } from 'react-router-dom';
import Resource from './resource';
import { useCanister, useConnect } from '@connect2ic/react';
import { withContext } from '../../hooks';

function GameNavbar(props) {
	const {resource, setResource} = props;
	const [navbarTitle, setNavbarTitle] = useState('Ants Kingdoms');

	const [superheroes, { loading, error }] = useCanister('superheroes');
	const {
		principal,
		isConnected,
		disconnect,
		activeProvider,
		isIdle,
		connect,
		isConnecting,
	} = useConnect();

	const location = useLocation();
	const path = location.pathname.slice(1);

	useEffect(() => {
		if (path === 'inventory') {
			setNavbarTitle('Inventory');
		}
	}, [location]);


	return (
		<Container>
			<Wrapper>
				<Resource
					img={'/images/navbar/icons/gold.png'}
					resource={resource?.gold}
				/>
				<Resource
					img={'/images/navbar/icons/soil.png'}
					resource={resource?.soil}
				/>
				<TitleWrapper>
					<Background src={'/images/sidebarButton.png'} alt='background' />

					<Title>Ants Kingdoms</Title>
				</TitleWrapper>
				<Resource
					img={'/images/navbar/icons/food.png'}
					resource={resource?.food}
				/>
				<Resource
					img={'/images/navbar/icons/leaf.png'}
					resource={resource?.leaf}
				/>
			</Wrapper>
		</Container>
	);
}

export default withContext(GameNavbar);
