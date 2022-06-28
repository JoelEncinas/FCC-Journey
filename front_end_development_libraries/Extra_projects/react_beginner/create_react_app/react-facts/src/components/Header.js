import React from "react"
import reactLogo from "../images/react-logo.png"

function Header() {
    return (
        <nav className="nav">
            <img
                src={reactLogo}
                alt="React logo"
                className="nav__icon"
            />
            <h3 className="nav__logo-text">ReactFacts</h3>
        </nav>
    )
}

export default Header