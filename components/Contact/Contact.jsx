import React, { useState } from "react";
import ContactStyle from "./ContactStyle.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Form submitted!");
    setFormData({ name: "", age: "", email: "", password: "" });
  };

  return (
    <div className="container-fluid  my-5 py-5">
      <header className="text-center lead text-uppercase my-5">
        <h2 className={ContactStyle.title}>Contact Us</h2>
        <div className="underline d-flex justify-content-center align-items-center">
          <span className={ContactStyle.line}></span>
          <span className="star">
            <i className="fa fa-star"></i>
          </span>
          <span className={ContactStyle.line}></span>
        </div>
      </header>
      <div className="container p-4">
        <form className={ContactStyle.floatingForm} onSubmit={handleSubmit}>
          <div className={ContactStyle.formGroup}>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <label>Your Name</label>
          </div>

          <div className={ContactStyle.formGroup}>
            <input
              type="text"
              name="age"
              required
              value={formData.age}
              onChange={handleChange}
            />
            <label>Your Age</label>
          </div>

          <div className={ContactStyle.formGroup}>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <label>Email Address</label>
          </div>

          <div className={ContactStyle.formGroup}>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <label>Password</label>
          </div>

          <button className={ContactStyle.submitBtn} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
