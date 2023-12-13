import logo from './logo.svg';
import './App.css';
import { connect , useSelector} from 'react-redux';

function App(props) {

  const num = useSelector( data => data.num)
  return (
    <div className="App">
         <div>{num}</div>
         <div>
           <button onClick={props.increment}>Incrementer</button>
           <button onClick={props.decrement}>Decrementer</button>
           <button onClick={props.reset}>Reset</button>
         </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
      increment : () => dispatch({type : "Incrementer"}) ,
      decrement : () => dispatch({type : "Decrementer"}) ,
      reset : () => dispatch({type : "Reset"})
  }
}
export default connect (null , mapDispatchToProps)(App); 

