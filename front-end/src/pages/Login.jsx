import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
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
 
    setTimeout(() => {
      console.log(formData);
      setIsLoading(false);
      navigate("/home");
    }, 2000);
  };

  return (
    <div className="container">
      <div className="form-container sign-in">
        <form onSubmit={handleSubmit}>
          <h1>Login In</h1>
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
          <Link to="#" className="forgot-password">
            Forgot Your Password?
          </Link>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
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
          <h1>Welcome, Back!</h1>
          <p>
            Register with your personal details if you don't have an account,
            create one to use all of the site's features.
          </p>
          <Link to="/register" className="btn btn-primary w-100">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;