import React, { useState, useEffect } from 'react';
import {
	Background,
	Container,
	Title,
	TitleWrapper,
	Wrapper,
	WalletAddress
} from './game-navbar.elements';
import { useLocation } from 'react-router-dom';
import Resource from './resource';
import { useCanister, useConnect } from '@connect2ic/react';
import { withContext } from '../../hooks';
import { Principal } from '@dfinity/principal';
import { roundToTwoDecimal } from '../../utils/utils';

function GameNavbar(props) {
	const { resource, setResource, prinpId, logout } = props;
	const [navbarTitle, setNavbarTitle] = useState('Ants Kingdoms');
	const [balance, setbalance] = useState(0);
	const [token] = useCanister('token');

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

	const onDisconnect = () => {
		disconnect();
		logout();
	};

	useEffect(async() => {
		if(principal && token) {
			getBalance()
		}
	}, [principal, token]);

	const getBalance = async () => {
		const res2 = await token?.balanceOf(Principal.fromText(principal?.toString()));
		setbalance(res2)
	}


	return (
		<Container>
			<Wrapper>
				<Resource
					img={'/images/navbar/icons/gold.png'}
					resource={roundToTwoDecimal(resource?.gold)}
				/>
				<Resource
					img={'/images/navbar/icons/soil.png'}
					resource={roundToTwoDecimal(resource?.soil)}
				/>
				
				<Resource
					img={'/images/navbar/icons/food.png'}
					resource={roundToTwoDecimal(resource?.food)}
				/>
				<TitleWrapper>
					<Background src={'/images/sidebarButton.png'} alt='background' />

					<Title>Ants Kingdoms</Title>
				</TitleWrapper>
				<Resource
					img={'/images/navbar/icons/leaf.png'}
					resource={roundToTwoDecimal(resource?.leaf)}
				/>

				<Resource
					img={'/images/navbar/ant-token.jpg'}
					resource={roundToTwoDecimal(Number(balance))}
				/>
				<WalletAddress onClick={onDisconnect}>
					{principal?.toString()?.slice(0, 3)} ...{' '}
					{principal?.toString()?.slice(60, 63)}
				</WalletAddress>
			</Wrapper>
		</Container>
	);
}

export default withContext(GameNavbar);
