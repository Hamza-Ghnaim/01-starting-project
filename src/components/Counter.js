import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state) => (state.counter));
  const show = useSelector((state) => (state.showCounter));

  const dispatch = useDispatch();

  const increase = () => {
    dispatch({type:'increament'});
  };
  const Increament5 = ()=>{
    dispatch({type:'Increament5',amount:5});
  }
  const decrease = () => {
    dispatch({type:'decreament'});
  };
  const toggleCounterHandler = () => {
    dispatch({type:'toggle'});
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
