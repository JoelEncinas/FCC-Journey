import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./styles.css";

export default function App() {
  const [siteMode, setSiteMode] = React.useState({ darkMode: false });

  function toggleDarkMode() {
    setSiteMode((prevState) => {
      return !prevState.darkMode;
    });
  }

  return (
    <div className="container">
      <Navbar siteMode={siteMode} toggleDarkMode={toggleDarkMode} />
      <Main />
    </div>
  );
}
