import React from 'react';
// import { Container } from '@mui/material';
import LeftBox from '../left-fillter';
import RighttBox from '../right-fillter';
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
			<RighttBox />
		</Container>
	);
}

export default FillterEle;
