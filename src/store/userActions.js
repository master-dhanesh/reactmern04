exports.creatuserAction = (state, action) => {
    state.users.push(action.payload);
};

exports.deleteuserAction = (state, action) => {
    state.users = state.users.filter((user) => user.id !== action.payload);
};
