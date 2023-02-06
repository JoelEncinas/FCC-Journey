import React from "react";

const BreakLength = ({
  breakLength,
  handleBreakIncrement,
  handleBreakDecrement,
}) => {
  return (
    <div>
      <h2 id="break-label" className="text-center">
        Break Length
      </h2>
      <div className="d-flex justify-content-center align-items-center">
        <button
          id="break-increment"
          className="btn btn-primary mx-2"
          onClick={handleBreakIncrement}
        >
          +
        </button>
        <p id="break-length" className="my-0 mx-2">
          {breakLength}
        </p>
        <button
          id="break-decrement"
          className="btn btn-primary mx-2"
          onClick={handleBreakDecrement}
        >
          -
        </button>
      </div>
    </div>
  );
};

export { BreakLength };
