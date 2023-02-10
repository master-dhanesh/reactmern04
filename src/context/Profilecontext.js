import { createContext, useState } from "react";

export const Profile = createContext(null);

const Profilecontext = (props) => {
    const [profiles, setProfiles] = useState([
        { _id: "asak43sd", name: "John Doe" },
        { _id: "fdg6re", name: "Ravi Kumar" },
        { _id: "346ergf", name: "Priya Jha" },
    ]);
    return (
        <Profile.Provider value={[profiles, setProfiles]}>
            {props.children}
        </Profile.Provider>
    );
};

export default Profilecontext;
