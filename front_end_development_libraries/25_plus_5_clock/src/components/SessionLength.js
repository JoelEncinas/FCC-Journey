import React from "react";

const SessionLength = ({
  sessionLength,
  handleSessionIncrement,
  handleSessionDecrement,
}) => {
  return (
    <div className="m-5">
      <h3 id="session-label" className="text-center">
        Session Length
      </h3>
      <div className="d-flex justify-content-center align-items-center">
        <button
          id="session-increment"
          className="btn btn-primary mx-2"
          onClick={handleSessionIncrement}
        >
          +
        </button>
        <p id="session-length" className="my-0 mx-2">
          {sessionLength / 60}
        </p>
        <button
          id="session-decrement"
          className="btn btn-primary mx-2"
          onClick={handleSessionDecrement}
        >
          -
        </button>
      </div>
    </div>
  );
};

export { SessionLength };
