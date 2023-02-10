import React from "react";
import Create from "./components/Create";
import Show from "./components/Show";

const App = () => {
    return (
        <div className="mt-5 container">
            <h1>This is App.js Component heading.</h1>
            <Show />
            <hr />
            <Create />
        </div>
    );
};

export default App;
