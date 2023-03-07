import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector(state=>state.counter);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({type:'increament'});
  };
  const decrease = () => {
    dispatch({type:'decreament'});
  };
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={increase}>Increament</button>
      <button onClick={decrease}>Decreament</button>
    </main>
  );
};

export default Counter;
