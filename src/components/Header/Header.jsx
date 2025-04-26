import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NESLogo from '/src/assets/nes-logo.png';
import './Header.css';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
      <header className="header">
        <div className="header-container">
          <img src={NESLogo} alt="NES Logo" className="logo" />
          <div className="header-text">
            <h1>Outreach Hub</h1>
            <h4>Resources for career advisers, educators & parents to guide students into <br /> medical school in Scotland.</h4>
          </div>
          <div className="header-buttons">
            {!isLoggedIn ? (
                <>
                  <Link to="/login" className="login-button">
                    <button>Sign In</button>
                  </Link>
                  <Link to="/register" className="register-button">
                    <button>Register As Provider</button>
                  </Link>
                </>
            ) : (
                <button onClick={handleSignOut} className="signout-button">
                  Sign Out
                </button>
            )}
          </div>
        </div>
      </header>
  );
};

export default Header;
