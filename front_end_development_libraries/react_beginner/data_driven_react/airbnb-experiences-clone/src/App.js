import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

function App() {
  const starPath = 'red-star.png'

  const cards = data.map(card => 
    { return (
      <Card 
        // pass whole item instead of every prop of data
        key = {card['id']}
        // can use spread operator too to simplify it even more
        // although it obscures the data that we are pasing
        // {...card}
        item = {card}
        star = {starPath} 
        // cardPhoto = {card['coverImg']} 
        // ratingValue = {card['stats']['rating']} 
        // ratingAvailability = {card['stats']['reviewCount']} 
        // location = {card['location']} 
        // cardDescription = {card['title']} 
        // cardPrice = {card['price']} 
        // openSpots = {card['openSpots']}
      />) }
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
