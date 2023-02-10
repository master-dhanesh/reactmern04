import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Profilecontext from "./context/Profilecontext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Profilecontext>
        <App />
    </Profilecontext>
);
