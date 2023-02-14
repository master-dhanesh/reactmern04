export const incrementaction = (state) => {
    state.value += 1;
};

export const decrementaction = (state) => {
    state.value -= 1;
};

export const incrementbyamountaction = (state, action) => {
    state.value += action.payload;
};
