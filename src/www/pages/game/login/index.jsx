import React, { useState, useEffect } from 'react';
import {
	Container,
	PlayBtn,
	Title,
	Wrapper,
	ImgBtn,
	ConnectBtnSt,
} from './login-game.elements';
import SoundBtn from '../../../components/sound-button';
import {
	ConnectButton,
	ConnectDialog,
	Connect2ICProvider,
	useConnect,
	useCanister,
} from '@connect2ic/react';
import { withContext } from '../../../hooks';
import { useNavigate } from 'react-router-dom';
import './style.css';

function LoginGame(props) {
	const { principal, isConnected, disconnect } = useConnect();
	const [superheroes, { loading, error }] = useCanister('superheroes');

	const { prinpId, setPrinpId, logout } = props;

	const navigate = useNavigate();
	const getUserInfo = async () => {
		const res = await superheroes.getUserInfo(principal?.toString());
		if (res?.tokens == null) {
			setTimeout(() => {
				navigate('/home-claim');
			}, 1500);
		} else {
			setTimeout(() => {
				navigate('/inventory');
			}, 1500);
		}
	};

	const onConnectWallet = async () => {
		try {
			console.log(principal);
			if (principal) {
				setPrinpId(principal);
				getUserInfo();
			}
		} catch (e) {
			console.log(e);
		}
	};

	const onDisconnect = () => {
		disconnect();
		logout();
		console.log('disconnect');
	};

	useEffect(() => {
		getUserInfo();
	}, [superheroes, principal]);

	return (
		<Container style={{ backgroundImage: `url(/images/background.png)` }}>
			<ConnectDialog dark={false} />
			<Wrapper>
				<Title>Ants Kingdoms</Title>
				<PlayBtn>
					<SoundBtn>
						<ImgBtn src={'/images/playBtn.png'} alt='' />
					</SoundBtn>
					<ConnectButton
						onConnect={onConnectWallet}
						onDisconnect={onDisconnect}
						// className={ConnectBtnSt}
					/>
				</PlayBtn>
			</Wrapper>
		</Container>
	);
}

export default withContext(LoginGame);
