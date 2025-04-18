// components/Navigation.jsx
import React from 'react';
import { Link } from 'react-router';
import './Navigation.css'
const Navigation = () => {
  return (
    <nav className="nav-bar">
       <Link to="/" className="home-button">Home</Link>
      <Link to="/AboutUs">About Us</Link>
      <Link to="/PartnerOrganisations">Partner Orginisations</Link>
      <Link to="/CareerGuidance">Career Guidance</Link>
      <Link to="/ApplicationGuidance">Application Guidance</Link>
      <Link to="/ActivityDashboard">Add post (Temporary)</Link>
    </nav>
  );
};

export default Navigation;
