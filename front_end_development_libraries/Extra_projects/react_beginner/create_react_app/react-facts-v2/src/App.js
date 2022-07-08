import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./styles.css";

export default function App() {
  const [siteMode, setSiteMode] = React.useState({ darkMode: false });

  function toggleDarkMode() {
    setSiteMode((prevState) => ({
      darkMode: !prevState.darkMode,
    }));

    console.log(siteMode.darkMode);
  }

  return (
    <div className="container">
      <Navbar darkMode={siteMode.darkMode} toggleDarkMode={toggleDarkMode} />
      <Main />
    </div>
  );
}
