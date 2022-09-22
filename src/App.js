import Gif from "./components/Gif";
import Button from "./components/Button";
import React, {useState} from "react";
import './App.css';

function App() {
const apiKey = "dQCnxztdnfv24B7GncL18PsyBRZlEWHv";
const gif = `api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

  return (
    <div className="App">
      <Button />
      <Gif />
    </div>
  );
}

export default App;
