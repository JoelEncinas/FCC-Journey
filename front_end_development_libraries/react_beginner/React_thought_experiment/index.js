// import React from 'react'
// import ReactDOM from "react-dom"

function SamplePage() {
    return (
        // this is just an object
        // when rendered manually without react it just shows a js object
        <div className="page">
            <h1>Practicing react</h1>
            <p>Lorem ipsum</p>
            <span>Made by<a href="#">Joel</a></span>
        </div>
    )
}

document.getElementById('root').append(<SamplePage/>);

console.log(<SamplePage/>)

// ReactDOM.render(<SamplePage/>, document.getElementById('root'))
