// components/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>
    
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/activity-detail">Activity Details</Link>
      <Link to="/search">Search</Link>
      <Link to="/resources">Resources</Link>
      <Link to="/legal">Legal</Link>
      <Link to="/account">Account</Link>
    </nav>
  );
};

export default Navigation;
