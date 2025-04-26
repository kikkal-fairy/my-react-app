import React from 'react';
import { Link } from 'react-router';
import './Navigation.css'
const ProviderNavigation = () => {
  return (
    <nav className="nav-bar">
       <Link to="/" className="home-button">Home</Link>
      <Link to="/ActivityDashboard">Dashboard</Link>
      <Link to="/">Published Posts</Link>
      <Link to="/">Booking Schedules</Link>
      <Link to="/">Archived</Link>
    </nav>
  );
};

export default ProviderNavigation;
