import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import ProviderNavigation from '/src/components/ProviderComponents/ProviderNavigation.jsx';

import ApplicantStats from '/src/components/ProviderComponents/ApplicantStats';
import BookingStats from '/src/components/ProviderComponents/BookingStats';
import FeedbackStats from '/src/components/ProviderComponents/FeedbackStats';
import DefaultStats from '/src/components/ProviderComponents/DefaultStats';
import ApplicantDisplay from '/src/components/ProviderComponents/ApplicantDisplay';
import bookings from '/src/components/ProviderComponents/samplebookings.jsx';
import calendardata from '/src/components/ProviderComponents/samplecalendardata.jsx';

const ProviderApplicantPage = () => {
  const { state } = useLocation();
  const activity = state?.activity;

  if (!activity) {
    return (
      <>
        <ProviderNavigation />
        <div className="provider-detail-page">
          <Link to="/published" className="back-link">← Back to Published Posts</Link>
          <p>No activity found.</p>
        </div>
      </>
    );
  }

  return (
      <>
        <ProviderNavigation />
        <div className="provider-detail-page">
          <Link to="/published" className="back-link">← Back to Published Posts</Link>
          <div className="provider-button-container">
            <div className="provider-button-box"><DefaultStats activity = {activity} bookings = {bookings}/></div>
            <div className="active-button-box"><ApplicantStats activity = {activity} bookings = {bookings}/></div>
            <div className="provider-button-box"><BookingStats activity = {activity} calendardata = {calendardata}/></div>
            <div className="provider-button-box"><FeedbackStats activity = {activity}/></div>
          </div>
          <h2>Applicants List</h2>
          <ApplicantDisplay activity = {activity} bookings = {bookings}/>
        </div>
      </>
  );
};  

export default ProviderApplicantPage;