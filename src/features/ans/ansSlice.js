import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
};

export const ansSlice = createSlice({
    name: 'ans',
    initialState,
    reducers: {
        setAns: (state, action) => {
            state.value = action.payload;
        },
        clearAns: (state, action) => {
            state.value = 0;
        }
    }
});

export const { setAns, clearAns } = ansSlice.actions;
export default ansSlice.reducer;