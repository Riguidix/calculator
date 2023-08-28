import { configureStore } from '@reduxjs/toolkit';
import actualReducer from '../features/actual/actualSlice';
import oldValueReducer from '../features/oldValueSlice/oldValueSlice';
import historyReducer from '../features/history/historySlice';
import signReducer from '../features/sign/signSlice';
import ansReducer from '../features/ans/ansSlice';

export const store = configureStore({
    reducer: {
        actual: actualReducer,
        oldValue: oldValueReducer,
        history: historyReducer,
        sign: signReducer,
        ans: ansReducer
    },
});

export default store;