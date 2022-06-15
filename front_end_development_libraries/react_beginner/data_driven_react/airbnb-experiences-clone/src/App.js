import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

function App() {
  return (
    <div className="page-container">
      <Navbar/>
      <Hero/>
      <Card/>
    </div>
  );
}

export default App;
