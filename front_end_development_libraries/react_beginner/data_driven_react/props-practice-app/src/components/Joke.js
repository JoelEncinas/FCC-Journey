import React from 'react';

function Joke(props) {
    let displayValue = ''

    if(props.punchline == null){
        displayValue = 'none'
    } else {
        displayValue = 'block'
    }

    return (
        <div className='joke'>
            <h2 className='setup'>{props.setup}</h2>
            <p className='punchline' style={{display: displayValue}}>{props.punchline}</p>
        </div>
    )
}

export default Joke