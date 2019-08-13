import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      {props.specialSet.map( (item) => <button class="special" onClick={ () => props.pushed(item, "special")}>{item}</button>)}
    </>
  );
};

export default SpecialButton;