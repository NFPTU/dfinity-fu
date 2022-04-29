import React, { useState } from 'react';
import { idlFactory } from '../../../declarations/superheroes.did.js';
import {
	Search,
	AccountCircleOutlined,
	AccountBalanceWalletOutlined,
} from '@mui/icons-material';
import {
	Container,
	Logo,
	LogoWrapper,
	Menu,
	MenuItem,
	Name,
	Option,
	OptionItem,
	OptionWrapper,
	Right,
	SearchInput,
	SearchWrapper,
	WalletAddress,
	Balance,
	BalanceNumber,
	IcpLogo,
} from './navbar-elements';
import { Link } from 'react-router-dom'

function Navbar() {
	const [prinpId, setPrinpId] = useState();

	const walletAddress = prinpId?.toString();

	const onConnectWallet = async () => {
		try {
			const publicKey = await window.ic.plug.requestConnect({
			});
			const NNSUiActor = await window.ic.plug.createActor({
				canisterId: process.env.SUPERHEROES_CANISTER_ID,
				interfaceFactory: idlFactory,
			});

			const princi = await window.ic.plug.agent.getPrincipal();
			setPrinpId(princi);

			console.log(`The connected user's public key is:`, publicKey);
		} catch (e) {
			console.log(e);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	return (
		<Container>
			<LogoWrapper>
			<Link to="/" style={{color: 'black'}}>
				<Logo
					src='https://motoko-lsp-client.gallerycdn.vsassets.io/extensions/motoko-lsp-client/motoko-lsp-client/2.2.0/1583876431744/Microsoft.VisualStudio.Services.Icons.Default'
					alt=''
					onClick={scrollToTop}
				/>
				</Link>
				<Name>NFPTU</Name>
			</LogoWrapper>

			<Right>
				<SearchWrapper>
					<Search style={{ color: '#gray' }} />
					<SearchInput placeholder='Search items, collections, and accounts' />
				</SearchWrapper>

				<OptionWrapper>
					<Menu>
						<Link to="/" style={{color: 'black'}} onClick={scrollToTop}> 
						<MenuItem>Home</MenuItem>
						</Link>
						<Link to="/nft/detail" style={{color: 'black'}}>
						<MenuItem>Stats</MenuItem>
						</Link>
						<Link to="nft/create" style={{color: 'black'}}> 
						<MenuItem>Create</MenuItem>
						</Link>
					</Menu>

					<Option>
						<OptionItem>
							<AccountCircleOutlined fontSize='large' />
						</OptionItem>
						{!prinpId ? (
							<OptionItem onClick={onConnectWallet}>
								<AccountBalanceWalletOutlined fontSize='large' />
							</OptionItem>
						) : (
							<>
								<OptionItem>
									<WalletAddress>
										{walletAddress.slice(0, 3)} ... {walletAddress.slice(60, 63)}
									</WalletAddress>
								</OptionItem>

								<OptionItem>
									<Balance>
										<BalanceNumber>0</BalanceNumber>
										<IcpLogo
											src='https://cryptologos.cc/logos/internet-computer-icp-logo.png'
											alt=''
										/>
									</Balance>
								</OptionItem>
							</>
						)}
					</Option>
				</OptionWrapper>
			</Right>
		</Container>
	);
}

export default Navbar;
