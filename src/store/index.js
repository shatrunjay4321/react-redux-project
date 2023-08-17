import { createStore } from 'redux';

const reducerFn = (state = { counter: 0 }, action) => {

    //synchronous function
    //should not mutate original state

    if(action.type === 'inc') {
        return { counter: state.counter + 1 };
    }

    if(action.type === 'dec') {
        return { counter: state.counter - 1 };
    }

    if(action.type === 'add') {
        return { counter: state.counter + action.payload};
    }
    
    return state;
};

const store = createStore(reducerFn);

export default store;