import React, { useContext } from "react";
import { DataContext } from "../context/Datacontext";

const Dets = () => {
    const [data, setData] = useContext(DataContext);
    return (
        <div>
            <h3>Extra child component of Details</h3>
            <p>{data}</p>
        </div>
    );
};

export default Dets;
