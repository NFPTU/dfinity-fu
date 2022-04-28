import React from 'react';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import { Ballot, ExpandMore, ExpandLess } from '@mui/icons-material';
import {
	LeftBox,
	FilltersOn,
	FilltersOff,
	ScrollSelect,
	Button,
	ScrollCheckBox,
	CheckBox,
	TextFillter,
	IconOff,
	TextFillterNon,
	TotalButton,
	DetailsWrapper,
	DetailsToggle,
	DetailsToggleLeft,
	DetailsToggleLeftTitle,
	DetailsInfo,
	DetailsInfoLeftItem,
	DetailsInfoRightItem,
	DetailsInfoLeft,
	DetailsInfoRight,
} from './left-fillter-element';

function LeftFillterEle() {
	const [show, setShow] = useState(false);
	const [isToggleDetails, setIsToggleDetails] = useState(true);
	const [isToggleDetails1, setIsToggleDetails1] = useState(true);
	const [isToggleDetails2, setIsToggleDetails2] = useState(true);
	const [isToggleDetails3, setIsToggleDetails3] = useState(true);
	const [isToggleDetails4, setIsToggleDetails4] = useState(true);
	const [isToggleDetails5, setIsToggleDetails5] = useState(true);


	const handleToggle = (type) => {
		if (type === 'status') {
			setIsToggleDetails((prev) => !prev);
		}else if (type === 'price'){
			setIsToggleDetails1((prev) => !prev);
		}else if (type === 'chains'){
			setIsToggleDetails2((prev) => !prev);
		}else if (type === 'sale-in'){
			setIsToggleDetails3((prev) => !prev);
		}else if (type === 'background'){
			setIsToggleDetails4((prev) => !prev);
		}else if (type === 'clothes'){
			setIsToggleDetails5((prev) => !prev);
		}
	};

	return show ? (
		<LeftBox>
			<FilltersOn onClick={() => setShow(true)}>
				<ScrollSelect>
					<Button></Button>
				</ScrollSelect>
				<ScrollCheckBox></ScrollCheckBox>
			</FilltersOn>
		</LeftBox>
	) : (
		<LeftBox>
			<FilltersOff>
				<TextFillter>
					<AccessibleForwardIcon />
					<TextFillterNon>Fillter</TextFillterNon>
				</TextFillter>
				<IconOff>
					<ArrowBackIcon fontSize='small' />
				</IconOff>
			</FilltersOff>
			<DetailsWrapper>
				<DetailsToggle onClick={() => handleToggle('status')}>
					<DetailsToggleLeft>
						<Ballot />
						<DetailsToggleLeftTitle>Details</DetailsToggleLeftTitle>
					</DetailsToggleLeft>
					{isToggleDetails ? (
						<ExpandMore style={{ cursor: 'pointer' }} />
					) : (
						<ExpandLess style={{ cursor: 'pointer' }} />
					)}
				</DetailsToggle>
				<DetailsInfo isToggle={isToggleDetails}>
					<TotalButton>
						<Button>hehehehe</Button>
						<Button>hehehehe</Button>
						<Button>hehehehe</Button>
						<Button>hehehehe</Button>
						<Button>hehehehe</Button>
						<Button>hehehehe</Button>
					</TotalButton>
				</DetailsInfo>
			</DetailsWrapper>
			<DetailsWrapper>
				<DetailsToggle onClick={() => handleToggle('price')}>
					<DetailsToggleLeft>
						<Ballot />
						<DetailsToggleLeftTitle>Details</DetailsToggleLeftTitle>
					</DetailsToggleLeft>
					{isToggleDetails1 ? (
						<ExpandMore style={{ cursor: 'pointer' }} />
					) : (
						<ExpandLess style={{ cursor: 'pointer' }} />
					)}
				</DetailsToggle>
				<DetailsInfo isToggle={isToggleDetails1}>
					<TotalButton>
						<Button>hehehehe</Button>
						<Button>hehehehe</Button>
						<Button>hehehehe</Button>
						<Button>hehehehe</Button>
						<Button>hehehehe</Button>
						<Button>hehehehe</Button>
					</TotalButton>
				</DetailsInfo>
			</DetailsWrapper>
			<DetailsWrapper>
				<DetailsToggle onClick={() => handleToggle('details')}>
					<DetailsToggleLeft>
						<Ballot />
						<DetailsToggleLeftTitle>Details</DetailsToggleLeftTitle>
					</DetailsToggleLeft>
					{isToggleDetails2 ? (
						<ExpandMore style={{ cursor: 'pointer' }} />
					) : (
						<ExpandLess style={{ cursor: 'pointer' }} />
					)}
				</DetailsToggle>
				<DetailsInfo isToggle={isToggleDetails2}>
					<TotalButton>
						<Button>hehehehe</Button>
						<Button>hehehehe</Button>
						<Button>hehehehe</Button>
						<Button>hehehehe</Button>
						<Button>hehehehe</Button>
						<Button>hehehehe</Button>
					</TotalButton>
				</DetailsInfo>
			</DetailsWrapper>
			<DetailsWrapper>
				<DetailsToggle onClick={() => handleToggle('details')}>
					<DetailsToggleLeft>
						<Ballot />
						<DetailsToggleLeftTitle>Details</DetailsToggleLeftTitle>
					</DetailsToggleLeft>
					{isToggleDetails ? (
						<ExpandMore style={{ cursor: 'pointer' }} />
					) : (
						<ExpandLess style={{ cursor: 'pointer' }} />
					)}
				</DetailsToggle>
				<DetailsInfo isToggle={isToggleDetails}>
					<TotalButton>
						<Button>hehehehe</Button>
						<Button>hehehehe</Button>
						<Button>hehehehe</Button>
						<Button>hehehehe</Button>
						<Button>hehehehe</Button>
						<Button>hehehehe</Button>
					</TotalButton>
				</DetailsInfo>
			</DetailsWrapper>
			<DetailsWrapper>
				<DetailsToggle onClick={() => handleToggle('chains')}>
					<DetailsToggleLeft>
						<Ballot />
						<DetailsToggleLeftTitle>Details</DetailsToggleLeftTitle>
					</DetailsToggleLeft>
					{isToggleDetails ? (
						<ExpandMore style={{ cursor: 'pointer' }} />
					) : (
						<ExpandLess style={{ cursor: 'pointer' }} />
					)}
				</DetailsToggle>
				<DetailsInfo isToggle={isToggleDetails}>
					<TotalButton>
						<Button>hehehehe</Button>
						<Button>hehehehe</Button>
						<Button>hehehehe</Button>
						<Button>hehehehe</Button>
						<Button>hehehehe</Button>
						<Button>hehehehe</Button>
					</TotalButton>
				</DetailsInfo>
			</DetailsWrapper>
		</LeftBox>
	);
}

export default LeftFillterEle;
