import React, { useState, useEffect } from 'react';
import Context from './Context';
import reducer, { initState } from './reducer';
import { superheroes } from '../../declarations';
import { customAxios } from '../utils/custom-axios';
import { useConnect, useCanister  } from '@connect2ic/react';
import ProcessModal from '../components/process-modal';
import { useNavigate } from 'react-router-dom';
import { Principal } from '@dfinity/principal';


export function Provider({ children }) {
	const [prinpId, setprinpId] = useState(localStorage.getItem('prinpId'));
	const { principal, isConnected } = useConnect();
	const [resource, setResource] = useState({});
	const [openProcess, setopenProcess] = useState(false);
	const [tabGameHeader, setTabGameHeader] = useState('market');
	const [tabMarketFooter, setTabMarketFooter] = useState('Kingdom');
	const [data, setData] = useState([]);
	const [marketData, setMarketData] = useState([]);
	const navigate = useNavigate();

	//State to check unstake breeding:
	const [completedCountBreeding, setCompletedCountBreeding] = useState(false);
	const [completedCountFarming, setCompletedCountFarming] = useState(false);
	const [cardSelectedBreeding, setCardSelectedBreeding] = useState();

	//Get All NFT
	const onGetData = async () => {
		const resp = await superheroes?.getUserTokens(principal?.toString());
		setData(resp?.ok);
	};

	//get list NFT in market:
	const onGetAllOrders = async () => {
		const resp = await superheroes?.getAllOrders();
		setMarketData(resp?.ok);
	};

	const setPrinpId = (value) => {
		localStorage.setItem('prinpId', value);
		setprinpId(value);
	};

	const logout = () => {
		console.log('logout');
		setprinpId();
		localStorage.clear();
		navigate('/login');
	};

	//Get user info (resource)
	const getUserInfo = async () => {
		const res = await superheroes.getUserInfo(principal?.toString());
		console.log('user', res);
		setResource(res?.userState?.resource);
	};

	const setOpenProcess = async (value) => {
		if (!value) {
			await getUserInfo();
			await getBalance();
		}
		setopenProcess(value);
	};

	useEffect(() => {
		if(superheroes && principal) {
			onGetData();
			onGetAllOrders();
			localStorage.getItem('CompletedCountBreeding') ? setCompletedCountBreeding(JSON.parse(localStorage.getItem('CompletedCountBreeding'))) : '';
			localStorage.getItem('CompletedCountFarming') ? setCompletedCountFarming(JSON.parse(localStorage.getItem('CompletedCountFarming'))) : '';
		}
		
	}, [superheroes, principal]);

	useEffect(() => {
		if (principal) {
			getUserInfo();
		}
	}, [principal]);
	const [token] = useCanister('token');

	useEffect(async () => {
		if (principal && token) {
			getBalance()
		}
	}, [principal, token]);

	const [balance, setbalance] = useState(0);


	const getBalance = async () => {
		const res2 = await token.balanceOf(Principal.fromText(principal?.toString()));
		setbalance(res2)
	}

	const value = {
		prinpId,
		setPrinpId,
		logout,
		getUserInfo,
		resource,
		openProcess,
		setOpenProcess,
		tabGameHeader,
		setTabGameHeader,
		data,
		tabMarketFooter,
		setTabMarketFooter,
		marketData,
		onGetData,
		onGetAllOrders,
		balance,
		getBalance,
		completedCountBreeding,
		setCompletedCountBreeding,
		cardSelectedBreeding,
		setCardSelectedBreeding,
		setCompletedCountFarming,
		completedCountFarming
	};
	return (
		<Context.Provider value={value}>
			{children}
			<ProcessModal open={openProcess} setOpen={setOpenProcess} />
		</Context.Provider>
	);
}

export function useUIContext() {
	return useContext(Context);
}

export const withContext = (Component) => {
	return (props) => {
		return (
			<Context.Consumer>
				{(globalState) => {
					return <Component {...globalState} {...props} />;
				}}
			</Context.Consumer>
		);
	};
};
