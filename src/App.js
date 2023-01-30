import React, { useState } from "react";

const App = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const [tasks, setTasks] = useState([]);

    const submithandler = (e) => {
        e.preventDefault();
        const task = { title, desc };
        setTasks([...tasks, task]);
        setTitle("");
        setDesc("");
    };

    let tasklist = <h1>No Tasks Found!</h1>;
    if (tasks.length > 0) {
        tasklist = tasks.map((task, index) => {
            return <li key={index}>{task.title}</li>;
        });
    }
    return (
        <div>
            <form onSubmit={submithandler}>
                <input
                    type="text"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <input
                    type="text"
                    placeholder="Description"
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                />
                <button>Create Task</button>
            </form>
            <hr />
            <ol>{tasklist}</ol>
            {/* {[1, 2, 3, 4, 5, 67]} */}
        </div>
    );
};

export default App;
