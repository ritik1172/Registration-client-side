import React, { useState } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!username.trim()) {
      errors.username = 'Username is required';
    }
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      Axios.post("https://api-1-xq9f.onrender.com/auth/signup", {
        username,
        email,
        password,
      }).then(response => {
        if (response.data.status) {
          alert("Registration Sucessful")
          navigate('/login'); // Navigate to login page on successful signup
        }
      }).catch(err => {
        if (err.response && err.response.status === 400) {
            alert('User already exists Please Login');
          } else {
            console.log(err);
          }
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
    <div className="head">
        <h2>Register in Sartia Global</h2>
    </div>
    <div className="sign-up-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        {errors.username && <p className="error">{errors.username}</p>}

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

        <button type="submit">Sign Up</button>
        <p>Have an Account? <Link to="/login">Login</Link></p>
      </form>
    </div>
    </>
  );
};

export default Signup;
