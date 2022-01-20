import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Number = (props) => {
  //params grabs the variable from url/path
  const { input } = useParams();
  //   console.log(isNaN(number));
  return (
    <div>
      {/* number from params */}
      {isNaN(input) ? (
        <p>This is the word: {input}</p>
      ) : (
        <p>number: {input} </p>
      )}
    </div>
  );
};

export default Number;
