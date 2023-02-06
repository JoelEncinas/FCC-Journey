import React from "react";

const Session = ({ session }) => {
  return (
    <div>
      <h2 className="text-center">Session</h2>
      <h1 className="text-center">{session}</h1>
    </div>
  );
};

export { Session };
