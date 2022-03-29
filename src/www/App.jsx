import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { CreateNFTPage } from "./pages/create-nft";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<CreateNFTPage />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
