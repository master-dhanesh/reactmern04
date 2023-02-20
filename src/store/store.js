import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducers/counterSlice";

export const store = configureStore({
    reducer: {
        countReducer,
    },
});
