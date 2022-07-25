import React, { useState, useEffect } from 'react';
import Context from './Context';
import reducer, { initState } from './reducer';
import { superheroes } from '../../declarations';
import { customAxios } from '../utils/custom-axios';
import { useConnect } from '@connect2ic/react';
import ProcessModal from '../components/process-modal';
import { useNavigate  } from 'react-router-dom';

export function Provider({ children }) {
	const [prinpId, setprinpId] = useState(localStorage.getItem('prinpId'));
	const { principal, isConnected } = useConnect();
	const [resource, setResource] = useState({})
	const [openProcess, setopenProcess] = useState(false);
	const navigate = useNavigate();

	const setPrinpId = (value) => {
		localStorage.setItem('prinpId', value);
		setprinpId(value);
	};

	const logout = () => {
		console.log('logout');
		setprinpId();
		localStorage.clear();
		navigate('/login')
	};

	
	//Get user info (resource)
	const getUserInfo = async () => {
		const res = await superheroes.getUserInfo(principal?.toString());
		console.log('user', res);
		setResource(res?.userState?.resource);
	};
	
	const setOpenProcess = async (value) => {
		if(!value) {
			await getUserInfo()
		}
		setopenProcess(value)
	}

	useEffect(() => {
		console.log(prinpId);
		if(prinpId && principal) {
			// getUserInfo();
		} 
	}, [prinpId, principal]);

	const value = {
		prinpId,
		setPrinpId,
		logout,
		getUserInfo,
		resource,
		openProcess,
		setOpenProcess
	};
	return <Context.Provider value={value}>
		{children}
		<ProcessModal open={openProcess} setOpen={setOpenProcess} />
	</Context.Provider>;
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
