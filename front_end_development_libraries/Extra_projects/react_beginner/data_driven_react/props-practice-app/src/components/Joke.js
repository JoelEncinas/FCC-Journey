import React from 'react';

function Joke(props) {
    let displayValue = ''

    if(props.punchline){
        displayValue = 'block'
    } else {
        displayValue = 'none'
    }

    /* 
    the condition can be done:
        style={{display: props.setup ? "block" : "none"}}
    inside return
    */

    return (
        <div className='joke'>
            <h2 className='setup'>{props.setup}</h2>
            <p className='punchline' style={{display: displayValue}}>{props.punchline}</p>
            <small style={{display: props.isPun ? "block" : "none"}}>has pun</small>
            <hr></hr>
        </div>
    )
}

export default Joke