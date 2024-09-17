import { useState } from "react";

function Day6() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  console.log(formData);
  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.userName.trim()) {
      validationErrors.userName = "username is required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationErrors.email = "email is not valid";
    }
    if (!formData.email.trim()) {
      validationErrors.password = "password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password should be at least 6 charachters";
    }

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  }
  return (
    <form
      className="flex justify-center align-center text-lg flex-col"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name" className="text-lg">
          Name
        </label>
        <input
          name="userName"
          type="text"
          id="name"
          placeholder="Please type your name"
          onChange={handleChange}
        />
        {errors.userName && <span>{errors.userName}</span>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          id="email"
          placeholder="Please type your email"
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          id="password"
          placeholder="Please type your password"
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <button className="border ">Submit</button>
    </form>
  );
}

export default Day6;
