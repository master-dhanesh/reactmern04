import { useState } from "react";

const App = () => {
    let [time, setTime] = useState(new Date().toLocaleTimeString());

    const clickHandler = () => {
        setTime(new Date().toLocaleTimeString());
    };

    setInterval(() => {
        clickHandler();
    }, 1000);

    return (
        <div>
            <h1>Live Time: {time}</h1>
            <button onClick={clickHandler}>Change Name</button>
        </div>
    );
};

export default App;
