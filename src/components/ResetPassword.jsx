import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../App.css';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { token } = useParams();

  const validate = () => {
    const validationErrors = {};
    if (!password) {
      validationErrors.password = "Password is required";
    }
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      Axios.post(`https://api-1-xq9f.onrender.com/auth/reset-password/${token}`, {
        password,
      }).then(response => {
        if (response.data.status) {
          alert("Your password has been reset");
          navigate('/login'); // Navigate to login page on successful reset
        }
        console.log(response.data);
      }).catch(err => {
        if (err.response && err.response.status === 400) {
            alert('Invalid token or token has been expired');
            navigate('/forgotPassword'); // Navigate to login page on
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
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <label htmlFor="password">New Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="******"
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <button type="submit">Set</button>
      </form>
    </div>
  );
};

export default ResetPassword;
