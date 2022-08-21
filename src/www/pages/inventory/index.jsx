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
import { Link, useNavigate } from 'react-router-dom';
import { withContext } from '../../hooks';
import { GridLoader } from 'react-spinners';
import useDebounce from '../market/hooks';
import { Cancel } from '@mui/icons-material';
import ClipLoader from 'react-spinners/ClipLoader';

function Inventory(props) {
	const { data } = props;

	let navigate = useNavigate();

	const [tab, setTab] = useState('Land');
	const [classesTabLine, setClassesTabLine] = useState('tab-line');

	//const [data, setData] = useState([]);
	const [filterData, setFilterData] = useState([]);
	const [pageData, setPageData] = useState([]);

	const [filterDataOrigin, setFilterDataOrigin] = useState([]);

	const [page, setPage] = useState(1);

	const [checked, setChecked] = useState([]);

	const [inputSearch, setInputSearch] = useState('');
	const [loadingSearch, setLoadingSearch] = useState(false);

	const [typeSortPrice, setTypeSortPrice] = useState('lowestPrice');

	const [filterSearchData, setFilterSearchData] = useState([]);

	const [superheroes, { loading, error }] = useCanister('superheroes');
	const { principal, isConnected, disconnect } = useConnect();

	const debounced = useDebounce(inputSearch, 500);

	const handleClickCancel = () => {
		setInputSearch('');
	};

	const handleInputChange = (e) => {
		const searchValue = e.target.value;

		if (!searchValue.startsWith(' ')) {
			setInputSearch(searchValue);
		}
	};

	const handleSortPrice = (e) => {
		setTypeSortPrice(e.target.value);
	};


	// //Filter by search id:
	useEffect(() => {
		let mounted = true;
		const data = getNFTByType(tab);

		if (mounted) {
			const handleSearch = async () => {
				setLoadingSearch(true);

				const filterById = filterDataOrigin.filter((item) =>
					item?.tokenId[0]
						.toString()
						.toLowerCase()
						.includes(debounced.toLowerCase())
				);

				if(filterById){
					setFilterData(filterById)
					setFilterSearchData(filterById)
				}else{
					setFilterData(data);
					setFilterSearchData(data)
				}

				setTimeout(() => {
					setLoadingSearch(false);
				}, 500);
			};

			handleSearch();
		}

		return () => (mounted = false);
	}, [debounced]);

	const handleClickCard = (tokenId) => {
		navigate(`/detail/${tokenId}`, {
			state: {
				link: 'inventory',
			},
		});
	};

	//================ Function =====================

	const clearFilter = () => {
		setChecked([]);
	};
	//===============================================

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
	}, [filterData, numberNftPerPage, page, tab, filterDataOrigin]);

	//===============================================
	//=============== HANDLE NFT ====================

	//Filter NFT by type
	const getNFTByType = (type) => {
		const listNFT = data?.filter((el) => {
			return el.attributes[0].value === type;
		});
		return listNFT;
	};


	//Get list NFT by type:
	const onGetDataByType = () => {
		const data = getNFTByType(tab);

		setFilterData(data);
		setFilterDataOrigin(data);
	};

	//===================== SIDE EFFECT =======================

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
	}, [tab]);

	//=======================================================

	const handleChangeTab = (item) => {
		setTab(item);
		sessionStorage.setItem('tabItemInventory', item);
	};

	useEffect(() => {
		let mounted = true
		if (mounted) {
			const tab = sessionStorage.getItem('tabItemInventory');
			if (tab) {
				setTab(tab);
			} else {
				sessionStorage.setItem('tabItemInventory', 'Land');
				setTab('Land');
			}
		}

		return () => mounted = false;
	})

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


	//Filter data by rarity checkbox:
	useEffect(() => {
		let mounted = true;
		let newArr = [];
		const data = getNFTByType(tab);

		if (mounted) {
			const getDataByFilter = () => {
				for (const key of checked) {
					const arrFilter = filterSearchData.filter(
						(item) => item?.attributes[1]?.value === key
					);

					if (arrFilter.length !== 0) {
						newArr.push(arrFilter);
					}
				}

				return newArr.flat();
			};

			const filterByRarity = getDataByFilter();

			checked.length !== 0
				? setFilterData(filterByRarity)
				: setFilterData(filterSearchData);
		}

		return () => (mounted = false);
	}, [superheroes, principal, checked]);

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
									item.type === tab
									// sessionStorage.getItem('tabItemIventory')
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

							<div onClick={clearFilter} className='filter__top-clear'>
								Clear Filter
							</div>
						</div>
						
						<div className='filter__item'>
							<div className='filter__item-input'>
								<input
									value={inputSearch}
									onChange={handleInputChange}
									placeholder='Search by ID'
									name='id'
									type='text'
								/>
								{inputSearch && !loadingSearch && (
									<Cancel
										onClick={handleClickCancel}
										sx={{ fontSize: '14px', color: 'white' }}
									/>
								)}
								{loadingSearch && (
									<ClipLoader color='grey' loading={true} size={14} />
								)}
								<Search sx={{ color: 'white', marginRight: '10px' }} />
							</div>
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

						{/* <div className='filter__item'>
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
						</div> */}
					</div>

					<div
						className={
							!loading ? 'body__right' : 'body__right body__right-loading'
						}>
						{loading ? (
							<div>
								<GridLoader color={'#e89f01'} />
							</div>
						) : (
							<>
								<div className='body__right-top-card'>
									{data ? (
										pageData?.map((item, index) => (
											<div
												onClick={() => handleClickCard(item?.tokenId[0])}
												className='body__right-top-cardItem'>
												<NewCard
													link='inventory'
													width='230'
													height='360'
													data={item}
												/>
											</div>
										))
									) : (
										<div style={{ color: 'white', fontSize: '20px' }}>
											There are currently no products, please come back later
											!!!
										</div>
									)}
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
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default withContext(Inventory);
