import React, { useState } from "react";
import { BreakLength } from "./BreakLength";

const App = () => {
  // initialize it at 5
  const [breakLength, setBreakLength] = useState(5);

  // handle breakLength timer
  const handleIncrement = () => {
    setBreakLength(breakLength + 1);
  };

  const handleDecrement = () => {
    if (breakLength === 0) {
      setBreakLength(0);
    } else {
      setBreakLength(breakLength - 1);
    }
  };

  return (
    <div className="container-fluid h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="App">
          <h1 className="text-center">Pomodoro Clock</h1>

          <div className="d-flex justify-content-center align-items-center">
            <BreakLength
              breakLength={breakLength}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
            ></BreakLength>
            <div>
              <h2 className="text-center">Session Length</h2>
              <div className="d-flex justify-content-center align-items-center">
                <button className="btn btn-primary mx-2">+</button>
                <p className="my-0 mx-2">25</p>
                <button className="btn btn-primary mx-2">-</button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-center">Session</h2>
            <h1 className="text-center">25:00</h1>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-primary mx-2">Play</button>
            <button className="btn btn-primary mx-2">Pause</button>
            <button className="btn btn-primary mx-2">Reset</button>
          </div>

          <div id="author">
            <p className="text-center mt-3 mb-0">
              <a
                id="github-link"
                href="https://github.com/JoelEncinas"
                target="_blank"
                rel="noreferrer"
              >
                Made by Joel
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
