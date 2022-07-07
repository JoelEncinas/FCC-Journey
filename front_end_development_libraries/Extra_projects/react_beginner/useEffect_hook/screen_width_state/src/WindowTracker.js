import React from "react";

function WindowTracker() {
  const [windowWidth, windowWidthChange] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function watchWidth() {
      console.log("setting up...");
      windowWidthChange(window.innerWidth);
    }

    window.addEventListener("resize", watchWidth);

    return function () {
      console.log("cleaning up...");
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return (
    <div>
      <h1>Window width: {windowWidth}</h1>
    </div>
  );
}

export default WindowTracker;
