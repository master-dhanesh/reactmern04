import { useContext } from "react";

import { Profile } from "../context/Profilecontext";

const Show = () => {
    const [profiles, setProfiles] = useContext(Profile);
    return (
        <div className="list-group">
            {profiles.map((p) => (
                <p key={p._id} className="list-group-item">
                    {p.name}
                </p>
            ))}
        </div>
    );
};

export default Show;
