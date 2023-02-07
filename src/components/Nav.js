import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="container mt-5">
            <ol>
                <li>
                    <NavLink
                        className={(e) => (e.isActive ? "text-danger" : "")}
                        to="/"
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(e) => (e.isActive ? "text-danger" : "")}
                        to="/user"
                    >
                        User
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(e) => (e.isActive ? "text-danger" : "")}
                        to="/about"
                    >
                        About
                    </NavLink>
                </li>
            </ol>
        </div>
    );
};

export default Nav;
