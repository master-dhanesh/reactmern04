import React, { useState } from "react";
import { useAlert } from "react-alert";
import css from "./Create.module.css";

const Create = (props) => {
    const alert = useAlert();

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const { tasks, setTasks } = props;

    const submithandler = (e) => {
        e.preventDefault();
        const task = { title, desc };

        if (!title.trim() || !desc.trim()) {
            alert.info("No input field must empty!");
            return;
        }

        setTasks([...tasks, task]);
        alert.success("Task Created!");
        setTitle("");
        setDesc("");
    };

    const formcss = {
        border: "1px solid black",
        padding: "1vmax",
        width: "50%",
    };

    return (
        <form style={formcss} onSubmit={submithandler}>
            <input
                className={css.input}
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
            <button style={{ backgroundColor: "red", fontSize: "1.1vmax" }}>
                Create Task
            </button>
        </form>
    );
};

export default Create;
