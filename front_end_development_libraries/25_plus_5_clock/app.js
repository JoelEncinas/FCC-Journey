import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import * as React from "https://cdn.skypack.dev/react@17.0.1";

const App = () => {
  const [breakLength, setBreakLength] = React.useState(5);
  const [sessionLength, setSessionLength] = React.useState(25);
  const [play, setPlay] = React.useState(false);
  const [section, setSection] = React.useState("SESSION");
  const [timeLeft, setTimeLeft] = React.useState(1500);

  // update timer
  const timeout = setTimeout(() => {
    if (timeLeft && play) {
      setTimeLeft(timeLeft - 1);
    }
  }, 1000);

  // session and break controls
  const handleSessionIncrease = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      setTimeLeft(timeLeft + 60);
    }
  };

  const handleSessionDecrease = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      setTimeLeft(timeLeft - 60);
    }
  };

  const handleBreakIncrease = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  };

  const handleBreakDecrease = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  };

  // title of sectuib
  const title = section === "SESSION" ? "Session" : "Break";

  // convert time
  const timeFormatter = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft - minutes * 60;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const handlePlay = () => {
    clearTimeout(timeout);
    setPlay(!play);
  };

  const resetTimer = () => {
    const audio = document.getElementById("beep");
    if (!timeLeft && section === "SESSION") {
      setTimeLeft(breakLength * 60);
      setSection("BREAK");
      audio.play();
    }
    if (!timeLeft && section === "BREAK") {
      setTimeLeft(sessionLength * 60);
      setSection("SESSION");
      audio.pause();
      audio.currentTime = 0;
    }
  };

  const clock = () => {
    if (play) {
      timeout;
      resetTimer();
    } else {
      clearTimeout(timeout);
    }
  };

  const handleReset = () => {
    clearTimeout(timeout);
    setPlay(false);
    setTimeLeft(1500);
    setBreakLength(5);
    setSessionLength(25);
    setSection("SESSION");
    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
  };

  React.useEffect(() => {
    clock();
  }, [play, timeLeft, timeout]);

  return (
    <div className="container">
      <div className="app-container w-100">
        <h1 className="text-center mb-5">25 + 5 Clock</h1>
        <div className="">
          <div className="break-session-length d-flex flex-direction-column justify-content-between mb-5">
            <div>
              <h3 className="text-center" id="break-label">
                Break Length
              </h3>
              <div className="d-flex justify-content-center align-items-center my-3">
                <button
                  className="btn btn-light rounded-circle"
                  disabled={play}
                  onClick={handleBreakIncrease}
                  id="break-increment"
                >
                  ➕
                </button>
                <span className="lead mx-3" id="break-length">
                  {breakLength}
                </span>
                <button
                  className="btn btn-light rounded-circle"
                  disabled={play}
                  onClick={handleBreakDecrease}
                  id="break-decrement"
                >
                  ➖
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-center" id="session-label">
                Session Length
              </h3>
              <div className="d-flex justify-content-center align-items-center my-3">
                <button
                  className="btn btn-light rounded-circle"
                  disabled={play}
                  onClick={handleSessionIncrease}
                  id="session-increment"
                >
                  ➕
                </button>
                <span className="lead mx-3" id="session-length">
                  {sessionLength}
                </span>
                <button
                  className="btn btn-light rounded-circle"
                  disabled={play}
                  onClick={handleSessionDecrease}
                  id="session-decrement"
                >
                  ➖
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="timer-controls my-3">
          <div className="timer">
            <h2 className="text-center" id="timer-label">
              {title}
            </h2>
            <h2 className="text-center display-3" id="time-left">
              {timeFormatter()}
            </h2>
          </div>
          <div className="time-controls d-flex justify-content-center">
            <button
              className="btn btn-primary mx-3"
              onClick={handlePlay}
              id="start_stop"
            >
              {play ? "Stop" : "Play"}
            </button>
            <button
              className="btn btn-danger mx-3"
              onClick={handleReset}
              id="reset"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      <audio
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
      <div id="author">
        <p class="text-center mt-5 mb-0">
          <a
            id="github-link"
            href="https://github.com/JoelEncinas"
            target="_blank"
          >
            Made by Joel
          </a>
        </p>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
