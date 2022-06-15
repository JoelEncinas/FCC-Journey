import React from "react";
import airbnb_logo from "./../images/airbnb-logo.png"

function Navbar() {
    return (
        <nav className="navbar">
            <img className="navbar__logo" src={airbnb_logo} alt="airbnb logo"/>
        </nav>
    )
}

export default Navbar