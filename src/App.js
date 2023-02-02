import React, { useEffect, useState } from "react";

const App = () => {
    const [user, setUser] = useState("user...");
    const [admin, setAdmin] = useState("admin...");
    useEffect(() => {
        console.log("inside useeffect");

        return () => {
            console.log("deleting/refreshing.....");
        };
    }, [admin]);

    // useEffect(() => {
    //     console.log("Create");
    //     return () => {
    //         console.log("delete");
    //     };
    // }, ["updating"]);

    const userchange = () => {
        setUser("Heyy User");
    };

    const adminchange = () => {
        setAdmin("Heyy admin");
    };

    return (
        <div>
            <h1>{user}</h1>
            <button onClick={userchange}>change user</button>
            <hr />
            <h1>{admin}</h1>
            <button onClick={adminchange}>change admin</button>
        </div>
    );
};

export default App;
