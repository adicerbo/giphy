import React from "react";

function Gifs({gif}) {
  console.log(gif.message)
  return (
  <>
    <img src={gif.message} alt="" />
  </>
  )
}

export default Gifs;