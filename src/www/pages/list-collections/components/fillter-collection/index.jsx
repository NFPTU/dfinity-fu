import React from 'react';
import { Container } from '@mui/material';

import {
    Box,
    LeftBox,
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
    Accordidon
}
from '../fillter-collection/fillter-elements';

function FillterEle() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    }
	return (
		<Container>
			<Box>
				<LeftBox>
					<Fillters>
						<ScrollSelect>
							<Button></Button>
						</ScrollSelect>

						<ScrollCheckBox></ScrollCheckBox>
					</Fillters>
				</LeftBox>

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
			</Box>
		</Container>
	);
}

export default FillterEle;
