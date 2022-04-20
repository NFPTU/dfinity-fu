import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.scss";
import { CreateNFTPage } from "./pages/create-nft";
import Footer from "./components/footer"
import 'react-toastify/dist/ReactToastify.css';
import ListCollections from "./pages/list-collections"

class App extends React.Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<ListCollections />} />
                    <Route path="/footer" element={<Footer />} />
                </Routes>
            <ToastContainer />
            </div>
        );
    }
}

export default App;
