import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <div className="container">
            <Nav />
            <hr />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user" element={<User />} />
            </Routes>
        </div>
    );
};

export default App;
