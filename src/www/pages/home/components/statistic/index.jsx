import React from 'react';
import { Container, Item, Number, Title, Wrapper } from './statistic.elements';

function Statistic() {
	const statistic = [
		{
			id: 1,
			title: 'Daily sales',
			number: 782,
            color: "#25D9AC"
		},
		{
			id: 2,
			title: 'Total sales',
			number: 782,
            color: "#578FF3"
		},
		{
			id: 3,
			title: 'Daily ICP Volume',
			number: 782,
            color: "#9457FB"
		},
		{
			id: 4,
			title: 'Total ICP Volume',
			number: 782,
            color: "#D224F7"
		},
	];
	return (
		<Container>
			<Wrapper>
				{statistic.map((item, index) => (
					<Item key={index}> 
						<Title>{item.title}</Title>
						<Number color={item.color}>
                            {item.number}
                        </Number>
					</Item>
				))}
			</Wrapper>
		</Container>
	);
}

export default Statistic;
