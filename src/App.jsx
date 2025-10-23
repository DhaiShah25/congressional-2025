import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ImageAnalyzer from "./components/pages/ImageAnalyzer";
import Contractor from "./components/pages/Contractor";
import "./App.css";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contractor" element={<Contractor />} />
                <Route path="/image-analyzer" element={<ImageAnalyzer />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
