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

// Create the component in vanilla JS
let myHero = document.createElement("div");
let myHeroTitle = document.createElement("h1");

myHero.className = 'hero';
myHeroTitle.className = 'hero-title';
myHeroTitle.textContent = 'My First Component on React';

myHero.append(myHeroTitle);
document.body.append(myHero);

//JSX
const myElement = <h1 className="hero-title">Understanding JSX</h1>
// jsx creates an object with properties that define the html element

ReactDOM.render(myElement, document.getElementById('root'));

// create a navbar in JSX
const navbar = (
    <nav>
        <h1 className="header">ArcadeSkate</h1>
        <ul>
            <li>Gameplay</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById('root'));











































// create a navbar in JSX