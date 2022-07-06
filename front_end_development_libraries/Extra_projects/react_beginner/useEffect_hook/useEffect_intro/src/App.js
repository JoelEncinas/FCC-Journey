import React from "react";

function App() {
  const [starWarsData, setStarsWarsData] = React.useState({});
  const [count, setCount] = React.useState(1);

  console.log("rendered");

  // side effects
  React.useEffect(function () {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarsWarsData(data));
    // dependencies arrays
    // if array empty it only runs 1 time when component rendered
  }, [count]);

  // React.useEffect(() => {
  //   console.log("Effect function run");
  // }, [count])

  function getNewCharacter(){
    setCount((prevValue) => {
      return prevValue + 1;
    })
  }

  return (
    <div className="App">
      <h2>The count is {count}</h2>
      <button onClick={getNewCharacter}>Get next character</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}

export default App;
