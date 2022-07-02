import React from "react";

export default function Form() {
  const [userInfo, setName] = React.useState([], []);

  console.log(userInfo);

  function handleChange(event) {
    if (event.target.placeholder === "First Name") {
      setName([userInfo[0], event.target.value]);
    } else {
      setName([event.target.value, userInfo[1]]);
    }
    // console.log(event.target.value);
  }

  return (
    <form>
      <input type="text" placeholder="First Name" onChange={handleChange} />
      <input type="text" placeholder="Last Name" onChange={handleChange} />
    </form>
  );
}
