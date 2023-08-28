import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const oldValueSlice = createSlice({
    name: 'result',
    initialState,
    reducers: {
        setOldValue: (state, action) => {
            state.value = action.payload;
        },
        clearOldValue: (state, action) => {
            state.value = 0;
        }
    }
});

export const { setOldValue, clearOldValue } = oldValueSlice.actions;
export default oldValueSlice.reducer;