import React, { useState, useEffect } from 'react';
import './swap.css';
import { withContext } from '../../hooks';
import CurrencyField from './components/CurrencyField';
import { useCanister, useConnect } from '@connect2ic/react';
import Swal from 'sweetalert2';
import BeatLoader from 'react-spinners/BeatLoader';
import { Principal } from '@dfinity/principal';
import { toast } from 'react-toastify';

function Swap(props) {
	const { resource, setOpenProcess } = props;
	const [wethAmount, setWethAmount] = useState(undefined);
	const [uniAmount, setUniAmount] = useState(undefined);
	const [token] = useCanister('token');

	const [inputAmount, setInputAmount] = useState(undefined);
	const [outputAmount, setOutputAmount] = useState(undefined);

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

	const getBalance = async () => {
		const res2 = await token?.balanceOf(
			Principal.fromText(principal?.toString())
		);
		setUniAmount(Number(res2));
		setWethAmount(Number(resource?.gold));
	};

	useEffect(async () => {
		console.log(principal && token);
		if (principal && token) {
			getBalance();
		}
	}, [principal, token, resource]);

	const getSwapPrice = (inputAmount) => {
		setInputAmount(inputAmount);

		setOutputAmount(inputAmount / 10);
	};

	console.log('inputAmount', typeof Number.parseInt(inputAmount));

	const runSwap = async () => {
		if (inputAmount === '' || inputAmount === undefined) {
			toast('You must enter amount to swap !');
		} else if (Number.parseInt(inputAmount) < 0) {
			toast('Amount must be greater than 0 !');
		} else {
			setOpenProcess(true);
			try {
				const res2 = await superheroes.swapGoldToToken(Number(inputAmount));
			} catch (err) {
				console.log(err);
				setOpenProcess(false);
			}
			setOpenProcess(false);
			toast('Swap successfully !!!');
		}
	};

	return (
		<div className='container'>
			<div className='wrapper'>
				<div className='appBody'>
					<div className='swapContainer'>
						<div className='swapHeader'>
							<span className='swapText'>Swap</span>
						</div>

						<div className='swapBody'>
							<CurrencyField
								field='input'
								tokenName='Gold'
								getSwapPrice={getSwapPrice}
								balance={wethAmount}
							/>
							<CurrencyField
								field='output'
								tokenName='ATD'
								value={outputAmount}
								balance={uniAmount}
								spinner={BeatLoader}
							/>
						</div>

						<div className='ratioContainer'>
							{ratio && <>{`1 ATD = ${ratio} Gold`}</>}
						</div>

						<div className='swapButtonContainer'>
							<div onClick={runSwap} className='swapButton'>
								Swap
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default withContext(Swap);