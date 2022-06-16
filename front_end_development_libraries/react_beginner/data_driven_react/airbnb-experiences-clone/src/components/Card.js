import React from "react";
import photo from "./../images/swimming.jpeg";
import star from "./../images/red-star.png";

function Card() {
    return (
        <div className="card">
            <img className="card__photo" src={photo} alt="someone swimming"/>
            <div className="rating">
                <img className="rating__star" src={star} alt="red star"/>
                <p className="rating__value">5.0</p>
                <p className="rating__availability">(6) • USA</p>
            </div>
            <p className="card__description">Swimming lessons</p>
            <p className="card__price"><span className="bold">From $136 /</span> person</p>
        </div>
    )
}

export default Card