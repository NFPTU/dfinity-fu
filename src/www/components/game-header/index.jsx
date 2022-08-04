import React, { useState, useEffect } from 'react';
import './game-header.css';
import { Notifications, Logout } from '@mui/icons-material';
import { tabs } from './data';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { useCanister, useConnect } from '@connect2ic/react';
import { withContext } from '../../hooks'

function GameHeader(props) {
	const { tabGameHeader, setTabGameHeader } = props

	const [isCopied, setIsCopied] = useState(false);

	const { principal } = useConnect();
	const walletIdBefore = principal?.toString()?.slice(0, 4);
	const walletIdAfter = principal?.toString()?.slice(60, 63);
	const walletId = walletIdBefore?.concat(`...${walletIdAfter}`);

	const handleCopyToClipboard = () => {
		navigator.clipboard.writeText(walletId);

		setIsCopied(true);

		const timerId = setTimeout(() => {
			setIsCopied(false);
		}, 1000);

		return () => clearTimeout(timerId);
	};

	const handleChangeTabItem = (item) => {
		setTabGameHeader(item)
	}

	return (
		<div className='header'>
			<div className='header__wrapper'>
				<div className='header__wrapper-left'>
					<img
						src='https://marketplace.monsterra.io/images/logo-game.png'
						alt='logo'
					/>

					<div className='header__wrapper-list'>
						{tabs.map((item, key) => (
							<Link
								to={item.link}
								style={{ color: 'inherit', textDecoration: 'none' }}>
								<div
									onClick={() => handleChangeTabItem(item.type)}
									key={key}
									className={
										item.type === tabGameHeader
											? 'header__wrapper-item header__wrapper-itemActive'
											: 'header__wrapper-item'
									}>
									{item.name}
								</div>
							</Link>
						))}
					</div>
				</div>

				<div className='header__wrapper-right'>
					<div className='header__wrapper-noti'>
						<Tooltip title='Notification'>
							<Notifications sx={{ width: '25px' }} />
						</Tooltip>
					</div>

					<div className='header__wrapper-balance'>
						<span>0</span>
						<img
							src='https://marketplace.monsterra.io/images/rune2.png'
							alt='logo-token'
						/>
					</div>

					<div className='header__wrapper-account'>
						<span className={isCopied && 'text-copied'}>
							{isCopied ? 'Copied ✓' : (!principal ? '########' : walletId)}
						</span>
						<img
							className={isCopied && 'img-copied'}
							onClick={handleCopyToClipboard}
							src='https://marketplace.monsterra.io/images/copy.svg'
							alt='copy-icon'
						/>
					</div>

					<div className='header__wrapper-noti header__wrapper-noti-logout'>
						<Tooltip title='Logout'>
							<Logout sx={{ width: '25px' }} />
						</Tooltip>
					</div>
				</div>
			</div>
		</div>
	);
}

export default withContext(GameHeader);
