import React, { useState, useEffect } from "react";
import { BreakLength } from "./BreakLength";
import { SessionLength } from "./SessionLength";
import {Session} from "./Session";

const App = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [session, setSession] = useState(1500);

  // handle break length timer
  const handleBreakIncrement = () => {
    setBreakLength(breakLength + 1);
  };

  const handleBreakDecrement = () => {
    if (breakLength === 0) {
      setBreakLength(0);
    } else {
      setBreakLength(breakLength - 1);
    }
  };

  // handle session length timer
  const handleSessionIncrement = () => {
    setSessionLength(sessionLength + 1);
  };

  const handleSessionDecrement = () => {
    if (sessionLength === 0) {
      setSessionLength(0);
    } else {
      setSessionLength(sessionLength - 1);
    }
  };

  useEffect(() => {
    // check if timer is 0:00 and make a break
    let interval = setInterval(() => {
      setSession(session - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [session]);

  // format time
  let minutes = Math.floor(session / 60);
  let seconds = session % 60;
  let formattedSession = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

  return (
    <div className="container-fluid h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="App">
          <h1 className="text-center">Pomodoro Clock</h1>

          <div className="d-flex justify-content-center align-items-center">
            <BreakLength
              breakLength={breakLength}
              handleBreakIncrement={handleBreakIncrement}
              handleBreakDecrement={handleBreakDecrement}
            ></BreakLength>
            <SessionLength
              sessionLength={sessionLength}
              handleSessionIncrement={handleSessionIncrement}
              handleSessionDecrement={handleSessionDecrement}
            ></SessionLength>
          </div>

          <Session session={formattedSession}></Session>

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
