import React from "react";

export default function Form() {
  const [firstName, setFirstName] = React.useState("");

  function handleChange(event) {
    console.log(event);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
      ></input>
    </form>
  );
}
