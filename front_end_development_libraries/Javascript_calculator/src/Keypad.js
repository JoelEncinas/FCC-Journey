import React from "react";

const Keypad = ({
  handleResetClick,
  handleNumberClick,
  handleOperatorClick,
  handleEqualClick,
  handleDecimalClick,
}) => (
  <div>
    <div className="row">
      <button onClick={() => handleNumberClick("1")}>1</button>
      <button onClick={() => handleNumberClick("2")}>2</button>
      <button onClick={() => handleNumberClick("3")}>3</button>
      <button onClick={() => handleOperatorClick("+")}>+</button>
    </div>
    <div className="row">
      <button onClick={() => handleNumberClick("4")}>4</button>
      <button onClick={() => handleNumberClick("5")}>5</button>
      <button onClick={() => handleNumberClick("6")}>6</button>
      <button onClick={() => handleOperatorClick("-")}>-</button>
    </div>
    <div className="row">
      <button onClick={() => handleNumberClick("7")}>7</button>
      <button onClick={() => handleNumberClick("8")}>8</button>
      <button onClick={() => handleNumberClick("9")}>9</button>
      <button onClick={() => handleOperatorClick("*")}>x</button>
    </div>
    <div className="row">
      <button onClick={() => handleNumberClick("0")}>0</button>
      <button onClick={handleDecimalClick}>.</button>
      <button onClick={handleEqualClick}>=</button>
      <button onClick={() => handleOperatorClick("/")}>÷</button>
      <button onClick={handleResetClick}>AC</button>
    </div>
  </div>
);

export { Keypad };
