import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./store/counterSlice";

const App = () => {
    const dispatch = useDispatch();
    const { value } = useSelector((state) => state.counter);

    const OnIncrease = () => {
        dispatch(increment());
    };

    const OnDecrease = () => {
        dispatch(decrement());
    };

    const changebyamount = () => {
        dispatch(incrementByAmount(-11));
    };
    return (
        <div className="container mt-5">
            <h1>{value}</h1>
            <button onClick={OnIncrease} className="btn btn-primary">
                Increment By 1
            </button>
            <button onClick={OnDecrease} className="btn btn-danger">
                Decrement By 1
            </button>
            <button onClick={changebyamount} className="btn btn-dark">
                Change By Amount
            </button>
        </div>
    );
};

export default App;
