import React from "react";

function Card(props) {
    let badgeText = ''

    if (props.item.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (props.item.location === 'Online') {
        badgeText = 'ONLINE'
    }
    
    return (
        <div className="card">
            {badgeText !== '' && <div className="card__badge">{badgeText}</div>}
            <img className="card__photo" src={`./images/${props.item.coverImg}`} alt="someone swimming"/>
            <div className="rating">
                <img className="rating__star" src={`./images/${props.star}`} alt="red star"/>
                <p className="rating__value">{props.item.stats.rating}</p>
                <p className="rating__availability">({props.item.stats.reviewCount}) • {props.item.location}</p>
            </div>
            <p className="card__description">{props.item.title}</p>
            <p className="card__price"><span className="bold">From $ {props.item.price}/</span> person</p>
        </div>
    )
}

export default Card