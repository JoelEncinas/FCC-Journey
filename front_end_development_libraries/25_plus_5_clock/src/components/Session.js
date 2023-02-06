import React from "react";

const Session = ({ session }) => {
  return (
    <div>
      <h2 id="timer-label" className="text-center">
        Session
      </h2>
      <h1 id="time-left" className="text-center">
        {session}
      </h1>
    </div>
  );
};

export { Session };
