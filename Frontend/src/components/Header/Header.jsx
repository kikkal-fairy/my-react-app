import React from 'react';
import { Link } from 'react-router-dom';
import NESLogo from '../../assets/nes-logo.png';
import './Header.css';



const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img src={NESLogo} alt="NES Logo" className="logo" style={{ height: "150px", width: "auto" }} />

        <div className="header-text">
          <h1>Outreach Hub</h1>
          <h4>Inspiration and preparation activities for medical school applicants in Scotland</h4>
        </div>
        
        <div className="header-buttons">
          <Link to="/login" className="login-button">
            <button>Sign In</button>
          </Link>
          <Link to="/register" className="register-button">
            <button>Register As Provider</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;