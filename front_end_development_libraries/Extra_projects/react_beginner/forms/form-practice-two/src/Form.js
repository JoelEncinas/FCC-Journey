import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    user: "",
    password: "",
    repPassword: "",
    newsletter: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    if(formData.password === formData.repPassword){
        console.log("Successfully signed up");
    } else {
        console.log("Passwords don't match");
    }

    if(formData.newsletter){
        console.log("Thanks for signing up");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="user"
        value={formData.user}
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="repPassword"
        value={formData.repPassword}
        onChange={handleChange}
      ></input>
      <input
        type="checkbox"
        id="newsletter"
        name="newsletter"
        value={formData.newsletter}
        onChange={handleChange}
      ></input>
      <label htmlFor="newsletter">Join the newsletter</label>
      <button>Log in</button>
    </form>
  );
}
