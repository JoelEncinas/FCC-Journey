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

  function toggle(id){
    changeState(prevBoxes => {
      const newBoxes = []
      for(let i = 0; i < prevBoxes.length; i++){
        const currentBox = prevBoxes[i]
        if(currentBox.id === id){
          const updatedBox = {
            ...currentBox,
            on: !currentBox.on
          }
          newBoxes.push(updatedBox)
        } else {
          newBoxes.push(currentBox)
        }
      }

      return newBoxes
    })
  }

  let boxesElements = boxesArray.map(box => {
    // use handleClick instead of onClick as you can name it
    // whatever we want to avoid confusion
    return <Box key={box.id} id={box.id} isOn={box.on} handleClick={toggle}/>
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
