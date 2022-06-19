import React from "react"

export default function Box(props){
    // console.log(props)

    const styles = {
        backgroundColor: props.isOn ? '#222' : '#ccc'
    }

    return (
        <div style={styles} className='box'></div>
    )
}