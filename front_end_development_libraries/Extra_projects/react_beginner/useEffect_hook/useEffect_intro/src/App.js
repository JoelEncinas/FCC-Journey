import React from 'react';

function App() {
  const [starWarsData, setStarsWarsData] = React.useState({})

  console.log("rendered");

  // side effects
  React.useEffect(function() {
    fetch("https://swapi.dev/api/people/1")
    .then(res => res.json())
    .then(data => setStarsWarsData(data))
  }, )

  return (
    <div className="App">
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}

export default App;
