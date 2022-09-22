// import Gif from "./components/Gif";
import Button from "./components/Button";
import Footer from "./components/Footer";
import React, {useState} from "react";
import './App.css';
import Title from "./components/Title";

function App() {
const apiKey = "dQCnxztdnfv24B7GncL18PsyBRZlEWHv";
const gif = `api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

  return (
    <div className="App">
      <Title />
      <Button />
      <Footer />
      {/* <Gif /> */}
    </div>
  );
}

export default App;
