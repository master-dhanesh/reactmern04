export const creatuserAction = (state, action) => {
    state.users.push(action.payload);
};

export const deleteuserAction = (state, action) => {
    state.users = state.users.filter((user) => user.id !== action.payload);
};
