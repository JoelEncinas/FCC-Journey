import React from 'react';
import Counter from './Counter'

function App() {
  console.log('app rendered');

  let [counter, setCount] = React.useState(0)

  /*
  Use callback function to the state function if you need the old state value
  in order to update the new state value
  */
 
  // basic 
  function increaseCounter() {
    setCount(function(oldValue) {
      return oldValue + 1
    });
  }

  // improved
  function decreaseCounter() {
    setCount(prevCount => prevCount - 1);
  }

  return (
    <div className="App">
      <button className='counter__minus' onClick={decreaseCounter}>-</button>
      <Counter number={counter}/>
      <button className='counter__plus' onClick={increaseCounter}>+</button>
    </div>
  );
}

export default App;
