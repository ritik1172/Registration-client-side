import React, { useState } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    return errors;
  };


  Axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      Axios.post("https://api-1-xq9f.onrender.com/login", {
        email,
        password,
      }).then(response => {
        if (response.data.status) {
          alert("Login Successful");
          navigate('/home'); // Navigate to dashboard or desired page on successful login
        }
      }).catch(err => {
        if (err.response && err.response.status === 400) {
          alert('Invalid email or password');
        } else if (err.response && err.response.status === 404) {
          alert("User not found");
        } else {
          console.log(err);
        }
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          autoComplete="off"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="******"
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Login</button>
       <h4> <Link to="/forgotPassword">Forgot Password</Link></h4>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </form>
    </div>
  );
};

export default Login;
