import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isFriendly: true,
  });

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <form>
      {/* Controlled components by setting value equal to the state */}
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="jhon@mail.com"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        placeholder="Your comment here"
        name="comment"
        value={formData.comment}
        onChange={handleChange}
      />
      <input type="checkbox" id="isFriendly" checked={formData.isFriendly} />
      <label htmlFor="isFriendly">Are you friendly?</label>
    </form>
  );
}
