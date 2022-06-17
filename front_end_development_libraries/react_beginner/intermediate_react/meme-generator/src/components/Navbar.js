import React from "react"
import trollface from "./../images/trollface.png"

function Navbar() {
    return (
        <nav className="navbar">
            <img src={trollface} alt="troll face"/>
            <h2>Meme Generator</h2>
        </nav>
    )
}

export default Navbar