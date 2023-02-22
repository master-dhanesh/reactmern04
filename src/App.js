import { Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

const App = () => {
    const notify = () => toast("Wow so easy!");
    return (
        <div className="container mt-5">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/profile/:id" element={<Profile />} />
            </Routes>
        </div>
    );
};

export default App;
