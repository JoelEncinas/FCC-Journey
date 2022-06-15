import React from "react";
import Header from "./components/Header"
import Contact from "./components/Contact"
import Info from "./components/Info"
import Socials from "./components/Socials"

function App() {
  return (
    // components
    <div className="content">
      <Header/>
      <Contact/>
      <Info/>
      <Socials/>
    </div>
  );
}

export default App;
