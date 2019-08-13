import React, { useState } from "react";
import OperatorButton from "./OperatorButton";
import { operators } from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  const [operatorState, setOperatorState] = useState(operators);
  return (
    <div class="operators">
      <OperatorButton operatorSet = { operatorState } pushed = {props.pushed} />
    </div>
  );
};

export default Operators;
