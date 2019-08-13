import React, { useState } from "react";
import "./App.css";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Display from "./components/DisplayComponents/Display";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";


function App() {
  const [numberPushed, setNumberPushed] = useState();


  function handlePushed(buttonPushed, whoRang){
    if (whoRang === "number"){
      handleNumberPushed(buttonPushed);
    }
    if (whoRang === "operator"){
      handleOperatorPushed(buttonPushed);
    }
    if (whoRang === "special"){
      handleSpecialPushed(buttonPushed);
    }
  }

  function handleNumberPushed(buttonPushed){
    if (!numberPushed){
      setNumberPushed(buttonPushed);
    } else{setNumberPushed(numberPushed + buttonPushed);}
  }

  function handleOperatorPushed(buttonPushed){
    if (!numberPushed){
      //do nothing 
    } else if (buttonPushed !== "="){
      setNumberPushed(numberPushed + buttonPushed);
    } else {
      if (numberPushed.includes("+")){
        let operation = numberPushed.split('+');
        let operationNumbers = operation.map( (item) => Number(item));
        let totalValue = operationNumbers.reduce ( function (total, currentValue) {
          return total + currentValue;
        } );
        setNumberPushed(totalValue);
        }
      if (!numberPushed.startsWith("-")){
        if (numberPushed.includes("-")){
          let operation = numberPushed.split('-');
          let operationNumbers = operation.map( (item) => Number(item));
          let totalValue = operationNumbers.reduce ( function (total, currentValue) {
            return total - currentValue;
          });
          setNumberPushed(totalValue);  
        }
      } else{
          let operation = numberPushed.split('-');
          let operationNumbers = operation.map( (item) => Number(item));
          let totalValue = operationNumbers.reduce ( function (total, currentValue) {
            return total - currentValue;
          });
          setNumberPushed(totalValue);  
        }
      
      if (numberPushed.includes("*")){
        let operation = numberPushed.split('*');
        let operationNumbers = operation.map( (item) => Number(item));
        let totalValue = operationNumbers.reduce( function (total, currentValue) {
          
          return (total * currentValue);
      
        } );
        setNumberPushed(totalValue);
      }

      if (numberPushed.includes("/")){
        let operation = numberPushed.split('/');
        let operationNumbers = operation.map( (item) => Number(item));
        let totalValue = operationNumbers.reduce( function (total, currentValue) {
          if ( currentValue === 0 ){
            return "DIVIDE BY ZERO ERR!";
          }
          else{
            return (total / currentValue);
          }
        });
        setNumberPushed(totalValue);
      }
        
    }
  }
        
  

  function handleSpecialPushed(buttonPushed){
    if(!numberPushed){
      //do nothing
    }else{
      if (buttonPushed === "C"){
        setNumberPushed();
      }
      if (buttonPushed === "+/-"){
        setNumberPushed( -(numberPushed) );
      }
    }
  }

    
  

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <div class="display-container">
          <Display pushed = {numberPushed} />
        </div>
        <div class="buttons-container">
          <div class="specials-numbers-container">
            <Specials pushed = {handlePushed} />
            <Numbers pushed = {handlePushed} />
          </div>
          <div class="operators-container">
            <Operators pushed = {handlePushed} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
