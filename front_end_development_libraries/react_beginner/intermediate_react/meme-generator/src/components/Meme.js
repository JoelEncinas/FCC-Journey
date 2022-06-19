import React from "react"
import image from "./../images/shut-up-and-take-my-money.jpg"
import memesData from "../memesData"

function Meme() {
    function getMemeImage() {
        let random = Math.floor(Math.random() * memesData.data.memes.length)
        console.log(memesData.data.memes[random].url)
    }

    function handleMouseEnter(){
        console.log('entered img')
    }

    return (
        <main className="meme">
            <div className="meme__form">
                <div className="meme__inputs">
                    <input className="meme__input" type='text' placeholder="Top text"></input>
                    <input className="meme__input" type='text' placeholder="Bottom text"></input>
                </div>
                <button className="meme__input-submit" onClick={getMemeImage}>Generate meme</button>
                <img className="meme__image" onMouseEnter={handleMouseEnter} src={image} alt="meme"/>
            </div>
        </main>
    )
}

export default Meme
