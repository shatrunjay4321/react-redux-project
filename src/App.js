import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const handleIncrease = () => {
        dispatch({ type: 'inc' });
    };

    const handleDecrease = () => {
      dispatch({ type: 'dec' });
    };

    const handleAddition = () => {
        dispatch({ type: 'add', payload: 10 });
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
