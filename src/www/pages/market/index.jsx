import React, { useState, useEffect } from 'react';
import './market.css';
import { tabs, rarity } from './data';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import NewCard from '../../components/test/new-card';
import { useCanister, useConnect } from '@connect2ic/react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Stack from '@mui/material/Stack';
import { withContext } from '../../hooks';
import { GridLoader } from 'react-spinners';
import { Link, useNavigate } from 'react-router-dom';

function Market(props) {
	const { tabGameHeader, marketData } = props;

	let navigate = useNavigate();

	const [tab, setTab] = useState('Land');
	const [classesTabLine, setClassesTabLine] = useState('tab-line');

	const [filterData, setFilterData] = useState([]);
	const [pageData, setPageData] = useState([]);

	const [filterDataOrigin, setFilterDataOrigin] = useState([]);

	const [page, setPage] = useState(1);

	const [isOwned, setIsOwned] = useState(true);

	const [checked, setChecked] = useState([]);

	const [dataOrder, setDataOrder] = useState();

	const [superheroes, { loading, error }] = useCanister('superheroes');
	const { principal, isConnected, disconnect } = useConnect();

	const handleClickCard = (tokenId) => {
		navigate(`/detail/${tokenId}`, {
			state: {
				link: 'market'
			},
		});
	};

	const handleClickTab = (value) => {
		setTab(value);
		sessionStorage.setItem('tabFooterActive', 'Kingdom');
	};

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
			if (isOwned) {
				setPageData(
					newData?.filter((data) => data?.owner?._isPrincipal === true)
				);
			} else {
				setPageData(
					newData?.filter((data) => data?.owner?._isPrincipal === false)
				);
			}
		}
	}, [superheroes, principal, filterData, isOwned, numberNftPerPage, page, tab, tabGameHeader, filterDataOrigin]);

	//===============================================

	//================ Function =====================
	const handleChangeOwned = (e) => {
		setIsOwned(e.target.checked);
	};

	const clearFilter = () => {
		setIsOwned(true);
		setChecked([]);
	};
	//===============================================

	//Get All NFT
	// const onGetAllOrders = async () => {
	// 	const respo = await superheroes?.getAllOrders();
	// 	let itemorder = respo?.ok.find((el) => el?.token?.tokenId[0] == desc);
	// };

	//Filter NFT by type
	const getNFTByType = (type) => {
		if (marketData) {
			const listNFT = marketData?.filter((el) => {
				return el?.token?.attributes[0]?.value === type;
			});
			return listNFT;
		}
	};

	//Get list NFT by type:
	const onGetDataByType = () => {
		const data = tab && getNFTByType(tab);

		setFilterData(data && data);
		setFilterDataOrigin(data && data);
	};

	useEffect(() => {
		onGetDataByType();
	}, [superheroes, principal, tab]);

	useEffect(() => {
		if (tab === 'Land') {
			setClassesTabLine('tab-line tab-line-market-1');
		}
		if (tab === 'Nest') {
			setClassesTabLine('tab-line tab-line-market-2');
		}
		if (tab === 'Queen') {
			setClassesTabLine('tab-line tab-line-market-3');
		}
	}, [tab]);

	const handleToggle = (value) => {
		const currentIndex = checked?.indexOf(value);
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
					const arrFilter = filterDataOrigin?.filter(
						(item) => item?.token?.attributes[1]?.value === key
					);

					if (arrFilter?.length !== 0) {
						newArr.push(...arrFilter);
					}
				}

				return newArr;
			};

			const filterByRarity = checked && getDataByFilter();

			checked?.length !== 0
				? setFilterData(filterByRarity)
				: setFilterData(data);
		}

		return () => (mounted = false);
	}, [superheroes, principal, checked, filterDataOrigin]);


	return (
		<div className='market-container'>
			<div className='market-wrapper'>
				<div className='tabs-list'>
					<div className='tabs-list-wrapper'>
						{tabs.map((item, index) => (
							<div
								onClick={() => handleClickTab(item.type)}
								key={index}
								className={
									item.type === tab
										? 'tab-market-item tab-market-itemActive'
										: 'tab-market-item'
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

						{/* <div className='filter__item'>
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
						</div> */}

						<div className='filter__itemMarket'>
							<div className='filter__itemMarket-checkbox'>
								<div className='filter__itemMarket-checkbox-title'>Rarity</div>
								<div className='filter__itemMarket-checkbox-list'>
									{rarity.map((item, index) => (
										<div key={index} className='filter__itemMarket-checkbox-item'>
											<input
												type='checkbox'
												id={item.type}
												name={item.type}
												onChange={() => handleToggle(item.name)}
												checked={
													checked?.indexOf(item.name) === -1 ? false : true
												}
											/>
											<label htmlFor={item.type}>{item.name}</label>
										</div>
									))}
								</div>
							</div>
						</div>
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
								<div className='body__right-top'>
									<div className='body__right-top-item'>
										<p>Owned</p>
										<label className='switch'>
											<input
												type='checkbox'
												checked={isOwned}
												onChange={(e) => handleChangeOwned(e)}
											/>
											<span className='slider'></span>
										</label>
									</div>
									{/* <div className='body__right-top-item'>
								<p>My Offers</p>
								<label className='switch'>
									<input type='checkbox' />
									<span className='slider'></span>
								</label>
							</div> */}
								</div>

								<div className='body__right-top-card'>
									{marketData &&
										(pageData?.length !== 0 ? (
											pageData?.map((item, index) => {
											
												return (
													<div 
													onClick={() => handleClickCard(item?.token?.tokenId[0])}
													className='body__right-top-cardItem'>
														<NewCard
															link='market'
															width='244'
															height='380'
															data={item?.token}
															price={Number(item?.price)}
														/>
													</div>
												)
											})
										) : (
											<div style={{ color: 'white', fontSize: '20px' }}>
												There are currently no products, please come back later
												!!!
											</div>
										))}
								</div>

								{pageData?.length !== 0 && (
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
								)}
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default withContext(Market);
