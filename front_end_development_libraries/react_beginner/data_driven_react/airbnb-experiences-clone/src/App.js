import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

function App() {
  const starPath = 'red-star.png'

  const cards = data.map(card => 
    { return <Card cardPhoto = {card['coverImg']} star = {starPath} ratingValue = {card['stats']['rating']} ratingAvailability = {card['stats']['reviewCount']} location = {card['location']} cardDescription = {card['title']} cardPrice = {card['price']} /> }
  )


  return (
    <div className="page-container">
      <Navbar/>
      <Hero/>
      <div className="card-container">
        {cards}
      </div>
    </div>
  );
}

export default App;
