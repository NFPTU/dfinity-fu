import React, { useState, useEffect } from 'react';
import './detail-nft.css';
import { tabs } from './data';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Link, useLocation } from 'react-router-dom';
import { useCanister, useConnect } from '@connect2ic/react';
import { toast } from 'react-toastify';
import { Principal } from '@dfinity/principal';
import { GridLoader } from 'react-spinners';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import ModalLayout from './modal-layout';
import Modal from '@mui/material/Modal';
import { withContext } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { rarity_type } from '../../components/card-nft/rarity_type';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 600,
	bgcolor: '#33322f',
	border: '2px solid #000',
	boxShadow: 24,
	p: 2,
};

function DetailNft(props) {
	const { setOpenProcess } = props;

	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		if (
			itemNft?.detail?.queen?.inNest?.length >= 1 &&  itemNft?.detail?.queen?.inNest[0] !== 0 ||
			itemNft?.detail?.nest?.inLand?.length >= 1 && itemNft?.detail?.nest?.inLand[0] !== 0 ||
			itemNft?.detail?.land?.inKingdom > 0
		) {
			toast('You need unstake');
			return;
		}
		setOpen(true);
	};
	const handleClose = () => setOpen(false);

	const [tab, setTab] = useState('description');
	const [classesTabLine, setClassesTabLine] = useState('tab-line');
	const [superheroes, { loading, error }] = useCanister('superheroes');
	const [token] = useCanister('token');
	const [itemNft, setItemNft] = useState();
	const location = useLocation();
	const { principal, isConnected, disconnect } = useConnect();
	const desc = location.pathname.split('/')[2];
	const [dataOrder, setDataOrder] = useState();
	const [ownerNft, setownerNft] = useState();
	const [needUn, setneedUn] = useState(false);
	const [resourceLand, setResourceLand] = useState({});

	const [priceListing, setPriceListing] = useState('');

	const { state } = useLocation();

	const navigate = useNavigate();

	useEffect(async () => {
		if (desc && principal && superheroes) {
			getData();
		}
	}, [principal, superheroes]);

	const getData = async () => {
		const respo = await superheroes?.getAllOrders();
		let itemorder = respo?.ok.find((el) => el?.token?.tokenId[0] == desc);

		console.log('itemorder', itemorder);
		if (itemorder) {
			setDataOrder(itemorder);
			setItemNft(itemorder?.token);
			setResourceLand(itemorder?.token?.detail?.land?.resource);
			setownerNft(itemorder?.owner.toString());
		} else {
			setDataOrder()
			const resp = await superheroes?.getUserTokens(principal?.toString());
			let item = resp?.ok.find((el) => el?.tokenId[0] == desc);
			setItemNft(item);
			setResourceLand(item?.detail?.land?.resource);
			setownerNft(principal?.toString());
		}
	};

	useEffect(async () => {

		handleRarityType()
		if (
			itemNft &&
			ownerNft == principal?.toString() &&
			((itemNft?.detail?.queen?.inNest?.length >= 1 &&
				itemNft?.detail?.queen?.inNest[0] !== 0) ||
				(itemNft?.detail?.nest?.inLand?.length >= 1 &&
					itemNft?.detail?.nest?.inLand[0] !== 0) ||
				itemNft?.detail?.land?.inKingdom > 0)
		) {
			setneedUn(true);
			return;
		}
	}, [itemNft, ownerNft]);

	useEffect(() => {
		if (tab === 'description') {
			setClassesTabLine('bottom-line bottom-line-1');
		}
		if (tab === 'history') {
			setClassesTabLine('bottom-line bottom-line-2');
		}
	}, [tab]);

	const [rarityImg, setRarityImg] = useState('')

	const handleRarityType = () => {
		const ra = rarity_type?.find((item) => item.type === itemNft?.attributes[1]?.value)

		setRarityImg(ra?.src)
	}

	//Function fot listing NFT:
	const listTing = async () => {
		if (dataOrder) {
			setOpenProcess(true);
			const resp = await superheroes?.cancelOrder(Number(dataOrder?.index));
			setOpenProcess(false);
			if (resp) {
				toast('Cancel Order success');
				getData();
			}
		} else {
			if (
				itemNft?.detail?.queen?.inNest?.length >= 1 &&  itemNft?.detail?.queen?.inNest[0] !== 0||
				itemNft?.detail?.nest?.inLand?.length >= 1 && itemNft?.detail?.nest?.inLand[0] !== 0||
				itemNft?.detail?.land?.inKingdom > 0
			) {
				toast('You need unstake');
				return;
			}
			setOpenProcess(true);
			const resp = await superheroes?.createOrder(
				Number(desc),
				Number.parseInt(priceListing)
			);
			setOpenProcess(false);
			if (resp) {
				toast('Create Order success');
				getData();
				setOpen(false);
			}
		}
	};

	const unstake = async () => {
		if (itemNft?.detail?.queen) {
			setOpenProcess(true);
			const resp = await superheroes?.unStakeQueenInNest(
				itemNft?.tokenId[0],
				itemNft?.detail?.queen?.inNest[0]
			);
			setOpenProcess(false);
			if (resp) {
				toast('Unstake queen success');
			}
		} else if (itemNft?.detail?.land) {
			setOpenProcess(true);
			const resp = await superheroes?.unStakeLandToKingdom(
				itemNft?.tokenId[0],
				itemNft?.detail?.land?.inKingdom
			);
			setOpenProcess(false);
			if (resp) {
				toast('Unstake land success');
			}
		} else if (itemNft?.detail?.nest) {
			setOpenProcess(true);
			const resp = await superheroes?.unStakeNestInLand(
				itemNft?.tokenId[0],
				itemNft?.detail?.nest?.inLand[0]
			);
			setOpenProcess(false);
			if (resp) {
				toast('Unstake nest success');
			}
		}
		setneedUn(false);
		getData();
	};

	const buyNft = async () => {
		setOpenProcess(true);
		const resp1 = await token?.approve(
			Principal.fromText(process.env.SUPERHEROES_CANISTER_ID),
			99999999
		);
		const resp = await superheroes?.buy(Number(dataOrder?.index));
		setOpenProcess(false);
		if (resp) {
			toast('Buy NFT successfully !!!');
		}
		getData();
	};

	console.log('itemNft', itemNft)

	return (
		<div className='detail-market-container'>
			{!itemNft ? (
				<div>
					<GridLoader color={'#e89f01'} />
				</div>
			) : (
				<>
					<div
						className='detail-market-wrapper'
						style={{ flexDirection: 'row' }}>
						<div className='wrapper__left'>
							<div className='wrapper__left-img'>
								<img src={itemNft?.image} alt='detail-nft' />
							</div>
						</div>

						<div className='wrapper__right'>
							<div className='wrapper__right-header'>
								<div className='wrapper__right-header-left'>
									<div className='item-name'>{itemNft?.name}</div>
									<div className='item-id'>#{itemNft?.tokenId}</div>
								</div>

								<div className='wrapper__right-header-right'>
									<Link
										to={`/${state.link}`}
										style={{ color: 'inherit', textDecoration: 'none' }}>
										<HighlightOffIcon
											sx={{ color: 'white', fontSize: '40px' }}
										/>
									</Link>
								</div>
							</div>

							<div className='wrapper__right-listBtn'>
								{ownerNft == principal?.toString() ? (
									<div
										className='wrapper__right-leftBtn'
										onClick={!dataOrder ? handleOpen : listTing}>
										{!dataOrder
											? 'Listing NFT'
											: 'Cancel listing  ' + `${Number(dataOrder?.price)} ATD`}
									</div>
								) : (
									''
								)}
								{dataOrder && ownerNft != principal?.toString() && (
									<div className='wrapper__right-rightBtn'>
										<div
											className='wrapper__right-rightBtn-title'
											onClick={buyNft}>
											<div className='wrapper__right-rightBtn-titleTop'>
												Purchase
											</div>
											<div className='wrapper__right-rightBtn-titleBot'>
												{Number(dataOrder?.price)} ATD
											</div>
										</div>
									</div>
								)}
								{needUn && (
									<div className='wrapper__right-rightBtn' onClick={unstake}>
										<div className='wrapper__right-rightBtn-title'>
											<div className='wrapper__right-rightBtn-titleTop'>
												Unstake
											</div>
										</div>
									</div>
								)}
							</div>

							<div className='wrapper__right-tab-list'>
								<div className='wrapper__right-tab-nameList'>
									<div className='wrapper__right-tab-nameList-wrapper'>
										{tabs.map((item, index) => (
											<div
												onClick={() => setTab(item.type)}
												key={index}
												className={
													item.type === tab
														? 'wrapper__right-tab-nameItem tab-active'
														: 'wrapper__right-tab-nameItem'
												}>
												{item.name}
											</div>
										))}
									</div>
									<div className={classesTabLine}></div>
								</div>

								<div className='wrapper__right-tab-item'>
									{tab === 'description' && (
										<div className='wrapper__right-tab-item1'>
											<div className='wrapper__right-tab-item1-top'>About</div>

											<div className='wrapper__right-tab-item1-bottom'>
												<div className='wrapper__right-tab-item1-title'>
													Rarity
												</div>
												<div className='wrapper__right-tab-item1-detail'>
													<img
														src={rarityImg}
														alt='rarity'
													/>
													<div className='wrapper__right-tab-item1-detail-name'>
														{itemNft?.attributes[1]?.value}
													</div>
												</div>

												{itemNft?.attributes[0]?.value === 'Land' && (
													<>
														<div className='wrapper__right-tab-item1-title mt-8'>
															List resource land
														</div>
														<div className='resource__land-list'>
															<div className='resource__land-item'>
																<img
																	src='/images/navbar/icons/gold.png'
																	alt='gold'
																/>
																<div className='resource__land-value'>
																	{resourceLand?.gold}
																</div>
															</div>
															<div className='resource__land-item'>
																<img
																	src='/images/navbar/icons/soil.png'
																	alt='soil'
																/>
																<div className='resource__land-value'>
																	{resourceLand?.soil}
																</div>
															</div>
															<div className='resource__land-item'>
																<img
																	src='/images/navbar/icons/food.png'
																	alt='food'
																/>
																<div className='resource__land-value'>
																	{resourceLand?.food}
																</div>
															</div>
															<div className='resource__land-item'>
																<img
																	src='/images/navbar/icons/leaf.jpeg'
																	alt='leaf'
																/>
																<div className='resource__land-value'>
																	{resourceLand?.leaf}
																</div>
															</div>
														</div>
													</>
												)}
											</div>
										</div>
									)}

									{/* {tab === 'history' && (
										<div className='wrapper__right-tab-item2'>
											<div className='wrapper__right-tab-item2-top'>Stats</div>

											<div className='wrapper__right-tab-item2-bottom'>
												<div>stats</div>
											</div>
										</div>
									)} */}
								</div>
							</div>
						</div>
					</div>
				</>
			)}

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<ModalLayout
						src={itemNft?.image}
						handleClose={handleClose}
						listTing={listTing}>
						<div className='modal__container-body-rightTop'>
							<div className='modal__container-body-rightTop-name'>
								{itemNft?.name}
							</div>
							<div className='modal__container-body-rightTop-id'>
								#{itemNft?.tokenId}
							</div>
						</div>

						<div className='modal__container-body-rightMid'>
							<div className='modal__container-body-rightMid-left'>
								<div className='modal__container-body-rightMid-left-item'>
									Type
								</div>
								<div className='modal__container-body-rightMid-left-item'>
									Quantity
								</div>
							</div>
							<div className='modal__container-body-rightMid-right'>
								<div className='modal__container-body-rightMid-right-item'>
									{itemNft?.attributes[0]?.value}
								</div>
								<div className='modal__container-body-rightMid-right-item'>
									x1
								</div>
							</div>
						</div>

						<div className='modal__container-body-rightBottom'>
							<div className='modal__container-body-rightBottom-title'>
								Price
							</div>
							<input
								id='price'
								name='price'
								type='text'
								placeholder='Please enter price ...'
								title='Price must be greater than 0'
								label='Price'
								pattern='^[1-9][0-9]*$'
								required={true}
								onChange={(e) => setPriceListing(e.target.value)}
							/>
						</div>
					</ModalLayout>
				</Box>
			</Modal>
		</div>
	);
}

export default withContext(DetailNft);
