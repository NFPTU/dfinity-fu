import React, { useState } from 'react';
import {
	Box,
	CardList,
	Card,
	TextNav,
	BackgroundNav,
	Text,
	CancelButton,
	TopWrapper,
} from './popup.elements';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CardWrapper from '../../card-popup';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

function PopUp(props) {
	const { isOpen, passChildData, listStake, typeNFT } = props;

	const [title, setTitle] = useState('');
	//Set handle control popup
	const handleClose = () => {
		passChildData(!isOpen);
	};

	useState(() => {
		if (typeNFT === 'Nest') {
			setTitle('List of Nest in Land');
		} else if (typeNFT === 'Queen') {
			setTitle('List of Queen in Nest');
		}
	}, [typeNFT]);

	return (
		<>
			<Modal
				open={isOpen}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box>
					<TopWrapper>
						<Text>
							<TextNav>{typeNFT === 'Nest' ? 'List of Nest in Land' : 'List of Queen in Nest'}</TextNav>
						</Text>
						<CancelButton onClick={handleClose}>
							<HighlightOffIcon sx={{ fontSize: 40 }} />
						</CancelButton>
					</TopWrapper>
					{listStake === 'ok' && (
						<Card>
							<h1>Stake successfully!!!</h1>
							<CardWrapper
								data={{
									image:
										'https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg',
								}}
							/>
							<CardWrapper
								data={{
									image:
										'https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg',
								}}
							/>
							<CardWrapper
								data={{
									image:
										'https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg',
								}}
							/>
							<CardWrapper
								data={{
									image:
										'https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg',
								}}
							/>
							<CardWrapper
								data={{
									image:
										'https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg',
								}}
							/>
						</Card>
					)}
				</Box>
			</Modal>
		</>
	);
}

export default PopUp;
