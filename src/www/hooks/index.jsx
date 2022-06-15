import React, { useState, useEffect } from 'react';
import Context from './Context';
import reducer, { initState } from './reducer';
import { superheroes } from '../../declarations';
import { customAxios } from '../utils/custom-axios';
import { useConnect } from '@connect2ic/react';

export function Provider({ children }) {
	const [prinpId, setprinpId] = useState(localStorage.getItem('prinpId'));
	const { principal, isConnected } = useConnect();
	const [resource, setResource] = useState({})


	const setPrinpId = (value) => {
		localStorage.setItem('prinpId', value);
		setprinpId(value);
	};

	const logout = () => {
		setprinpId();
		localStorage.clear();
	};

	
	//Get user info (resource)
	const getUserInfo = async () => {
		const res = await superheroes.getUserInfo(principal?.toString());
		console.log('user', res);
		setResource(res?.userState?.resource);
	};
	useEffect(() => {
		console.log(isConnected, principal);
		if(isConnected == false) {
			logout()
		} else {
			getUserInfo();
		}
	}, [isConnected, principal]);

	const value = {
		prinpId,
		setPrinpId,
		logout,
	};
	return <Context.Provider value={value}>{children}</Context.Provider>;
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
