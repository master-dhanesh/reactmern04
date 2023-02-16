import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import imageReducer from "./imageSlice";

export const store = configureStore({
    reducer: {
        userReducer,
        imageReducer,
    },
});
