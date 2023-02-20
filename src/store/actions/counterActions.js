export const incrementAction = (state) => {
    state.value += 1;
};

export const decrementAction = (state) => {
    state.value -= 1;
};

export const incrementByAmountAction = (state, action) => {
    state.value += action.payload;
};
