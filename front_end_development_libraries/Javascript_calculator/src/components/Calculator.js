import React, { useState } from "react";
import { Display } from "./Display";
import { Keypad } from "./Keypad";

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [previousValue, setPreviousValue] = useState(0);
  const [operator, setOperator] = useState(null);
  const [lastBtnEqual, setLastBtnEqual] = useState(null);

  const handleResetClick = () => {
    setCurrentValue(0);
    setPreviousValue(0);
    setLastBtnEqual(false);
  };

  const handleNumberClick = (value) => {
    if (currentValue === 0 && value === 0) return;
    if (currentValue === 0) {
      setCurrentValue(value);
    } else {
      setCurrentValue(parseFloat(currentValue + value));
    }
    setLastBtnEqual(false);
  };

  const handleOperatorClick = (operator) => {
    setOperator(operator);
    setPreviousValue(currentValue);
    setCurrentValue(0);
    setLastBtnEqual(false);
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
    
    setLastBtnEqual(true);
  };

  const handleDecimalClick = () => {
    if (!currentValue.includes(".")) {
      setCurrentValue(currentValue + ".");
    }

    setLastBtnEqual(false);
  };

  return (
    <div className="calculator">
      <div className="container">
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
    </div>
  );
};

export default Calculator;
