const doc = $(document);

// Timers setters
const breakIncrementBtn = $("#break-increment");
const breakDecrementBtn = $("#break-decrement");
const breakLengthLabel = $("#break-length");
const sessionIncrementBtn = $("#session-increment");
const sessionDecrementBtn = $("#session-decrement");
const sessionLengthLabel = $("#session-length");

// Session display
const timerLabel = $("#timer-label");
const timer = $("#time-left");

// Controls
const startStopBtn = $("#start_stop");
const resetBtn = $("#reset");

// audio
const audioSrc = $("#beep");

// app state
let sessionTimerValue = 25 * 60;
let breakTimerValue = 5 * 60;
let currentTimerValue = 25 * 60;
let timerType = "Session";
let timerStatus = "Play";
let startSession = false;

// util
function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}

// session & break buttons
function handleBreakIncrement() {
  if (timerStatus === "Play") {
    if (parseInt(breakLengthLabel.text()) === 60) {
      return;
    } else {
      breakLengthLabel.text(parseInt(breakLengthLabel.text()) + 1);
      breakTimerValue += 60;
    }
  }
}

function handleBreakDecrement() {
  if (timerStatus === "Play") {
    if (parseInt(breakLengthLabel.text()) === 1) {
      return;
    } else {
      breakLengthLabel.text(parseInt(breakLengthLabel.text()) - 1);
      breakTimerValue -= 60;
    }
  }
}

function handleSessionIncrement() {
  if (timerStatus === "Play") {
    if (parseInt(sessionLengthLabel.text()) === 60) {
      return;
    } else {
      sessionLengthLabel.text(parseInt(sessionLengthLabel.text()) + 1);
      currentTimerValue += 60;
      sessionTimerValue += 60;
      timer.text(formatTime(sessionTimerValue));
    }
  }
}

function handleSessionDecrement() {
  if (timerStatus === "Play") {
    if (parseInt(sessionLengthLabel.text()) === 1) {
      return;
    } else {
      sessionLengthLabel.text(parseInt(sessionLengthLabel.text()) - 1);
      currentTimerValue -= 60;
      sessionTimerValue -= 60;
      timer.text(formatTime(sessionTimerValue));
    }
  }
}

setInterval(function () {
  if (timerStatus === "Play") {
    return;
  }

  timer.text(formatTime(currentTimerValue));

  if (currentTimerValue === 0) {
    clearInterval(interval);
    audioSrc[0].play();

    setTimeout(() => {
      if (sessionType === "Session") {
        currentTimerValue = breakTimerValue;
        sessionType = "Break";
      } else if (sessionType === "Break") {
        currentTimerValue = sessionTimerValue;
        sessionType = "Session";
      }
    }, 1000);
  } else {
    currentTimerValue -= 1;
  }
}, 1000);

function switchStatus() {
  if (timerStatus === "Play") {
    startStopBtn.text("Pause");
    timerStatus = "Pause";
  } else if (timerStatus === "Pause") {
    startStopBtn.text("Play");
    timerStatus = "Play";
  }
}

function resetApp() {
  // labels
  timer.text(formatTime(25 * 60));
  breakLengthLabel.text(5);
  sessionLengthLabel.text(25);
  timerLabel.text("Session");
  startStopBtn.text("Play");

  // status
  sessionTimerValue = 25 * 60;
  breakTimerValue = 5 * 60;
  currentTimerValue = 25 * 60;
  timerType = "Session";
  timerStatus = "Play";
  audioSrc[0].currentTime = 0;
}

doc.ready(function () {
  // break & session buttons logic
  breakIncrementBtn.click(handleBreakIncrement);
  breakDecrementBtn.click(handleBreakDecrement);
  sessionIncrementBtn.click(handleSessionIncrement);
  sessionDecrementBtn.click(handleSessionDecrement);

  // play & reset
  startStopBtn.click(switchStatus);
  resetBtn.click(resetApp);
});
