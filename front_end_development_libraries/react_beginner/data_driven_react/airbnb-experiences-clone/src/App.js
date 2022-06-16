import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

function App() {
  return (
    <div className="page-container">
      <Navbar/>
      <Hero/>
      <Card
        cardPhoto = 'swimming.jpeg'
        ratingValue = '5.0'
        ratingAvailability = '6'
        cardDescription = 'Swimming lessons'
        cardPrice = {136}
        star = 'red-star.png'
      />
    </div>
  );
}

export default App;
