import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: ''
}

export const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        incrementHistory: (state, action) => {
            state.value += action.payload;
        },
        clearHistory: (state, action) => {
            state.value = '';
        }
    }
});

export const { incrementHistory, clearHistory } = historySlice.actions;
export default historySlice.reducer;