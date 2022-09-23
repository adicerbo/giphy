import React from "react";

function Gifs({gif}) {
  
  return (
  <>
    <img src={gif.url} alt="" />
  </>
  )
}

export default Gifs;