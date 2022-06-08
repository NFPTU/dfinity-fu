import React, { useState, useEffect } from 'react';
import {
	Box,
	CardList,
	Card,
	TextNav,
	BackgroundNav,
	Text,
	CancelButton,
	TopWrapper,
	BtnOk,
	BtnWrapper
} from './popup.elements';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CardWrapper from '../../card-popup';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Swal from 'sweetalert2'

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
	const [cardStakeId, setCardStakeId] = useState('');
	//Set handle control popup
	const handleClose = () => {
		passChildData(!isOpen);
	};

	const handleClickCardStake = (id) => {
		setCardStakeId(id)
		console.log('123')
	}

	//show dialog stake when choose:
	const dialogStake = async () => {
		Swal.fire({
			title: 'Do you want to stake queen in nest?',
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: 'Save',
			denyButtonText: `Don't save`,
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				Swal.fire('Saved!', '', 'success')
			} else if (result.isDenied) {
				Swal.fire('Changes are not saved', '', 'info');
			}
		});
	};

	const handleClickOk = () => {
		passChildData(!isOpen)
		dialogStake()
	}

	useEffect(() => {
		if (typeNFT === 'Nest') {
			setTitle('List of Nest in Land');
		} else if (typeNFT === 'Queen') {
			setTitle('List of Queen in Nest');
		}
	}, [typeNFT]);

	console.log('listStake', listStake);

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
							<TextNav>
								{typeNFT === 'Nest'
									? 'List of Land'
									: 'List Nest'}
							</TextNav>
						</Text>
						<CancelButton onClick={handleClose}>
							<HighlightOffIcon sx={{ fontSize: 40 }} />
						</CancelButton>
					</TopWrapper>
					<Card>
						{listStake?.map((item, index) => {
							const tokenId = item?.tokenId[0]

							console.log('cardStakeId', cardStakeId)

							console.log('tokenId', tokenId)
							return (
								<CardWrapper 
								data={item} 
								key={index} 
								handleClickCardStake={handleClickCardStake}
								border={tokenId === cardStakeId ? true : false}
								/>
							)
						})}
					</Card>
					<BtnWrapper>
						<BtnOk onClick={handleClickOk}>OK</BtnOk>
					</BtnWrapper>
				</Box>
			</Modal>
		</>
	);
}

export default PopUp;
