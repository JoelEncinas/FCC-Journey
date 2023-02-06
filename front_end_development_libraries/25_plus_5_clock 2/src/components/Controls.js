import React from "react";

const Controls = ({ sessionStatus, flipTimer, resetApp }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <button id="start_stop" className="btn btn-primary mx-2" onClick={flipTimer}>
        {sessionStatus}
      </button>
      <button id="reset" className="btn btn-primary mx-2" onClick={resetApp}>
        Reset
      </button>
    </div>
  );
};

export { Controls };
