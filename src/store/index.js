import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0 },
    reducers: {
        handleIncrease(state, action) {
            state.counter++;
        },

        handleDecrease(state, action) {
            state.counter--;
        },

        handleAddition(state, action) {
            state.counter += action.payload;
        }
    }
});
console.log("counterSlice:", counterSlice);

const store = configureStore({
    reducer: counterSlice.reducer,
});

export const actions = counterSlice.actions;

export default store;