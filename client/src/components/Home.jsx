import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Home = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        axios.get('http://localhost:3000/auth/logout', { withCredentials: true }) // Include withCredentials for cookies
          .then(res => {
            if (res.data.status) {
              navigate('/');
            }
          })
          .catch(err => {
            console.log(err);
          });
      };
    
  return (
    <>
    <h1>This is the Home Page</h1>
    <div className="container">
        <h2>Welcome to Sartia Global</h2>
      <br/> <br/>
      <button onClick={handleLogout}>Logout</button>
    </div>
    </>
  )
}

export default Home
