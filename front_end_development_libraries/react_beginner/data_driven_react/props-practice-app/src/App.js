import Joke from "./components/Joke"

function App() {
  let i = 0

  return (
    <div className="App">
      <h1>Jokesdotcom</h1>
      <Joke
        setup = {jokesDB[i]['setup']}
        punchline = {jokesDB[i]['punchline']}
        isPun = {jokesDB[i]['isPun']}
        {...i++}        
      />
      <Joke 
        setup = {jokesDB[i]['setup']}
        punchline = {jokesDB[i]['punchline']}
        isPun = {jokesDB[i]['isPun']}
        {...i++}
      />
      <Joke 
        setup = {jokesDB[i]['setup']}
        punchline = {jokesDB[i]['punchline']}
        isPun = {jokesDB[i]['isPun']}
        {...i++}
      />
      <Joke 
        setup = {jokesDB[i]['setup']}
        punchline = {jokesDB[i]['punchline']}
        isPun = {jokesDB[i]['isPun']}
        {...i++}
      />
      <Joke 
        setup = {jokesDB[i]['setup']}
        punchline = {jokesDB[i]['punchline']}
        isPun = {jokesDB[i]['isPun']}
      />
    </div>
  );
}


export default App;
