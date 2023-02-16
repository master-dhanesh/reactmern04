import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    images: [],
};

export const userSlice = createSlice({
    name: "image",
    initialState,
    reducers: {
        loadimages: (state, action) => {
            state.images = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { loadimages } = userSlice.actions;

export default userSlice.reducer;
