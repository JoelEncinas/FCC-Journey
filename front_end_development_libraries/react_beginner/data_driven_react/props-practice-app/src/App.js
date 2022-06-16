import Joke from "./components/Joke"

function App() {
  return (
    <div className="App">
      <h1>Jokesdotcom</h1>
      <Joke
        setup = {jokesDB[0]['setup']}
        punchline = {jokesDB[0]['punchline']}
      />
      <Joke 
        setup = {jokesDB[1]['setup']}
        punchline = {jokesDB[1]['punchline']}
      />
      <Joke 
        setup = {jokesDB[2]['setup']}
        punchline = {jokesDB[2]['punchline']}
      />
      <Joke 
        setup = {jokesDB[3]['setup']}
        punchline = {jokesDB[3]['punchline']}
      />
      <Joke 
        setup = {jokesDB[4]['setup']}
      />
    </div>
  );
}

const jokesDB = [
  {
    setup : 'What’s the best thing about Switzerland?',
    punchline : 'I don’t know, but the flag is a big plus.'
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
    punchline : 'There’s no menu: You get what you deserve.'
  },
  {
    setup : 'What do you call a joke that isn\'t funny?A sentence.',
  }
]

export default App;
