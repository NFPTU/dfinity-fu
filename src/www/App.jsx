import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import ListCollections from './pages/detail-collections';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import DetailNft from './pages/detail-nft';
import routes from './pages/routes';
import MarketLayout from './components/layout/market-layout';

function App() {
	return (
		<>
			<Routes>
				{routes.map(({ component: Component, path, layout, ...rest }) => {
					let Layout = MarketLayout;

					if(layout){
						Layout = layout
					} else if(layout === null){
						Layout = Fragment
					}

					return (
						<Route
							path={path}
							key={path}
							{...rest}
							element={
								<React.Suspense fallback={'loading'}>
									<Layout>
										<Component />
									</Layout>
								</React.Suspense>
							}
						/>
					);
				})}
			</Routes>
			<ToastContainer />
		</>
	);
}
export default App;
