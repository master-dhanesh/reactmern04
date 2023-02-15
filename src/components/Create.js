import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { createUser } from "../store/userSlice";
const Create = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [bio, setBio] = useState("");

    const createuser = (e) => {
        e.preventDefault();
        dispatch(
            createUser({
                id: nanoid(),
                username,
                bio,
            })
        );
        setUsername("");
        setBio("");
    };

    return (
        <form className="w-50 container mt-5" onSubmit={createuser}>
            <h3>Create User</h3>
            <input
                className="form-control mb-3"
                type="text"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />
            <textarea
                className="form-control mb-3"
                placeholder="bio"
                onChange={(e) => setBio(e.target.value)}
                value={bio}
            ></textarea>
            <button>Create User</button>
        </form>
    );
};

export default Create;
