import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './Login.css';
import NESLogo from '/src/assets/nes-logo.png';
import backicon from '/src/assets/backicon.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Import useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    try {
      // Send POST request to login endpoint
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });

      // Store JWT tokens in localStorage
      localStorage.setItem('accessToken', response.data.accessToken);

      // Redirect to home page after successful login
      navigate('/');  // Navigate to Home page
    } catch (err) {
      setError('Invalid credentials');
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
        <h2 className="placeholder">.</h2> {/* Makeshift div so that content centers correctly*/}
        <img src={NESLogo} alt="NES Logo" className="logo" />
        <h2>Welcome to Our Outreach Hub</h2>
        <form onSubmit={handleSubmit}>
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
          <button className="confirm-button" type="submit">Login</button>
        </form>
        <Link to="/register" className="account-button">
          <p>Don't have an account? Sign up here.</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;