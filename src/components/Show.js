import React from "react";

const Show = (props) => {
    const { tasks, setTasks } = props;

    const taskdelete = (i) => {
        const copytasks = [...tasks];
        copytasks.splice(i, 1);
        setTasks(copytasks);
    };

    let tasklist = <h1>No Tasks Found!</h1>;
    if (tasks.length > 0) {
        tasklist = tasks.map((task, index) => {
            return (
                <li key={index}>
                    {task.title} -{" "}
                    <span onClick={() => taskdelete(index)}>❌</span>
                </li>
            );
        });
    }

    return <ol>{tasklist}</ol>;
};

export default Show;
