import React from "react";

const Keypad = ({
  handleResetClick,
  handleNumberClick,
  handleOperatorClick,
  handleEqualClick,
  handleDecimalClick,
}) => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <button
          id="clear"
          className="btn btn-block btn-danger m-1"
          onClick={handleResetClick}
        >
          C
        </button>
      </div>
    </div>
    <div className="row">
      <div className="col-3">
        <button
          id="one"
          className="btn btn-block btn-primary m-1"
          onClick={() => handleNumberClick("1")}
        >
          1
        </button>
      </div>{" "}
      <div className="col-3">
        <button
          id="two"
          className="btn btn-block btn-primary m-1"
          onClick={() => handleNumberClick("2")}
        >
          2
        </button>{" "}
      </div>{" "}
      <div className="col-3">
        <button
          id="three"
          className="btn btn-block btn-primary m-1"
          onClick={() => handleNumberClick("3")}
        >
          3
        </button>{" "}
      </div>{" "}
      <div className="col-3">
        <button
          id="add"
          className="btn btn-block btn-success m-1"
          onClick={() => handleOperatorClick("+")}
        >
          +
        </button>{" "}
      </div>
    </div>
    <div className="row">
      {" "}
      <div className="col-3">
        <button
          id="four"
          className="btn btn-block btn-primary m-1"
          onClick={() => handleNumberClick("4")}
        >
          4
        </button>{" "}
      </div>{" "}
      <div className="col-3">
        <button
          id="five"
          className="btn btn-block btn-primary m-1"
          onClick={() => handleNumberClick("5")}
        >
          5
        </button>{" "}
      </div>{" "}
      <div className="col-3">
        <button
          id="six"
          className="btn btn-block btn-primary m-1"
          onClick={() => handleNumberClick("6")}
        >
          6
        </button>{" "}
      </div>{" "}
      <div className="col-3">
        <button
          id="subtract"
          className="btn btn-block btn-success m-1"
          onClick={() => handleOperatorClick("-")}
        >
          -
        </button>{" "}
      </div>
    </div>
    <div className="row">
      {" "}
      <div className="col-3">
        <button
          id="seven"
          className="btn btn-block btn-primary m-1"
          onClick={() => handleNumberClick("7")}
        >
          7
        </button>{" "}
      </div>{" "}
      <div className="col-3">
        <button
          id="eight"
          className="btn btn-block btn-primary m-1"
          onClick={() => handleNumberClick("8")}
        >
          8
        </button>{" "}
      </div>{" "}
      <div className="col-3">
        <button
          id="nine"
          className="btn btn-block btn-primary m-1"
          onClick={() => handleNumberClick("9")}
        >
          9
        </button>{" "}
      </div>{" "}
      <div className="col-3">
        <button
          id="multiply"
          className="btn btn-block btn-success m-1"
          onClick={() => handleOperatorClick("*")}
        >
          x
        </button>{" "}
      </div>
    </div>
    <div className="row">
      <div className="col-3">
        <button
          id="zero"
          className="btn btn-block btn-primary m-1"
          onClick={() => handleNumberClick("0")}
        >
          0
        </button>
      </div>
      <div className="col-3">
        <button
          id="decimal"
          className="btn btn-block btn-primary m-1"
          onClick={handleDecimalClick}
        >
          .
        </button>
      </div>
      <div className="col-3">
        <button
          id="equals"
          className="btn btn-block btn-success m-1"
          onClick={handleEqualClick}
        >
          =
        </button>
      </div>
      <div className="col-3">
        <button
          id="divide"
          className="btn btn-block btn-success m-1"
          onClick={() => handleOperatorClick("/")}
        >
          ÷
        </button>
      </div>
    </div>
  </div>
);

export { Keypad };
