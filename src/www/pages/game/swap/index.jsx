import React, { useState, useEffect } from 'react';
import CurrencyField from './components/CurrencyField';
import { useCanister, useConnect } from '@connect2ic/react';
import { getRemainingTime, toHHMMSS } from '../../../utils/utils';
import Countdown from "react-countdown";
import Swal from 'sweetalert2'
import { withContext } from '../../../hooks';
import CardNft from '../../../components/card-nft';
import BeatLoader from "react-spinners/BeatLoader";
import { Principal } from '@dfinity/principal';
import './style.css'
import {

	Container,
	Wrapper,
} from './breeding.elements';

function Swap(props) {
	const { resource, setOpenProcess } = props;
	const [wethAmount, setWethAmount] = useState(undefined)
	const [uniAmount, setUniAmount] = useState(undefined)
	const [token] = useCanister('token');

	const [inputAmount, setInputAmount] = useState(undefined)
	const [outputAmount, setOutputAmount] = useState(undefined)

	const ratio = 10;

	const [superheroes, { loading, error }] = useCanister('superheroes');

	const {
		principal,
		isConnected,
		disconnect,
		activeProvider,
		isIdle,
		connect,
		isConnecting,
	} = useConnect();

	const getBalance = async  () => {
		const res2 = await token?.balanceOf(Principal.fromText(principal?.toString()));
		setUniAmount(Number(res2));
		setWethAmount(Number(resource?.gold))
	}

	useEffect(async () => {
		console.log(principal && token);
		if (principal && token) {
			getBalance()
		}
	}, [principal, token, resource]);

	const getSwapPrice = (inputAmount) => {
		setInputAmount(inputAmount)

		setOutputAmount(inputAmount / 10)
	}

	const runSwap = async () => {
		setOpenProcess(true);
		try {
			const res2 = await superheroes.swapGoldToToken(Number(inputAmount));
			console.log(res2);
		} catch(er) {
			console.log(er);
			setOpenProcess(false);
		}
		setOpenProcess(false);
	}
	return (
		<>
			<Container>
				<Wrapper>
					<div className="appBody">
						<div className="swapContainer">
							<div className="swapHeader">
								<span className="swapText">Swap</span>
							</div>

							<div className="swapBody">
								<CurrencyField
									field="input"
									tokenName="Gold"
									getSwapPrice={getSwapPrice}
									balance={wethAmount} />
								<CurrencyField
									field="output"
									tokenName="ATD"
									value={outputAmount}
									balance={uniAmount}
									spinner={BeatLoader} />
							</div>

							<div className="ratioContainer">
								{ratio && (
									<>
										{`1 ATD = ${ratio} Gold`}
									</>
								)}
							</div>

							<div className="swapButtonContainer">
								<div
									onClick={runSwap}
									className="swapButton"
								>
									Swap
								</div>
							</div>

						</div>
					</div>
				</Wrapper>
			</Container>
		</>
	);
}

export default withContext(Swap)
