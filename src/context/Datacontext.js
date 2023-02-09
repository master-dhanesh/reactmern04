import React, { createContext, useState } from "react";

export const DataContext = createContext(null);

const Datacontext = (props) => {
    const [data, setData] = useState("this is supreme data");
    // console.log(props.children);
    return (
        <DataContext.Provider value={[data, setData]}>
            {props.children}
        </DataContext.Provider>
    );
};

export default Datacontext;
