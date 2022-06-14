// import ReactDOM from 'react-dom'
// ReactDOM.render(<what>, <where>)

function Hero() {
    return (
        <div className="hero">
            <h1 className="hero-title">My First Component on React</h1>
        </div>
    )
}

/*
ReactDOM.render(
<ul>
    <li>Flexible</li>
    <li>Awesome</li>
    <li>Fast</li>
</ul>, 
document.getElementById('root'))
*/

ReactDOM.render(<Hero/>, document.getElementById('root'))