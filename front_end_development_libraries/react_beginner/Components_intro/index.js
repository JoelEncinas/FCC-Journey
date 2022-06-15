// import React from 'react'
// import ReactDOM from "react-dom"

// no need for .js as is the default file type
// import Header from "./Header"

// fragment tags - custom components
// <></>

function WhyLearnReact() {
    return (
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    )
} 

ReactDOM.render(<WhyLearnReact/>, document.getElementById('root'))