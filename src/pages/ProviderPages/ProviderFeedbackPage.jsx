import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import ProviderNavigation from '/src/components/ProviderComponents/ProviderNavigation.jsx';

import ApplicantStats from '/src/components/ProviderComponents/ApplicantStats.jsx';
import BookingStats from '/src/components/ProviderComponents/BookingStats.jsx';
import FeedbackStats from '/src/components/ProviderComponents/FeedbackStats.jsx';
import DefaultStats from '/src/components/ProviderComponents/DefaultStats.jsx';
import FeedbackDisplay from '/src/components/ProviderComponents/FeedbackDisplay.jsx';
import bookings from '/src/components/ProviderComponents/samplebookings.jsx'
import calendardata from '/src/components/ProviderComponents/samplecalendardata.jsx';

const ProviderFeedbackPage = () => {
  const { state } = useLocation();
  const activity = state?.activity;

  const userfeedback = ""; /* Out of project scope */

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
          <div className="provider-button-box"><ApplicantStats activity = {activity} bookings = {bookings}/></div>
          <div className="provider-button-box"><BookingStats activity = {activity} calendardata = {calendardata}/></div>
          <div className="active-button-box"><FeedbackStats activity = {activity} userfeedback = {userfeedback}/></div>
        </div>
        <h2>Overall Rating & Feedback</h2>
        <FeedbackDisplay activity = {activity} userfeedback = {userfeedback}/>
      </div>
    </>
  );
};  

export default ProviderFeedbackPage;