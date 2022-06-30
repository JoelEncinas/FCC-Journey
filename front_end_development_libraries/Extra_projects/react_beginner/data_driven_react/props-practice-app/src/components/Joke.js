import React from 'react';

function Joke(props) {
    let [isShown, showJoke] = React.useState(false)

    function changeState() {
        showJoke(function(isShown){
            return !isShown
        })
    }

    /*
    let displayValue = ''

    if(props.punchline){
        displayValue = 'block'
    } else {
        displayValue = 'none'
    }
    */

    /* 
    the condition can be done:
        style={{display: props.setup ? "block" : "none"}}
    inside return
    */

    return (
        <div className='joke'>
            <h2 className='setup'>{props.setup}</h2>
            <button className='show__joke' onClick={changeState}>{isShown ? 'Hide' : 'Show'}</button>
            {/*{isShown && <p>{props.puncline}</p>}*/}
            <p className='punchline' style={{display: isShown ? 'block' : 'none'}}>{props.punchline}</p>
            <small style={{display: props.isPun ? "block" : "none"}}>has pun</small>
            <hr></hr>
        </div>
    )
}

export default Joke