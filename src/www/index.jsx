import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import ContextProvider from './store';

ReactDOM.render(
	<Router>
		<ContextProvider>
			<App />
		</ContextProvider>
	</Router>,
	document.getElementById('app')
);
