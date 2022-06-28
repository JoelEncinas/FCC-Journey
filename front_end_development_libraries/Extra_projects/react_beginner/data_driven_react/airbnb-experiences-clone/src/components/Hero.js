import React from "react";
import hero_img from "./../images/hero.jpg"

function Hero(){
    return (
        <section className="hero">
            <img className="hero__img" src={hero_img} alt="waterfall in forest"/>
            <h1 className="hero__header">Online Experiences</h1>
            <p className="hero__text">Join unique interactive activities led by one-of-a-kind hosts -- all without leaving home.</p>
        </section>
    )
}

export default Hero