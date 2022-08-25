import React, { useState, useEffect } from 'react';
import './swap.css';
import { withContext } from '../../hooks';
import CurrencyField from './components/CurrencyField';
import { useCanister, useConnect } from '@connect2ic/react';
import Swal from 'sweetalert2';
import BeatLoader from 'react-spinners/BeatLoader';
import { Principal } from '@dfinity/principal';
import { toast } from 'react-toastify';
import { roundToTwoDecimal } from '../../utils/utils';

function Swap(props) {
	const { resource, setOpenProcess } = props;
	const [wethAmount, setWethAmount] = useState('');
	const [uniAmount, setUniAmount] = useState('');
	const [token] = useCanister('token');

	const [inputAmount, setInputAmount] = useState('');
	const [outputAmount, setOutputAmount] = useState('');

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

	const getSwapPrice = (e) => {
		const inputNumber = Number.parseInt(e.key);
		console.log("=====e=====", e.code, inputAmount.length);
		
		if (
			Number.parseInt(inputNumber) > 0 &&
			Number.parseInt(inputNumber) <= wethAmount
		) {
			if(Number.parseInt(inputAmount + inputNumber) <= wethAmount) {
				console.log(inputNumber);
				setInputAmount(inputAmount + inputNumber);
				setOutputAmount((Number.parseFloat(inputAmount + inputNumber) / 10).toFixed(2));
			} else {
				setInputAmount(wethAmount.toString());
				setOutputAmount((wethAmount / 10).toFixed(2));
			}
		}else if(e.code == "Period" && !inputAmount.includes(".")){
			setInputAmount(inputAmount + ".");

		}else if(e.code == "Backspace" && inputAmount.length > 0){
			setInputAmount(inputAmount.substring(0, inputAmount.length - 1))
			setOutputAmount((inputAmount.substring(0, inputAmount.length - 1) / 10).toFixed(2));

		}

	};

	const runSwap = async () => {
		setOpenProcess(true);
		try {
			const res2 = await superheroes.swapGoldToToken(Number(inputAmount));
			console.log(inputAmount);
			setOpenProcess(false);
			toast('Swap successfully !!!');
		} catch (err) {
			console.log(err);
			setOpenProcess(false);
		}
		setInputAmount(0);
		setOutputAmount(0);
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
								value={inputAmount}
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
