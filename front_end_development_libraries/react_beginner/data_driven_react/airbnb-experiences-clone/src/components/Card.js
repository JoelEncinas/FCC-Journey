import React from "react";

function Card(props) {
    let badgeText = ''

    if (props.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (props.location === 'Online') {
        badgeText = 'ONLINE'
    }
    return (
        <div className="card">
            {badgeText !== '' && <div className="card__badge">{badgeText}</div>}
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