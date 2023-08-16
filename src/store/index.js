import { createStore } from 'redux';

const reducerFn = (state = { counter: 0 }, action) => {

    //synchronous function
    //should not mutate original state

    // if(action.type)

    return state;
};

const store = createStore(reducerFn);

export default store;