import React, { useState, useEffect } from 'react';
import './market.css';
import { Search, Landscape } from '@mui/icons-material/';
import { tabs, rarity } from './data';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import NewCard from '../../components/test/new-card';
import { useCanister, useConnect } from '@connect2ic/react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

function Market() {
	const [tab, setTab] = useState('lands');
	const [classesTabLine, setClassesTabLine] = useState('tab-line');
	const [queenNFT, setQueenNFT] = useState({});
	const [data, setData] = useState([]);
	const [superheroes, { loading, error }] = useCanister('superheroes');
	const { principal, isConnected, disconnect } = useConnect();

	const listCard = Array.from(Array(6).keys());

	useEffect(() => {
		if (tab === 'lands') {
			setClassesTabLine('tab-line tab-line-1');
		}
		if (tab === 'nests') {
			setClassesTabLine('tab-line tab-line-2');
		}
		if (tab === 'queen') {
			setClassesTabLine('tab-line tab-line-3');
		}
		if (tab === 'ants') {
			setClassesTabLine('tab-line tab-line-4');
		}
	}, [tab]);

	return (
		<div className='container'>
			<div className='wrapper'>
				<div className='tabs-list'>
					<div className='tabs-list-wrapper'>
						{tabs.map((item, index) => (
							<div
								onClick={() => setTab(item.type)}
								key={index}
								className={
									item.type === tab ? 'tab-item tab-itemActive' : 'tab-item'
								}>
								<img src={item.icon} alt='' />
								<div className='tab-item-name'>{item.name}</div>
							</div>
						))}
					</div>
					<div className={classesTabLine}></div>
				</div>

				<div className='body'>
					<div className='body__left'>
						<div className='filter__top'>
							<div className='filter__top-title'>
								<img
									src='https://marketplace.monsterra.io/images/filter-icon.svg'
									alt=''
								/>
								<p>Filter</p>
							</div>

							<div className='filter__top-clear'>Clear Filter</div>
						</div>

						<div className='filter__item'>
							<div className='filter__item-input'>
								<input placeholder='Search by ID' name='id' type='text' />
								<Search sx={{ color: '#e1e2e9', marginRight: '10px' }} />
							</div>
						</div>

						<div className='filter__item'>
							<select name='options' id='options'>
								<option value='recently_added'>Recently Added</option>
								<option value='highest_price'>Highest Price</option>
								<option value='lowest_price'>Lowest Price</option>
							</select>
						</div>

						<div className='filter__item'>
							<div className='filter__item-checkbox'>
								<div className='filter__item-checkbox-title'>Rarity</div>
								<div className='filter__item-checkbox-list'>
									{rarity.map((item, index) => (
										<div key={index} className='filter__item-checkbox-item'>
											<input type='checkbox' id={item.type} name={item.type} />
											<label for={item.type}>{item.name}</label>
										</div>
									))}
								</div>
							</div>
						</div>

						<div className='filter__item'>
							<div className='filter__item-checkbox'>
								<div className='filter__item-checkbox-title'>Rarity</div>
								<div className='filter__item-checkbox-list'>
									{rarity.map((item, index) => (
										<div key={index} className='filter__item-checkbox-item'>
											<input type='checkbox' id={item.type} name={item.type} />
											<label for={item.type}>{item.name}</label>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					<div className='body__right'>
						<div className='body__right-top'>
							<div className='body__right-top-item'>
								<p>Owned</p>
								<label class='switch'>
									<input type='checkbox' />
									<span class='slider'></span>
								</label>
							</div>

							<div className='body__right-top-item'>
								<p>My Offers</p>
								<label className='switch'>
									<input type='checkbox' />
									<span className='slider'></span>
								</label>
							</div>
						</div>

						<div className='body__right-top-card'>
							{listCard.map((item, index) => (
								<Link to={`/detail/ds86bdd7sns`} style={{color: 'inherit', textDecoration: 'none'}}>
									<div className='body__right-top-cardItem'>
										<NewCard width='244' height='380' />
									</div>
								</Link>
							))}
						</div>

						<div className='pagination'>
							<Pagination
								count={10}
								color='secondary'
								shape='rounded'
								// variant='outlined'
								renderItem={(item) => (
									<PaginationItem
										style={{ color: 'white' }}
										components={{
											previous: ArrowBackIcon,
											next: ArrowForwardIcon,
										}}
										{...item}
									/>
								)}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Market;
