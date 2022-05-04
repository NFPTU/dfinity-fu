import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import {Provider} from './hooks';

ReactDOM.render(
	<Router>
		<Provider>
			<App />
		</Provider>
	</Router>,
	document.getElementById('app')
);
