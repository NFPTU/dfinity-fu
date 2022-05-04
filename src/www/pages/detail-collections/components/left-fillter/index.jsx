import React from 'react';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import { Ballot, ExpandMore, ExpandLess } from '@mui/icons-material';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AttachFileIcon from '@mui/icons-material/AttachFile';
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
	DetailContainer,
	ListIconCollection,
	IconCollection,
	CheckBoxInfor,
	Number,
} from './left-fillter-element';

function LeftFillterEle() {
	const [show, setShow] = useState(false);
	const [isToggleDetails, setIsToggleDetails] = useState(true);
	const [isToggleDetails1, setIsToggleDetails1] = useState(true);
	const [isToggleDetails2, setIsToggleDetails2] = useState(true);
	const [isToggleDetails3, setIsToggleDetails3] = useState(true);
	const [isToggleDetails4, setIsToggleDetails4] = useState(true);
	const [isToggleDetails5, setIsToggleDetails5] = useState(true);
	const [isSelect, setSelection] = useState(false);

	const handleToggle = (type) => {
		if (type === 'status') {
			setIsToggleDetails((prev) => !prev);
		} else if (type === 'price') {
			setIsToggleDetails1((prev) => !prev);
		} else if (type === 'chains') {
			setIsToggleDetails2((prev) => !prev);
		} else if (type === 'sale-in') {
			setIsToggleDetails3((prev) => !prev);
		} else if (type === 'background') {
			setIsToggleDetails4((prev) => !prev);
		} else if (type === 'clothes') {
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
			<DetailContainer>
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
							<AttachFileIcon />
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
					<DetailsToggle onClick={() => handleToggle('chains')}>
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
					<DetailsToggle onClick={() => handleToggle('sale-in')}>
						<DetailsToggleLeft>
							<Ballot />
							<DetailsToggleLeftTitle>Details</DetailsToggleLeftTitle>
						</DetailsToggleLeft>
						{isToggleDetails3 ? (
							<ExpandMore style={{ cursor: 'pointer' }} />
						) : (
							<ExpandLess style={{ cursor: 'pointer' }} />
						)}
					</DetailsToggle>
					<DetailsInfo isToggle={isToggleDetails3}>
						<ListIconCollection>
							<IconCollection>
								<CurrencyBitcoinIcon />
								<DetailsToggleLeftTitle>Details</DetailsToggleLeftTitle>
							</IconCollection>
							<IconCollection>
								<CurrencyBitcoinIcon />
								<DetailsToggleLeftTitle>Details</DetailsToggleLeftTitle>
							</IconCollection>
							<IconCollection>
								<CurrencyBitcoinIcon />
								<DetailsToggleLeftTitle>Details</DetailsToggleLeftTitle>
							</IconCollection>
							<IconCollection>
								<CurrencyBitcoinIcon />
								<DetailsToggleLeftTitle>Details</DetailsToggleLeftTitle>
							</IconCollection>
						</ListIconCollection>
					</DetailsInfo>
				</DetailsWrapper>
				<DetailsWrapper>
					<DetailsToggle onClick={() => handleToggle('background')}>
						<DetailsToggleLeft>
							<Ballot />
							<DetailsToggleLeftTitle>Details</DetailsToggleLeftTitle>
						</DetailsToggleLeft>
						{isToggleDetails4 ? (
							<ExpandMore style={{ cursor: 'pointer' }} />
						) : (
							<ExpandLess style={{ cursor: 'pointer' }} />
						)}
					</DetailsToggle>
					<DetailsInfo isToggle={isToggleDetails4}>
						<CheckBox>
							<CheckBoxInfor>
								<FormControlLabel
									control={<Checkbox defaultChecked />}
									label='Label'
								/>
								<Number>19</Number>
							</CheckBoxInfor>
							<CheckBoxInfor>
								<FormControlLabel
									control={<Checkbox defaultChecked />}
									label='Hehe'
								/>
								<Number>19</Number>
							</CheckBoxInfor>
							<CheckBoxInfor>
								<FormControlLabel
									control={<Checkbox defaultChecked />}
									label='Hoho'
								/>
								<Number>19</Number>
							</CheckBoxInfor>
							<CheckBoxInfor>
								<FormControlLabel
									control={<Checkbox defaultChecked />}
									label='hihi'
								/>
								<Number>19</Number>
							</CheckBoxInfor>
						</CheckBox>
					</DetailsInfo>
				</DetailsWrapper>
				<DetailsWrapper>
					<DetailsToggle onClick={() => handleToggle('background')}>
						<DetailsToggleLeft>
							<Ballot />
							<DetailsToggleLeftTitle>Details</DetailsToggleLeftTitle>
						</DetailsToggleLeft>
						{isToggleDetails4 ? (
							<ExpandMore style={{ cursor: 'pointer' }} />
						) : (
							<ExpandLess style={{ cursor: 'pointer' }} />
						)}
					</DetailsToggle>
					<DetailsInfo isToggle={isToggleDetails4}>
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
			</DetailContainer>
		</LeftBox>
	);
}

export default LeftFillterEle;
