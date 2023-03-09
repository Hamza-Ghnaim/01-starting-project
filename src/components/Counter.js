import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import {counterAction} from '../store/counter'

const Counter = () => {
  const counter = useSelector((state) => (state.counter.counter));
  const show = useSelector((state) => (state.counter.showCounter));
  // const auth = useSelector((state) => (state.counter.showCounter));

  
  const dispatch = useDispatch();

  const increase = () => {
    dispatch(counterAction.increament());
  };
  const Increament5 = ()=>{
    dispatch(counterAction.Increament5(5));
  }
  const decrease = () => {
    dispatch(counterAction.decreament());
  };
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increase}>Increament</button>
        <button onClick={decrease}>Decreament</button>
        <button onClick={Increament5}>Increament 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
