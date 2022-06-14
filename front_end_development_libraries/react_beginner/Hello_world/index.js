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