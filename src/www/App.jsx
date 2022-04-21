import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.scss";
import { CreateNFTPage } from "./pages/create-nft";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Home from "./pages/home"

class App extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/footer" element={<Footer />} />
                </Routes>
                <Footer />
            <ToastContainer />
            </>
        );
    }
}

export default App;
