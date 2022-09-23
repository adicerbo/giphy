import React, { useState } from "react";
import Button from "./components/Button";
import Gifs from "./components/Gifs";
import Title from "./components/Title";
import Footer from "./components/Footer";
import "./App.css"

const App = () => {
  const [gif, setGif] = useState({});

  const handleSubmit = async () => {
    const gif = "https://dog.ceo/api/breeds/image/random";

    let res = await fetch(gif);
    let json = await res.json();
    console.log(json)
    setGif(json);
  };

  return (
    <div className="App">
      <Title />
      <Footer />
      <Button handleSubmitFromApp={handleSubmit} /> 
      {gif.message ? <Gifs gif={gif} /> : <h2>Click button for dog</h2> }
    </div>
  );
}
export default App;
 