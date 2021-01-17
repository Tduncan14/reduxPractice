

import {useSelector} from 'react-redux'

function App() {

  const counter = useSelector(state => state.counter)

  return (
    <div className="App">
      <header className="App-header">
           Counter {counter}
      </header>
    </div>
  );
}

export default App;
