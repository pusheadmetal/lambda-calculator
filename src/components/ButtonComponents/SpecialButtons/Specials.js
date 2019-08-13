import React, { useState } from "react";
import { specials } from "../../../data.js";
import SpecialButton from "./SpecialButton.js";

//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials);

  return (
    <div class="numbers">
      <SpecialButton specialSet = { specialState } pushed = {props.pushed} />
    </div>
  );
};

export default Specials;
