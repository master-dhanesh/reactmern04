import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/config";

const Signin = () => {
    const auth = getAuth(app);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const signinhandler = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
    };

    return (
        <form onSubmit={signinhandler} className="w-50 m-auto">
            <h3 className="mb-3 fs-4 fw-light">Signin User</h3>
            <input
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="form-control mb-3 w-100"
            />
            <input
                type="password"
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="form-control mb-3 w-100"
            />
            <button className="w-50 mb-3 btn btn-dark">Signin user</button>
            <p>
                Doesn't have an account ? <Link to="/signup">signup</Link>
            </p>
        </form>
    );
};

export default Signin;
