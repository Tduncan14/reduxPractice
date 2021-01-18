

import {useSelector,useDispatch} from 'react-redux'
import {decrement, increment,islogged,loggout} from './action';



function App() {

  const counter = useSelector(state => state.counter);

  const logged = useSelector(state => state.logged)



  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
           Counter {counter}
           <button onClick ={() =>dispatch(increment())}>+</button>
           <button onClick={() => dispatch(decrement())}>-</button>
      </header>

     <button onClick={() => dispatch(islogged())}>
       buttons
     </button>

     <button onClick={() => dispatch(loggout())}>
       sign out

     </button>




      {logged ? <h3> Valuable information</h3> : ''}
    </div>
  );
}

export default App;
