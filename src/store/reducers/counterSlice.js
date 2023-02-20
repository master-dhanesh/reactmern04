import { createSlice } from "@reduxjs/toolkit";
import {
    incrementAction,
    decrementAction,
    incrementByAmountAction,
} from "../actions/counterActions";

const initialState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: incrementAction,
        decrement: decrementAction,
        incrementByAmount: incrementByAmountAction,
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
