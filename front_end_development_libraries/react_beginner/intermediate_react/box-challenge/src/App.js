import React from 'react';
import boxes from './boxes'
import Box from './Box'

/**
 * Challenge part 1:
 * 1. Initialize state with the default value of the
 *    array pulled in from boxes.js
 * 2. Map over that state array and display each one
 *    as an empty square (black border, transparent bg color)
 *    (Don't worry about using the "on" property yet)
 */

function App() {
  const [boxesArray, changeState] = React.useState(boxes)

  let boxesElements = boxesArray.map(box => {
    return <Box key={box.id} isOn={box.on}/>
  })

  return (
    <main>
        <h1>Boxes</h1>
        <div className='box-container'>
          {boxesElements}
        </div>
    </main>
  )
}

export default App;
