import React from "react";
import portrait from "./../images/woman.jpg";

function Header() {
    return (
        <header className="header">
            <img className="header__image" src={portrait} alt="woman"/>
            <div className="header__basic-info">
                <h1>Joel Encinas</h1>
                <p>Junior Developer</p>
                <a href="https://joelencinas.github.io/">Portfolio</a>
            </div>
        </header>
    )
}

export default Header;