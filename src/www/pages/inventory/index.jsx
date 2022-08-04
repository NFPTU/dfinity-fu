import React, { useState, useEffect } from 'react';
import './inventory.css';
import { Search, Landscape } from '@mui/icons-material';
import { tabs, rarity } from './data';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import NewCard from '../../components/test/new-card';
import { useCanister, useConnect } from '@connect2ic/react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

function Inventory() {
	const [tab, setTab] = useState('Land');
	const [classesTabLine, setClassesTabLine] = useState('tab-line');

	const [data, setData] = useState([]);
	const [filterData, setFilterData] = useState([]);
	const [pageData, setPageData] = useState([]);

	const [page, setPage] = useState(1);

	const [checked, setChecked] = useState([]);

	const [superheroes, { loading, error }] = useCanister('superheroes');
	const { principal, isConnected, disconnect } = useConnect();

	const tabItemHeader = JSON.parse(localStorage.getItem('tabItemHeader'));
	const tabItemIventory = JSON.parse(localStorage.getItem('tabItemIventory'));

	//=============== PAGINATION ===================
	const numberNftPerPage = 8;
	const numberPage = Math.ceil(filterData?.length / numberNftPerPage);

	const handleChangePagination = (event, value) => {
		setPage(value);
	};

	useEffect(() => {
		const indexOfLastNFT = page * numberNftPerPage;
		const indexOfFirstNFT = indexOfLastNFT - numberNftPerPage;
		if (page >= 1) {
			const newData = filterData?.slice(indexOfFirstNFT, indexOfLastNFT);
			setPageData(newData);
		}
	}, [filterData, numberNftPerPage, page, tab]);

	console.log('pageData', pageData);

	//===============================================
	//=============== HANDLE NFT ====================

	//Filter NFT by type
	const getNFTByType = (type) => {
		const listNFT = data?.filter((el) => {
			return el.attributes[0].value === type;
		});
		return listNFT;
	};

	//Get All NFT
	const onGetData = async () => {
		const resp = await superheroes?.getUserTokens(principal?.toString());
		setData(resp?.ok);
	};

	//Get list NFT by type:
	const onGetDataByType = () => {
		const data = getNFTByType(tab);

		setFilterData(data);
	};
	//=======================================================

	const handleChangeTab = (item) => {
		setTab(item);
		const tabItem = JSON.stringify(item);
		localStorage.setItem('tabItemInventory', tabItem);
	};

	const handleToggle = (value) => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	useEffect(() => {
		const getDataByFilter = () => {
			for (let i = 0; i < checked?.length; i++) {
				
			}
		}

		getDataByFilter()
	}, [filterData, checked]);

	//===================== SIDE EFFECT =======================
	useEffect(() => {
		onGetData();
	}, [superheroes, principal]);

	useEffect(() => {
		onGetDataByType();
	}, [superheroes, principal, tab]);

	useEffect(() => {
		if (tab === 'Land') {
			setClassesTabLine('tab-line tab-line-1');
		}
		if (tab === 'Nest') {
			setClassesTabLine('tab-line tab-line-2');
		}
		if (tab === 'Queen') {
			setClassesTabLine('tab-line tab-line-3');
		}
		if (tab === 'Worker') {
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
								onClick={() => handleChangeTab(item.type)}
								key={index}
								className={
									item.type ===
									JSON.parse(localStorage.getItem('tabItemIventory'))
										? 'tab-item tab-itemActive'
										: 'tab-item'
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
											<input
												type='checkbox'
												id={item.type}
												name={item.type}
												onChange={() => handleToggle(item.name)}
												checked={
													checked.indexOf(item.name) === -1 ? false : true
												}
											/>
											<label htmlFor={item.type}>{item.name}</label>
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
											<label htmlFor={item.type}>{item.name}</label>
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
								<label className='switch'>
									<input type='checkbox' />
									<span className='slider'></span>
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
							{pageData?.map((item, index) => (
								<Link
									to={`/detail/${item?.tokenId[0]}`}
									style={{ color: 'inherit', textDecoration: 'none' }}>
									<div className='body__right-top-cardItem'>
										<NewCard width='230' height='360' data={item} />
									</div>
								</Link>
							))}
						</div>

						<div className='pagination'>
							<Pagination
								count={numberPage}
								page={page}
								onChange={handleChangePagination}
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

export default Inventory;
