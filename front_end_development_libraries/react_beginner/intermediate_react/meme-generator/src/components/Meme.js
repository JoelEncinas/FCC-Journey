import React from "react"
import image from "./../images/shut-up-and-take-my-money.jpg"
import memesData from "../memesData"

function Meme() {
    const [currentImage, newImage] = React.useState(image)

    function getMemeImage() {
        let random = Math.floor(Math.random() * memesData.data.memes.length)
        changeState(memesData.data.memes[random].url)
    }

    function handleMouseEnter(){
        // console.log('entered img')
    }

    function changeState(newState){
        newImage(newState)
    }

    /* CHALLENGE
    let thingsArray = ['Thing 1']

    function addItemToArray(){
        thingsArray.push('Thing ' + (thingsArray.length + 1))
        console.log(thingsArray.length)
        console.log(thingsArray)
    }
    */

    return (
        <div>
            <main className="meme">
                <div className="meme__form">
                    <div className="meme__inputs">
                        <input className="meme__input" type='text' placeholder="Top text"></input>
                        <input className="meme__input" type='text' placeholder="Bottom text"></input>
                    </div>
                    <button className="meme__input-submit" onClick={getMemeImage}>Generate meme</button>
                    <img className="meme__image" onMouseEnter={handleMouseEnter} src={currentImage} alt="meme"/>
                </div>
            </main>
        </div>
    )
}

export default Meme
