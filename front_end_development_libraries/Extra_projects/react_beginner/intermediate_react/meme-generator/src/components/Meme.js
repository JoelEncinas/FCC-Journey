import React from "react";
import image from "./../images/shut-up-and-take-my-money.jpg";

function Meme() {
  const [meme, setMeme] = React.useState({
    image: image,
    top: "",
    bot: "",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemes(data.data.memes))
      .catch((err) => console.error(err));
  }, []);

  console.log(allMemes);

  function getMemeImage() {
    const memesArray = allMemes;
    let random = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[random].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      image: url,
    }));
  }

  function handleMouseEnter() {
    // console.log('entered img')
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
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
            <input
              value={meme.top}
              name="top"
              onChange={handleChange}
              className="meme__input"
              type="text"
              placeholder="Top text"
            ></input>
            <input
              value={meme.bot}
              name="bot"
              onChange={handleChange}
              className="meme__input"
              type="text"
              placeholder="Bottom text"
            ></input>
          </div>
          <button className="meme__input-submit" onClick={getMemeImage}>
            Generate meme
          </button>
          <div className="meme__image-container">
            <img
              className="meme__image"
              onMouseEnter={handleMouseEnter}
              src={meme.image}
              alt="meme"
            />
            <h2 className="meme__text top">{meme.top}</h2>
            <h2 className="meme__text bottom">{meme.bot}</h2>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Meme;
