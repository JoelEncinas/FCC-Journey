import React from "react";

const BreakLength = ({ breakLength, handleIncrement, handleDecrement }) => {
  return (
    <div>
      <h2 className="text-center">Break Length</h2>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-primary mx-2" onClick={handleIncrement}>
          +
        </button>
        <p className="my-0 mx-2">{breakLength}</p>
        <button className="btn btn-primary mx-2" onClick={handleDecrement}>
          -
        </button>
      </div>
    </div>
  );
};

export { BreakLength };
