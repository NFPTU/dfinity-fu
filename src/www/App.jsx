import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.scss';
import { CreateNFTPage } from './pages/create-nft';
import 'react-toastify/dist/ReactToastify.css';
import ListCollections from './pages/list-collections';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import DetailNft from './pages/detail-nft';
import routes from './pages/routes';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				{routes.map(({ component: Component, path, ...rest }) => {
					return (
						<Route
							path={path}
							key={path}
							{...rest}
							element={
								<React.Suspense fallback={'loading'}>
									<Component />
								</React.Suspense>
							}
						/>
					);
				})}
			</Routes>
			<Footer />
			<ToastContainer />
		</>
	);
}
export default App;
