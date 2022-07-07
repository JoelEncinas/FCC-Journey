import React from "react";

function WindowTracker() {
  const [windowWidth, windowWidthChange] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", function () {
      windowWidthChange(window.innerWidth);
    });
    console.log("resized");
  }, []);

  return (
    <div>
      <h1>Window width: {windowWidth}</h1>
    </div>
  );
}

export default WindowTracker;
