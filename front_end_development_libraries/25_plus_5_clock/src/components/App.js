import React, { useState, useEffect } from "react";
import { BreakLength } from "./BreakLength";
import { SessionLength } from "./SessionLength";
import { Session } from "./Session";
import { Controls } from "./Controls";

const App = () => {
  const [breakLength, setBreakLength] = useState(300);
  const [sessionLength, setSessionLength] = useState(1500);
  const [session, setSession] = useState(1500);
  const [startSession, setStartSession] = useState(false);
  const [sessionStatus, setSessionStatus] = useState("Play");
  const [sessionType, setSessionType] = useState("Session");

  function playBeep() {
    let beep = document.getElementById("beep");
    beep[0].play();
  }

  // handle break length timer
  const handleBreakIncrement = () => {
    if (sessionStatus === "Play") {
      setBreakLength(Math.min(breakLength + 60, 3600));
    }
  };

  const handleBreakDecrement = () => {
    if (sessionStatus === "Play") {
      setBreakLength(Math.max(breakLength - 60, 60));
    }
  };

  // handle session length timer
  const handleSessionIncrement = () => {
    if (sessionStatus === "Play") {
      setSessionLength(Math.min(sessionLength + 60, 3600));
      setSession(sessionLength);
    }
  };

  const handleSessionDecrement = () => {
    if (sessionStatus === "Play") {
      setSessionLength(Math.max(sessionLength - 60, 60));
      setSession(sessionLength);
    }
  };

  useEffect(() => {
    // check if timer is 0:00 and make a break
    if (!startSession) {
      return;
    }

    let interval = setInterval(() => {
      if (session === 0) {
        if (sessionType === "Session") {
          playBeep();
          setSession(breakLength);
          setSessionType("Break");
        } else if (sessionType === "Break") {
          playBeep();
          setSession(sessionLength);
          setSessionType("Session");
        }
      } else {
        setSession(session - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startSession, session, breakLength, sessionLength, sessionType]);

  const flipTimer = () => {
    setStartSession(!startSession);
    if (sessionStatus === "Play") {
      setSessionStatus("Pause");
    } else if (sessionStatus === "Pause") {
      setSessionStatus("Play");
    }
  };

  const resetApp = () => {
    setBreakLength(300);
    setSessionLength(1500);
    setSession(1500);

    // let beep = document.getElementById("beep");
    // crashes app
    // beep[0].currentTime = 0;
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

          <Session
            sessionType={sessionType}
            session={formattedSession}
          ></Session>

          <Controls
            sessionStatus={sessionStatus}
            flipTimer={flipTimer}
            resetApp={resetApp}
          ></Controls>

          <div className="mt-5" id="author">
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
      <audio
        id="beep"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
    </div>
  );
};

export default App;
