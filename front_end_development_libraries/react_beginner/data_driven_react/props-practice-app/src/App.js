import Joke from "./components/Joke"

function App() {
  let i = 0

  return (
    <div className="App">
      <h1>Jokesdotcom</h1>
      <Joke
        setup = {jokesDB[i]['setup']}
        punchline = {jokesDB[i]['punchline']}
        {...i++}        
      />
      <Joke 
        setup = {jokesDB[i]['setup']}
        punchline = {jokesDB[i]['punchline']}
        {...i++}
      />
      <Joke 
        setup = {jokesDB[i]['setup']}
        punchline = {jokesDB[i]['punchline']}
        {...i++}
      />
      <Joke 
        setup = {jokesDB[i]['setup']}
        punchline = {jokesDB[i]['punchline']}
        {...i++}
      />
      <Joke 
        setup = {jokesDB[i]['setup']}
      />
    </div>
  );
}

const jokesDB = [
  {
    setup : 'What\'s the best thing about Switzerland?',
    punchline : 'I don\'t know, but the flag is a big plus.'
  },
  {
    setup : 'I invented a new word!',
    punchline : 'Plagiarism!'
  },
  {
    setup : 'Why do we tell actors to “break a leg?”',
    punchline : 'Because every play has a cast.'
  },
  {
    setup : 'Hear about the new restaurant called Karma?',
    punchline : 'There\'s no menu: You get what you deserve.'
  },
  {
    setup : 'What do you call a joke that isn\'t funny? A sentence.'
  }
]

export default App;
