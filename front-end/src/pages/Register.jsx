import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    password: "",
    subject: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate a signup API call
    setTimeout(() => {
      console.log(formData);
      setIsLoading(false);
      navigate("/home");
    }, 2000);
  };

  return (
    <div className="container">
      <div className="form-container sign-up">
        <form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
      <TogglePanel />
    </div>
  );
}

function TogglePanel() {
  return (
    <div className="toggle-container">
      <div className="toggle">
        <div className="toggle-panel toggle-right">
          <h1>Hello, Friend!</h1>
          <p>If you have an account already click below to log in</p>
          <Link to="/login" className="btn btn-primary w-100">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;