import React, { useState } from "react";
import app from "./firebase/firebase";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { useEffect } from "react";

const App = () => {
    const auth = getAuth(app);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const signup = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                "rahul@kumar.com",
                "123456"
            );
            // console.log(user.user.uid, "->", user.user.email);
        } catch (error) {
            console.log(error);
        }
    };
    const signin = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                "rahul@kumar.com",
                "123456"
            );
            // console.log(user.user.uid, "->", user.user.email);
            setIsLoggedIn(true);
        } catch (error) {
            console.log(error);
        }
    };
    const signout = async () => {
        try {
            await signOut(auth);
            setIsLoggedIn(false);
            // console.log("user logged out");
        } catch (error) {
            console.log(error);
        }
    };
    const session = async () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setIsLoggedIn(true);
                // console.log(uid, "->", user.email);
            } else {
                setIsLoggedIn(false);
                // console.log("user logged out");
            }
        });
    };

    useEffect(() => {
        session();
    }, []);

    return (
        <div className="container mt-5 p-5">
            <h1>{isLoggedIn ? "User Logged in" : "User Logged Out"}</h1>

            <button className="btn btn-info ms-2" onClick={signup}>
                Signup
            </button>
            <button className="btn btn-warning ms-2" onClick={signin}>
                Signin
            </button>
            <button className="btn btn-danger ms-2" onClick={signout}>
                Signout
            </button>
        </div>
    );
};

export default App;
