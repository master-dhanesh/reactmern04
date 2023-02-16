import React from "react";
import Create from "./components/Create";
import Images from "./components/Images";
import Show from "./components/Show";

const App = () => {
    return (
        <div>
            <Images />
            <hr />
            <Create />
            <hr />
            <Show />
            <hr />
        </div>
    );
};

export default App;
