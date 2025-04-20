import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Register.css';
import NESLogo from '../../assets/nes-logo.png';
import backicon from '../../assets/backicon.png';
import response from "assert";

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Email validation regex
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  // Password validation (at least 8 characters, and contains both letters and numbers)
  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  };

  // Username validation (must be at least 3 characters long)
  const validateUsername = (username) => {
    return username.length >= 3;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long and include both letters and numbers');
      return;
    }

    if (!validateUsername(username)) {
      setError('Username must be at least 3 characters long');
      return;
    }

    try {
      const response = await fetch('http://localhost:5050/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      })
    } catch (err) {
      setError(err.response.data.message || 'Error during registration');
    }
    if (response.ok) {
      setSuccess('Registration successful!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">

        <div className = "back-button-container">
          <Link to="/" className="back-button">
            <p className="back-text">
              <img src={backicon} className="back-icon" />
              &#9; Return to homepage
            </p>
          </Link>
        </div>
        <img src={NESLogo} alt="NES Logo" className="logo" />
        <h2>Register Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="username">Username <span>*</span><br /></label>
            <input
              className="input-box"
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email <span>*</span><br /></label>
            <input
              className="input-box"
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password <span>*</span><br /></label>
            <input
              className="input-box"
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
          <button className="confirm-button" type="submit">Register</button>
        </form>
        <Link to="/login" className="account-button">
          <p>Already have an account? Sign in here.</p>
        </Link>
      </div>
    </div>
  );
};

export default Register;