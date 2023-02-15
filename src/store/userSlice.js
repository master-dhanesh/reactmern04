import { createSlice } from "@reduxjs/toolkit";
import { creatuserAction, deleteuserAction } from "./userActions";

const initialState = {
    users: [{ id: "jd7e", username: "john", bio: "lorem ipsum dolor " }],
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        createUser: creatuserAction,
        deleteUser: deleteuserAction,
    },
});

// Action creators are generated for each case reducer function
export const { createUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
