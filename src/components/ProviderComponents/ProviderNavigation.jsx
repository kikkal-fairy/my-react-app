import React from 'react';
import { Link } from 'react-router';

const ProviderNavigation = () => {
  return (
    <nav className="nav-bar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/published">Published Posts</Link>
      <Link to="/create">Create Activity</Link>
    </nav>
  );
};

export default ProviderNavigation;