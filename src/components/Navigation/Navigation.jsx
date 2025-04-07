// components/Navigation.jsx
import React from 'react';
import { Link } from 'react-router';

const Navigation = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/aboutus">About Us</Link>
      <Link to="/partnerOrg">Partner Orginisations</Link>
      <Link to="/career">Career Guidance</Link>
      <Link to="/applicationGuidance">Application Guidance</Link>
    </nav>
  );
};

export default Navigation;
