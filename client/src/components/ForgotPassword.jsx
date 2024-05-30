import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const validationErrors = {};
    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Email address is invalid';
    }
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      Axios.post("http://localhost:3000/auth/forgot-password", {
        email,
      }).then(response => {
        if (response.data.status) {
          alert("Mail sent successfully, check it.");
          navigate('/login'); // Navigate to login page on successful signup
        }
        console.log(response.data);
      }).catch(err => {
        if (err.response && err.response.status === 404) {
            alert('User Not Found');
          } else {
            console.log(err);
          }
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit} className="sign-up-form">
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
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
