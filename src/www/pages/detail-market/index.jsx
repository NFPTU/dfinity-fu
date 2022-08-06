import React, { useState, useEffect } from 'react';
import './detail-nft.css';
import { tabs } from './data';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Link, useLocation } from 'react-router-dom'
import { useCanister, useConnect } from '@connect2ic/react';
import { toast } from 'react-toastify';
import { Principal } from '@dfinity/principal';

function DetailNft() {
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

	useEffect(async() => {
		console.log(desc, principal);
		if(desc && principal && superheroes) {
			getData()
		}
	}, [principal, superheroes]);

	const getData = async () => { 
		const respo = await superheroes?.getAllOrders();
		let itemorder = respo?.ok.find(el => el?.token?.tokenId[0] == desc)
		console.log('getAllOrders', respo)
		if(itemorder) {
			setDataOrder(itemorder)
			setItemNft(itemorder?.token)
			setownerNft(itemorder?.owner.toString())
		} else {
			const resp = await superheroes?.getUserTokens(principal?.toString());
			console.log(resp);
			let item = resp?.ok.find(el => el?.tokenId[0] == desc)
			setItemNft(item)
			console.log(item);
			setownerNft(principal?.toString())
		}
	}

	useEffect(async() => {
		console.log(itemNft, itemNft?.detail?.land?.inKingdom != 0);
		if(itemNft && ownerNft == principal?.toString() && (itemNft?.detail?.queen?.inNest?.length >0 || itemNft?.detail?.nest?.inLand?.length >0 || itemNft?.detail?.land?.inKingdom > 0)) {
			setneedUn(true)
			return 
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

	const listTing = async () => {
		if(dataOrder) {
			const resp = await superheroes?.cancelOrder(Number(dataOrder?.index));
			if(resp) {
				toast("Cancel Order success")
				getData()
			}
		} else {
			if(itemNft?.detail?.queen?.inNest?.length >0 || itemNft?.detail?.nest?.inLand?.length >0 || itemNft?.detail?.land?.inKingdom > 0) {
				toast("You need unstake")
				return 
			};
			const resp = await superheroes?.createOrder(Number(desc), 10);
			if(resp) {
				toast("Create Order success")
				getData()
			}
		}
	
	}

	const unstake = async() => {
		if(itemNft?.detail?.queen) {
			const resp = await superheroes?.unStakeQueenInNest(itemNft?.tokenId[0], itemNft?.detail?.queen?.inNest[0]);
			if(resp) {
				toast("Unstake success")
			}
		} else if(itemNft?.detail?.land) {
			const resp = await superheroes?.unStakeLandToKingdom(itemNft?.tokenId[0], itemNft?.detail?.land?.inKingdom);
			if(resp) {
				toast("Unstake success")
			}
		} else if(itemNft?.detail?.nest) {
			const resp = await superheroes?.unStakeNestInLand(itemNft?.tokenId[0], itemNft?.detail?.nest?.inLand[0]);
			if(resp) {
				toast("Unstake success")
			}
		}
		setneedUn(false)
		getData()
	}

	const buyNft = async () => {
		const resp1 = await token?.approve(Principal.fromText(process.env.SUPERHEROES_CANISTER_ID), 99999999);
		console.log(resp1);
		const resp = await superheroes?.buy(Number(dataOrder?.index));
			if(resp) {
				toast("Buy success")
			}
			getData()
	}

	return (
		<div className='container'>
			<div className='wrapper'>
				<div className='wrapper__left'>
					<div className='wrapper__left-img'>
						<img
							src={itemNft?.image}
							alt='detail-nft'
						/>
					</div>
				</div>

				<div className='wrapper__right'>
					<div className='wrapper__right-header'>
						<div className='wrapper__right-header-left'>
							<div className='item-name'>{itemNft?.name}</div>
							<div className='item-id'>#{itemNft?.tokenId}</div>
						</div>

						<div className='wrapper__right-header-right'>
							<Link to="/market" style={{color: 'inherit', textDecoration: 'none'}}>
              <HighlightOffIcon sx={{color: 'white', fontSize: '40px'}}/>
              </Link>
            </div>
					</div>

					<div className='wrapper__right-listBtn'>
						{ownerNft == principal?.toString() ? <div className='wrapper__right-leftBtn' onClick={listTing}>{!dataOrder ?"Listing NFT": "Cancel listing  " + `${Number(dataOrder?.price)} ATD`}</div> : ""}
						{dataOrder && ownerNft != principal?.toString() &&<div className='wrapper__right-rightBtn'>
						
							 <div className='wrapper__right-rightBtn-title' onClick={buyNft}>
								<div className='wrapper__right-rightBtn-titleTop'>Purchase</div>
								<div className='wrapper__right-rightBtn-titleBot'>{Number(dataOrder?.price)} ATD</div>
							</div>
						</div>}
						{needUn &&<div className='wrapper__right-rightBtn'onClick={unstake} >
							 <div className='wrapper__right-rightBtn-title'>
								<div className='wrapper__right-rightBtn-titleTop'>Unstake</div>
							</div>
						</div>}
					
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
										<div className='wrapper__right-tab-item1-title'>Rarity</div>
										<div className='wrapper__right-tab-item1-detail'>
											<img
												src='https://marketplace.monsterra.io/images/rarity-icon/rare.svg'
												alt='rarity'
											/>
											<div className='wrapper__right-tab-item1-detail-name'>
												Rare
											</div>
										</div>
									</div>
								</div>
							)}

							{tab === 'history' && (
								<div className='wrapper__right-tab-item2'>
									<div className='wrapper__right-tab-item2-top'>Stats</div>

									<div className='wrapper__right-tab-item2-bottom'>
										<div>stats</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DetailNft;
