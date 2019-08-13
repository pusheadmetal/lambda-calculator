import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      {Object.values(props.operatorSet).map( (item) => <button class = "ops" onClick={ () => props.pushed(item.value, "operator")}>{item.char}</button>)}
    </>
  );
};

export default OperatorButton;
