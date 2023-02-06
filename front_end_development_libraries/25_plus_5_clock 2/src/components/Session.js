import React from "react";

const Session = ({ sessionType, session }) => {
  return (
    <div className="mt-3 mb-5">
      <h2 id="timer-label" className="text-center">
        {sessionType}
      </h2>
      <h1 id="time-left" className="text-center">
        {session}
      </h1>
    </div>
  );
};

export { Session };
