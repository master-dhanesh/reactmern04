import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from "../firebase/config";
const Signup = () => {
    const navigate = useNavigate();
    const auth = getAuth(app);
    const db = getFirestore(app);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const signuphandler = async (e) => {
        e.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const docRef = await addDoc(collection(db, "users"), {
                email,
                username,
            });
            navigate("/profile/" + docRef.id);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={signuphandler} className="w-50 m-auto">
            <h3 className="mb-3 fs-4 fw-light">Signup User</h3>
            <input
                type="text"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className="form-control mb-3 w-100"
            />
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
            <button className="w-50 mb-3 btn btn-dark">Signup user</button>
            <p>
                Already have an account ? <Link to="/signin">signin</Link>
            </p>
        </form>
    );
};

export default Signup;
