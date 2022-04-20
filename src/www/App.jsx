import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.scss";
import { CreateNFTPage } from "./pages/create-nft";
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {
    render() {
        return (
            <div>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<CreateNFTPage />} />
                </Routes>
            </BrowserRouter>
            <ToastContainer />
            </div>
        );
    }
}

export default App;
