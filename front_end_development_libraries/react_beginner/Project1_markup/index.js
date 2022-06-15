// import React from 'react'
// import ReactDOM from "react-dom"

// #1 SOLUTION - custom component
function Page() {
    return (
        <div className="page-wrapper">
            <header>
                <img style={{width: 40 + 'px'}} src="react-logo.png"/>
            </header>

            <main>
                <h1>Fun facts about React</h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k stars on Github</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </main>
        </div>
    )
}

// #2 SOLUTION - jsx in a constant
const page = (
    <div>
        <img src="react-logo.png" width="40px"/>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)


ReactDOM.render(<Page/>, document.getElementById('root'))