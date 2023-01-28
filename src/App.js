import React, { useState } from "react";

const App = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submithandler = (e) => {
        e.preventDefault();
        // console.log(e.target[0].value);
        // console.log(e.target[1].value);
        console.log({ title, desc });
        setTitle("");
        setDesc("");
    };

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
        </div>
    );
};

export default App;
