import React from "react";

const NumberButton = (props) => {
  return (
    <>
      {props.numberSet.map( (item) => <button onClick={ () => props.pushed(item, "number")}>{item}</button>)}
    </>
  );
};

export default NumberButton;
