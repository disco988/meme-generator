import React from "react";


export default function Meme(props) {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);


  React.useEffect(()=> {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes))
  })

  function handleSubmitClick() {
    
    const randomNumber = Math.floor(Math.random() * allMemes.length);

    const url = allMemes[randomNumber].url;

    setMeme((prevState) => ({
      ...prevState,
      randomImage: url,
    }));
  }


  function handleChange (event) {
    const {name,value} = event.target

    setMeme((prevState) => ({
      ...prevState,

      [name]: value

    }))
  }

 

  return (
    <div>
      <div className="form">
        <div className="inputBoxes">
          <input 
          type="text"
           placeholder="Top text" 
           className="inputBox"
           name="topText"
           value={meme.topText}
           onChange={handleChange}
            />
           
          <input
           type="text"
            placeholder="Bottom text" 
            className="inputBox" 
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            />
        </div>
        <input
          type="button"
          value="Get a new meme image"
          className="submitButton"
          onClick={handleSubmitClick}
        />
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
