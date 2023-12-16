import logo from './logo.svg';
import './App.css';
import { connect , useDispatch, useSelector} from 'react-redux';
import {Incrementer , Decrementer , Reset} from "./Config/action"

function App(props) {

  const num = useSelector( data => data.num)
  const dispatch = useDispatch();
  return (
    <div className="App">
         <div>{num}</div>
         <div>
           <button onClick={ () => dispatch(Incrementer())}>Incrementer</button>
           <button onClick={ () => dispatch(Decrementer())}>Decrementer</button>
           <button onClick={() => dispatch(Reset())}>Reset</button>
         </div>
    </div>
  );
}

/* const mapDispatchToProps = (dispatch) => {
  return {
      increment : () => dispatch({type : "Incrementer"}) ,
      decrement : () => dispatch({type : "Decrementer"}) ,
      reset : () => dispatch({type : "Reset"})
  }
} */
export default App; 

