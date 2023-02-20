import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, incrementByAmount } from "./store/reducers/counterSlice";

const App = () => {
    const { value } = useSelector((state) => state.countReducer);
    const dispatch = useDispatch();
    const add = () => {
        dispatch(increment());
    };

    const addmore = () => {
        dispatch(incrementByAmount(5));
    };
    return (
        <div>
            <h2>{value}</h2>
            <button onClick={add}>+1</button>
            <button onClick={addmore}>Incrementbyvalue</button>
        </div>
    );
};

export default App;
