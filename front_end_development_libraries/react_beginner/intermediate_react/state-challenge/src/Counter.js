import React from "react"

function Counter(props){
    return(
        <div className="counter__count">
            <h1>{props.number}</h1>
        </div>
    )
}

export default Counter