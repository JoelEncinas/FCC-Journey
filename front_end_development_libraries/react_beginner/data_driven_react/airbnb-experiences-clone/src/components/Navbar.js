import React from "react";
import airbnb_logo from "./../images/airbnb-logo.png"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__content">
                <img className="navbar__logo" src={airbnb_logo} alt="airbnb logo"/>
            </div>
        </nav>
    )
}

export default Navbar