import React, { useState, useEffect } from 'react';
import './game-header.css';
import { Notifications, Logout } from '@mui/icons-material';
import { tabs } from './data';
import Tooltip from '@mui/material/Tooltip';

function GameHeader() {
	const [tab, setTab] = useState('market');
	const [isCopied, setIsCopied] = useState(false);

	const handleCopyToClipboard = () => {
		navigator.clipboard.writeText('test copy 1');

		setIsCopied(true);

		const timerId = setTimeout(() => {
			setIsCopied(false);
		}, 1000);

		return () => clearTimeout(timerId);
	};

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
							<div
								onClick={() => setTab(item.type)}
								key={key}
								className={
									item.type === tab
										? 'header__wrapper-item header__wrapper-itemActive'
										: 'header__wrapper-item'
								}>
								{item.name}
							</div>
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
							{isCopied ? 'Copied ✓' : '0xe23...eefc'}
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

export default GameHeader;
