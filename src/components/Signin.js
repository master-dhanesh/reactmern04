import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/config";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    query,
    where,
} from "firebase/firestore";
const Signin = () => {
    const db = getFirestore(app);
    const navigate = useNavigate();
    const auth = getAuth(app);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const signinhandler = async (e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            const q = query(
                collection(db, "users"),
                where("email", "==", user.user.email)
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                navigate("/profile/" + doc.id);
            });
        } catch (error) {
            console.log(error);
        }
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
