import React, { useState } from "react";
import { Display } from "./Display";
import { Keypad } from "./Keypad";

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [previousValue, setPreviousValue] = useState(0);
  const [operator, setOperator] = useState(null);

  const handleResetClick = () => {
    setCurrentValue(0);
    setPreviousValue(0);
  };

  const handleNumberClick = (value) => {
    setCurrentValue(currentValue === 0 ? value : currentValue + value);
  };

  const handleOperatorClick = (operator) => {
    setOperator(operator);
    setPreviousValue(currentValue);
    setCurrentValue(0);
  };

  const handleEqualClick = () => {
    switch (operator) {
      case "+":
        setCurrentValue(parseFloat(previousValue) + parseFloat(currentValue));
        setPreviousValue(0);
        break;
      case "-":
        setCurrentValue(parseFloat(previousValue) - parseFloat(currentValue));
        setPreviousValue(0);
        break;
      case "*":
        setCurrentValue(parseFloat(previousValue) * parseFloat(currentValue));
        setPreviousValue(0);
        break;
      case "/":
        setCurrentValue(parseFloat(previousValue) / parseFloat(currentValue));
        setPreviousValue(0);
        break;
      default:
        break;
    }
  };

  const handleDecimalClick = () => {
    if (!currentValue.includes(".")) {
      setCurrentValue(currentValue + ".");
    }
  };

  return (
    <div className="calculator">
      <Display value={currentValue} />
      <div className="keypad">
        <Keypad
          handleNumberClick={handleNumberClick}
          handleOperatorClick={handleOperatorClick}
          handleEqualClick={handleEqualClick}
          handleResetClick={handleResetClick}
          handleDecimalClick={handleDecimalClick}
        />
      </div>
    </div>
  );
};

export default Calculator;
