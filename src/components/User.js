import React from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";

const User = () => {
    const navigate = useNavigate();

    const submitform = (e) => {
        e.preventDefault();
        // -----to send data to database
        console.log("submited");
        navigate("/about");
    };

    return (
        <>
            <form onSubmit={submitform}>
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Password" />
                <button>Submit</button>
            </form>
            <hr />
            <ol className="list-group">
                <li className="list-group-item">
                    <Link to="/user/John">John</Link>
                </li>
                <li className="list-group-item">
                    <Link to="/user/Rahul">Rahul</Link>
                </li>
                <li className="list-group-item">
                    <Link to="/user/Priya">Priya</Link>
                </li>
                <li className="list-group-item">
                    <Link to="/user/Ravi">Ravi</Link>
                </li>
            </ol>
            <hr />
            <Outlet />
        </>
    );
};

export default User;
