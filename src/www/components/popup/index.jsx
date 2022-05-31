import React from 'react';
import {
	Box,
	CardList,
	Card,
	TextNav,
	BackgroundNav,
	Text,
	CancelButton,
} from './popup.elements';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CardWrapper from '../card-popup';
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

function PopUp() {
	//Set handle control popup
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<Button onClick={handleOpen}>Open modal</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box>
					<Text>
						<TextNav>Nest</TextNav>
						<CancelButton onClick={handleClose}>
							<HighlightOffIcon sx={{ fontSize: 40 }} />
						</CancelButton>
					</Text>
					<Card>
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
				</Box>
			</Modal>
		</>
	);
}

export default PopUp;
