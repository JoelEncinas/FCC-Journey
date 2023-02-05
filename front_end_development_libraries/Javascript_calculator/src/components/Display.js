import React from "react";

const Display = ({ value }) => (
  <div className="container mx-1 my-2">
    <div className="row">
      <input id="display" className="form-control mx-3" type="text" value={value} readOnly />
    </div>
  </div>
);

export { Display };
