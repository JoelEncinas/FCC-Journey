import React from 'react';
import WindowTracker from "./WindowTracker"

function App() {
  const [show, toggleShow] = React.useState(true)

  function handleChange(){
    toggleShow((prevValue) => {
      return !prevValue
    }) 
  }

  return (
    <div className="App">
      <button onClick={handleChange}>
        Toggle WindowTracker
      </button>
      {show && <WindowTracker/>}
    </div>
  );
}

export default App;
