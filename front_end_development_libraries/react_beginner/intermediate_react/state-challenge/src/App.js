import React from 'react';

function App() {
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
      <div className='counter__count'>
        <h1>{counter}</h1>
      </div>
      <button className='counter__plus' onClick={increaseCounter}>+</button>
    </div>
  );
}

export default App;
