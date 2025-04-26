import React from 'react';

import ProviderNavigation from '/src/components/ProviderComponents/ProviderNavigation.jsx';

import FeedbackDisplay from '/src/components/ProviderComponents/FeedbackDisplay';
import BookingDisplay from '/src/components/ProviderComponents/BookingDisplay';
import DashboardChart from '/src/components/ProviderComponents/DashboardChart';
import bookings from '/src/components/ProviderComponents/samplebookings.jsx'

const ProviderDashboard = () => {
  return (
    <div>
    <ProviderNavigation />
    <div className="homepage">
      <div className="dashboard-container">
        <div className="box-container">
          <div className="stats-box">
            <h2>Total Applicants</h2>
            <DashboardChart bookings = {bookings} />
          </div>
          <div className="bookings-box">
            <h2>Upcoming Booking Schedule</h2>
            <BookingDisplay />
          </div>
        </div>
        <div className="feedback-box">
          <h2>Overall Rating & Feedback</h2>
          <FeedbackDisplay />
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProviderDashboard;