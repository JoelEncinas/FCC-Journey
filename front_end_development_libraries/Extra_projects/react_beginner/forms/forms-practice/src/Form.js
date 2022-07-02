import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  console.log(formData);

  function handleChange(event) {
    setFormData(prevFormData => {
        return {
            ...prevFormData, 
            [event.target.name]: event.target.value
        }
    })
  }

  return (
    <form>
      <input type="text" placeholder="First Name" name="firstName" onChange={handleChange} />
      <input type="text" placeholder="Last Name" name="lastName" onChange={handleChange} />
      <input type="email" placeholder="jhon@mail.com" name="email" onChange={handleChange} />
    </form>
  );
}
