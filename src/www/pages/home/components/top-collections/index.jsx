import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
	Body,
	BodyItem,
	BodySubItem,
	Container,
	Id,
	Image,
	Info,
	NFTName,
	Price,
	SeeAllBtn,
	Select,
	Title,
	Top,
	TopRight,
	TopLeft,
	Box,
	BoxItem,
	BoxItemName,
	Group,
} from './top-collections.elements';
import { Done } from '@mui/icons-material';
import { data, tabs } from './mock-data';

function TopCollections() {
	const [tab, setTab] = useState(1);
	const [tabName, setTabName] = useState('1 day');
	const [isOpen, setIsOpen] = useState(false);

	const handleOpenBox = () => {
		setIsOpen((prev) => !prev);
	};

	const handleTab = (id, name) => {
		setTab(id);
		setTabName(name);
		setIsOpen(false);
	};

	return (
		<Container>
			<Top>
				<TopLeft>
					<Title>Top collection in</Title>
					<Select onClick={handleOpenBox}>{tabName}</Select>
					<Box display={isOpen}>
						{tabs.map((item, index) => (
							<BoxItem
								key={index}
								onClick={() => handleTab(item.id, item.name)}>
								<BoxItemName>{item.name}</BoxItemName>
								{item.id === tab && <Done style={{ color: '#0066FF' }} />}
							</BoxItem>
						))}
					</Box>
				</TopLeft>
				<TopRight>
					<SeeAllBtn>See All</SeeAllBtn>
				</TopRight>
			</Top>

			<Body>
				<BodyItem>
					{data.map((item, index) => (
						<BodySubItem key={index}>
							<Id>{item.id}</Id>
							<Link to="/collection/detail">
								<Image src={item.imgUrl} alt='' />
							</Link>

							<Info>
								<NFTName>{item.name}</NFTName>
								<Price>{item.price}</Price>
							</Info>
						</BodySubItem>
					))}
				</BodyItem>
			</Body>
		</Container>
	);
}

export default TopCollections;
