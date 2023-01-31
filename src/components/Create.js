import React, { useState } from "react";

const Create = (props) => {
    console.log(props);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const { tasks, setTasks } = props;

    const submithandler = (e) => {
        e.preventDefault();
        const task = { title, desc };

        setTasks([...tasks, task]);
        setTitle("");
        setDesc("");
    };

    return (
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
    );
};

export default Create;
