import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import Legal from "./components/pages/Legal";
import ImageAnalyzer from "./components/pages/ImageAnalyzer";
import Contractor from "./components/pages/Contractor";

import NotFound from "./components/404";

import Bench from "./components/pages/manuals/bench";
import Fence from "./components/pages/manuals/fence";
import Gate from "./components/pages/manuals/gate";
import Window from "./components/pages/manuals/window";
import Tv from "./components/pages/manuals/tv";
import Shelves from "./components/pages/manuals/shelves";

export default function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contractor" element={<Contractor />} />
                <Route path="/image-analyzer" element={<ImageAnalyzer />} />
                <Route path="/legal" element={<Legal />} />

                <Route path="/manuals/bench" element={<Bench />} />
                <Route path="/manuals/fence" element={<Fence />} />
                <Route path="/manuals/gate" element={<Gate />} />
                <Route path="/manuals/window" element={<Window />} />
                <Route path="/manuals/tv" element={<Tv />} />
                <Route path="/manuals/shelves" element={<Shelves />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

