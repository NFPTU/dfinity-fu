import React, { useState, useEffect } from 'react';
import './detail-nft.css';
import { tabs } from './data';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Link } from 'react-router-dom'

function DetailNft() {
	const [tab, setTab] = useState('description');
	const [classesTabLine, setClassesTabLine] = useState('tab-line');

	useEffect(() => {
		if (tab === 'description') {
			setClassesTabLine('bottom-line bottom-line-1');
		}
		if (tab === 'history') {
			setClassesTabLine('bottom-line bottom-line-2');
		}
	}, [tab]);

	return (
		<div className='container'>
			<div className='wrapper'>
				<div className='wrapper__left'>
					<div className='wrapper__left-img'>
						<img
							src='https://monsterra-market.s3.ap-southeast-1.amazonaws.com/plots/breeding-2.webp'
							alt='detail-nft'
						/>
					</div>
				</div>

				<div className='wrapper__right'>
					<div className='wrapper__right-header'>
						<div className='wrapper__right-header-left'>
							<div className='item-name'>Breeding Den#1234</div>
							<div className='item-id'>#12345</div>
						</div>

						<div className='wrapper__right-header-right'>
							<Link to="/market" style={{color: 'inherit', textDecoration: 'none'}}>
              <HighlightOffIcon sx={{color: 'white', fontSize: '40px'}}/>
              </Link>
            </div>
					</div>

					<div className='wrapper__right-level'>Level 5</div>

					<div className='wrapper__right-listBtn'>
						<div className='wrapper__right-leftBtn'>Make Offer</div>
						<div className='wrapper__right-rightBtn'>
							<img
								src='https://marketplace.monsterra.io/images/token/bnb.svg'
								alt='coin img'
							/>
							<div className='wrapper__right-rightBtn-title'>
								<div className='wrapper__right-rightBtn-titleTop'>Purchase</div>
								<div className='wrapper__right-rightBtn-titleBot'>1 BNB</div>
							</div>
						</div>
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
