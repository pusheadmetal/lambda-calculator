import React, { useState } from "react";
import NumberButton from "./NumberButton";
import { numbers } from "../../../data";


//import any components needed

//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  
  return (
    <div class="numbers">
      <NumberButton numberSet = { numberState } pushed = {props.pushed} />
    </div>
  );
};

export default Numbers;
