import React from "react"

export default function Box(props){
    // if you initialize state by using incoming
    // props there's probably a better way
    // const[state, toggleState] = React.useState(props.isOn)

    /*
    function toggleBox(){
        toggleState(state => !state)
    }
    */

    const styles = {
        backgroundColor: props.isOn ? '#222' : '#ccc'
    }

    return (
        <div style={styles} className='box' onClick={() => props.handleClick(props.id)}></div>
    )
}