import React from "react"
import ReactDOM from "react-dowm"

/*
function addTwoNumbersTogether(a, b) {
    return a + b;
}
*/

function App() {
    const firstName = "Joe"
    const lastName = "Schmoe"

    const date = new Date()

    return (
        // curly braces for props
        <div>
            <h1>Hello {firstName} {lastName}</h1>
            <p>It's around {date.getHours() % 12} o'clock!</p>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))