import React from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import app from "../firebase/config";
import { useEffect } from "react";
import { useState } from "react";
const Profile = () => {
    const [user, setUser] = useState(null);
    const db = getFirestore(app);
    const { id } = useParams();
    const getData = async () => {
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);
        console.log(docSnap.data());
        setUser(docSnap.data());
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container mt-5 d-flex">
            <div className="left w-75">
                <div className="d-flex align-items-center">
                    <div
                        className="me-5 rounded-circle"
                        style={{
                            width: "10vmax",
                            height: "10vmax",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundImage: `url(${
                                user && user.image
                                    ? user.image
                                    : "https://images.unsplash.com/photo-1677026538602-b0985abfc66e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                            })`,
                        }}
                    ></div>

                    <div>
                        <h1>{user && user.username}</h1>
                        <h4>{user && user.email}</h4>
                    </div>
                </div>
                <hr />
                <h1>read all users details</h1>
            </div>
            <div className="ps-5 left w-25 d-flex flex-column align-item-center justify-content-center">
                <Link className="fs-4 text-dark mb-5" to="/resetpassword">
                    Reset Password
                </Link>
                <Link className="fs-4 text-danger mb-5" to="/logout">
                    Logout
                </Link>
                <Link className="fs-4 text-danger mb-5" to="/delete-account">
                    Delete Account
                </Link>
            </div>
        </div>
    );
};

export default Profile;
