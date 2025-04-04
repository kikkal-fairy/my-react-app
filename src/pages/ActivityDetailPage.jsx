import React from 'react';

import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Navigation from '../components/Navigation/Navigation.jsx';

const ActivityDetailPage = () => {
  return (
    <div>
    <Header />
    <Navigation />
    <div className="activity-detail-container">
      <h1>Activity Details</h1>
      <p>View and join healthcare activities.</p>
      <button className="join-button">Join Activity</button>
    </div>
    <Footer />
    </div>
  );
};

export default ActivityDetailPage;
