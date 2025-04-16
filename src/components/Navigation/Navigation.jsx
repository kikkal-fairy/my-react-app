// components/Navigation.jsx
import React from 'react';
import { Link } from 'react-router';

const Navigation = () => {
  return (
    <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/AboutUs">About Us</Link>
        <Link to="/ActivityDashboard">Activity dashboard (Temp)</Link>
        <Link to="/career">Career Guidance</Link>
        <Link to="/applicationGuidance">Application Guidance</Link>

    </nav>
  );
};

export default Navigation;
