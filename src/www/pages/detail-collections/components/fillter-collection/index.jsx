import React from 'react';
// import { Container } from '@mui/material';
import LeftBox from '../left-fillter';
import {
	Box,
	Button,
	CheckBox,
	CollectionID,
	FeedBack,
	FillterItems,
	Fillters,
	IconSelect,
	Image,
	ImageTitle,
	Price,
	RightBox,
	ScrollCheckBox,
	ScrollSelect,
	Select,
	Sreachbox,
	TotalItems,
	Accordidon,
	Container,
} from './fillter-elements';

function FillterEle() {
	const [expanded, setExpanded] = React.useState('panel1');

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};
	return (
		<Container>
			<LeftBox />
			<RightBox>
				<Sreachbox></Sreachbox>

				<Select></Select>

				<Select></Select>

				<FillterItems></FillterItems>

				<FillterItems></FillterItems>

				<TotalItems></TotalItems>

				<ImageTitle>
					<Image />

					<CollectionID></CollectionID>

					<Price></Price>

					<FeedBack></FeedBack>
				</ImageTitle>
			</RightBox>
		</Container>
	);
}

export default FillterEle;
