import React, { useState } from "react";
import Create from "./components/Create";
import Show from "./components/Show";

const App = () => {
    const [tasks, setTasks] = useState([]);
    return (
        <div>
            <Create tasks={tasks} setTasks={setTasks}>
                This is Tags Information.
            </Create>
            <hr />
            <Show tasks={tasks} setTasks={setTasks} />
        </div>
    );
};

export default App;
