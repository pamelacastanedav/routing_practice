import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Word = (props) => {
  //params grabs the variable from url/path
  const { word } = useParams();
  const { color } = useParams();
  const { bccolor } = useParams();
  const style = {
    backgroundColor: bccolor,
    color: color,
  };
  console.log(bccolor);
  console.log(color);
  //   console.log(isNaN(number));
  return (
    <div>
      <p style={style}>The word is: {word}</p>
    </div>
  );
};

export default Word;
