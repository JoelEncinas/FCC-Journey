import Joke from "./components/Joke"
import jokesDB from "./jokesDB"

function App() {
  const jokeElements = jokesDB.map(joke => {
    return <Joke setup = {joke['setup']} punchline = {joke['punchline']} isPun = {joke['isPun']}/>
  })

  return (
    <div className="App">
      <h1>Jokesdotcom</h1>
      {jokeElements}
    </div>
  );
}


export default App;
