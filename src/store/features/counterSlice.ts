import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value += 1;
        },
        decrement(state) {
            state.value -= 1;
        },
        add(state, action: PayloadAction<number>) {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, add } = counterSlice.actions;
export default counterSlice.reducer;