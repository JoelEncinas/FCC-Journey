import React from "react"

function Meme() {
    return (
        <main className="meme">
            <form className="meme__form">
                <div className="meme__inputs">
                    <input className="meme__input" type='text' placeholder="Top text"></input>
                    <input className="meme__input" type='text' placeholder="Bottom text"></input>
                </div>
                <button className="meme__input-submit">Generate meme</button>
            </form>
        </main>
    )
}

export default Meme