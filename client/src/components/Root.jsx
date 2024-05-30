import React from 'react'
import { Link } from 'react-router-dom'
import '../Root.css'

const Root = () => {
  return (
    <div className="container">
        <h1>Sartia Global</h1>
      <button><Link to="/signup">Sign Up</Link></button>
      <button><Link to="/login">Log In</Link></button>
    </div>
  )
}

export default Root
