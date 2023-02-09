import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { BrowserRouter } from "react-router-dom";
import Datacontext from "./context/Datacontext";

// optional configuration
const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 1500,
    offset: "30px",
    // you can also just use 'scale'
    transition: transitions.SCALE,
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Datacontext>
        <BrowserRouter>
            <AlertProvider template={AlertTemplate} {...options}>
                <App />
            </AlertProvider>
        </BrowserRouter>
    </Datacontext>
);
