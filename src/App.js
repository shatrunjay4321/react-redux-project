import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/index';

function App() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const handleIncrease = () => {
        dispatch(actions.handleIncrease());
    };

    const handleDecrease = () => {
      dispatch(actions.handleDecrease());
    };

    const handleAddition = () => {
        dispatch(actions.handleAddition(10));
    }

    return (
        <div>
            <div>counter: {counter}</div>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
            <button onClick={handleAddition}>Add by 10</button>
        </div>
    );
}

export default App;
