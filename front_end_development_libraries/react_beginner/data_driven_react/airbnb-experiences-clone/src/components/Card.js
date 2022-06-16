import React from "react";

function Card(props) {
    return (
        <div className="card">
            <img className="card__photo" src={`./images/${props.cardPhoto}`} alt="someone swimming"/>
            <div className="rating">
                <img className="rating__star" src={`./images/${props.star}`} alt="red star"/>
                <p className="rating__value">{props.ratingValue}</p>
                <p className="rating__availability">({props.ratingAvailability}) • {props.location}</p>
            </div>
            <p className="card__description">{props.cardDescription}</p>
            <p className="card__price"><span className="bold">From $ {props.cardPrice}/</span> person</p>
        </div>
    )
}

export default Card