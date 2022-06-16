import React from 'react';

function Joke(props) {
    let displayValue = ''

    if(props.punchline){
        displayValue = 'block'
    } else {
        displayValue = 'none'
    }

    return (
        <div className='joke'>
            <h2 className='setup'>{props.setup}</h2>
            <p className='punchline' style={{display: displayValue}}>{props.punchline}</p>
            <hr></hr>
        </div>
    )
}

export default Joke