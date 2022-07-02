import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isFriendly: true,
    employment: "",
  });

  console.log(formData);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
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
      <input
        type="checkbox"
        id="isFriendly"
        name="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange}
      />
      <label htmlFor="isFriendly">Are you friendly?</label>
      <fieldset>
        <legend>Current employment status</legend>

        <input
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
          checked={formData.employment === "unemployed"}
          onChange={handleChange}
        ></input>
        <label htmlFor="unemployed">Unemployed</label>

        <input
          type="radio"
          id="partTime"
          name="employment"
          value="partTime"
          checked={formData.employment === "partTime"}
          onChange={handleChange}
        ></input>
        <label htmlFor="partTime">Part Time</label>

        <input
          type="radio"
          id="fullTime"
          name="employment"
          value="fullTime"
          checked={formData.employment === "fullTime"}
          onChange={handleChange}
        ></input>
        <label htmlFor="fullTime">Full Time</label>
      </fieldset>
    </form>
  );
}
