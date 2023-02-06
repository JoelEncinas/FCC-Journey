import React, { useState, useEffect } from "react";
import { BreakLength } from "./BreakLength";
import { SessionLength } from "./SessionLength";
import { Session } from "./Session";
import { Controls } from "./Controls";

const App = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [session, setSession] = useState(1500);
  const [startSession, setStartSession] = useState(false);
  const [sessionStatus, setSessionStatus] = useState("Play");

  // handle break length timer
  const handleBreakIncrement = () => {
    setBreakLength(Math.min(breakLength + 1, 60));
  };

  const handleBreakDecrement = () => {
    setBreakLength(Math.max(breakLength - 1, 1));
  };

  // handle session length timer
  const handleSessionIncrement = () => {
    setSessionLength(Math.min(sessionLength + 1, 60));
  };

  const handleSessionDecrement = () => {
    setSessionLength(Math.max(sessionLength - 1, 1));
  };

  useEffect(() => {
    // check if timer is 0:00 and make a break
    if (!startSession) {
      return;
    }

    let interval = setInterval(() => {
      setSession(session - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [startSession, session]);

  const flipTimer = () => {
    setStartSession(!startSession);
    if (sessionStatus === "Play") {
      setSessionStatus("Pause");
    } else if (sessionStatus === "Pause") {
      setSessionStatus("Play");
    }
  };

  const resetApp = () => {
    setBreakLength(5);
    setSessionLength(25);
    setSession(1500);
  };

  // format time
  let minutes = Math.floor(session / 60);
  let seconds = session % 60;
  let formattedSession = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`; // ensures there is always 2 digits

  return (
    <div className="container-fluid h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="App">
          <h1 className="text-center">25 + 5 Clock</h1>

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

          <Controls
            sessionStatus={sessionStatus}
            flipTimer={flipTimer}
            resetApp={resetApp}
          ></Controls>

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
