import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: ''
}

export const signSlice = createSlice({
    name: 'sign',
    initialState,
    reducers: {
        setSign: (state, action) => {
            state.value = action.payload;
        },
        clearSign: (state, action) => {
            state.value = ''
        }
    }
});

export const { setSign, clearSign } = signSlice.actions;
export default signSlice.reducer; 