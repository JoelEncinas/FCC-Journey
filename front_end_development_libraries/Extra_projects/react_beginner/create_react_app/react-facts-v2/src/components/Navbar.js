import React from "react"
import logo from './../images/logo-react.png'

export default function Navbar() {
    return (
        <nav className="nav">
            <div className="logo">
                <img className="logo__image" src={logo} alt="react logo"/>
                <h2 className="logo__title">ReactFacts</h2>
            </div>
            <div className="index">
                <p>React Course - Project 1</p>
            </div>
        </nav>
    )
}