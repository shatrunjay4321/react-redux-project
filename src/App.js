import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const increase = () => {
        dispatch({ type: 'inc' });
    };
    const decrease = () => {
      dispatch({ type: 'dec' });
    };

    return (
        <div>
            <div>counter: {counter}</div>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    );
}

export default App;
