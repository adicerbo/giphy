import React, { useState } from "react";
import Button from "./components/Button";
import Gifs from "./components/Gifs";
import Title from "./components/Title";
import Footer from "./components/Footer";
import "./App.css"

const App = () => {
  const [gif, setGif] = useState({});

  const handleSubmit = async () => {
    const myKey = "W9ThL38OlmMnIif0P13v036495Y4OMVA";
    const gif = `https://api.giphy.com/v1/gifs/random?api_key=${myKey}`;

    let res = await fetch(gif);
    let json = await res.json();
    setGif(json.data);
  };

  return (
    <div className="App">
      <Title />
      <Footer />
      <Button handleSubmitFromApp={handleSubmit} /> 
      <Gifs gif={gif} /> 
    </div>
  );
}
export default App;
 