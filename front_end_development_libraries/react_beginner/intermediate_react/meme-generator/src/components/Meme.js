import React from "react"
import image from "./../images/shut-up-and-take-my-money.jpg"

function Meme() {
    function handleClick() {
        console.log('click')
    }

    return (
        <main className="meme">
            <form className="meme__form">
                <div className="meme__inputs">
                    <input className="meme__input" type='text' placeholder="Top text"></input>
                    <input className="meme__input" type='text' placeholder="Bottom text"></input>
                </div>
                <button className="meme__input-submit" onClick={handleClick}>Generate meme</button>
                <img className="meme__image" src={image} alt="meme"/>
            </form>
        </main>
    )
}

export default Meme
