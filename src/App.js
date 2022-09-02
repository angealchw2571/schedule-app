import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar />;

            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
