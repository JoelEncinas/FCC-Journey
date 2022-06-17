import React from "react"
import trollface from "./../images/trollface.png"

function Navbar() {
    return (
        <nav className="navbar">
            <img className="navbar__img" src={trollface} alt="troll face"/>
            <h2 className="navbar__title">Meme Generator</h2>
            <h4 className="navbar__project">React Project</h4>
        </nav>
    )
}

export default Navbar