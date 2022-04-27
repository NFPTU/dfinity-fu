import React, { useState } from 'react';
import { ExpandLess, ExpandMore, SwapVert } from '@mui/icons-material';
import {
	BodyWrapper,
	BodyWrapperBody,
	BodyWrapperBodyItem,
	BodyWrapperTop,
	BodyWrapperTopItem,
	Container,
	Item,
	Logo,
	Price,
	TopWrapperLeft,
	TopWrapper,
	TopWrapperTitle,
} from './item-activity.elements';

function ItemActivity() {
	const [isToggle, setIsToggle] = useState(true);

	const handleClick = () => {
		setIsToggle((prev) => !prev);
	};

	return (
		<Container>
			<TopWrapper onClick={handleClick}>
				<TopWrapperLeft>
					<SwapVert />
					<TopWrapperTitle>Item Activity</TopWrapperTitle>
				</TopWrapperLeft>
				{isToggle ? <ExpandMore /> : <ExpandLess />}
			</TopWrapper>

			<BodyWrapper toggle={isToggle}>
				<BodyWrapperTop>
					<BodyWrapperTopItem>Event</BodyWrapperTopItem>
					<BodyWrapperTopItem>Price</BodyWrapperTopItem>
					<BodyWrapperTopItem>From</BodyWrapperTopItem>
					<BodyWrapperTopItem>To</BodyWrapperTopItem>
					<BodyWrapperTopItem>Date</BodyWrapperTopItem>
				</BodyWrapperTop>

				<BodyWrapperBody>
					{Array(5)
						.fill('')
						.map((_, index) => (
							<Item>
								<BodyWrapperBodyItem>List</BodyWrapperBodyItem>
								<BodyWrapperBodyItem>
									<Logo
										src='https://cryptologos.cc/logos/internet-computer-icp-logo.png'
										alt=''
									/>
									<Price>4</Price>
								</BodyWrapperBodyItem>
								<BodyWrapperBodyItem>ABC45</BodyWrapperBodyItem>
								<BodyWrapperBodyItem>DEF67</BodyWrapperBodyItem>
								<BodyWrapperBodyItem>4 hours ago</BodyWrapperBodyItem>
							</Item>
						))}
				</BodyWrapperBody>
			</BodyWrapper>
		</Container>
	);
}

export default ItemActivity;
