import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
};

export const actualSlice = createSlice({
    name: 'actual',
    initialState,
    reducers: {
        incrementActualValue: (state, action) => {
            if (state.value === 0) {
                state.value += parseFloat(action.payload); // TODO: This Parse Int destroys the decimals and divisions
            } else {
                state.value += action.payload;
            }        
        },
        setActual: (state, action) => {
            state.value = action.payload;
        },
        clearActual: (state, action) => {
            state.value = 0;
        }
    }
});

export const { incrementActualValue, setActual, clearActual } = actualSlice.actions;
export default actualSlice.reducer;