import React from "react";
import logo from "./../images/logo-react.png";

export default function Navbar(props) {

  return (
    <nav className={props.darkMode ? "dark": ""}>
      <div className="logo">
        <img className="logo__image" src={logo} alt="react logo" />
        <h2 className="logo__title">ReactFacts</h2>
      </div>
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}
