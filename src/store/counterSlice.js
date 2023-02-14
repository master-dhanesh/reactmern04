import { createSlice } from "@reduxjs/toolkit";
import {
    decrementaction,
    incrementaction,
    incrementbyamountaction,
} from "./counterAction";

const initialState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: incrementaction,
        decrement: decrementaction,
        incrementByAmount: incrementbyamountaction,
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
