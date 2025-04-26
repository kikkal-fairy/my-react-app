import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import ProviderNavigation from '/src/components/ProviderComponents/ProviderNavigation.jsx';

import ApplicantStats from '/src/components/ProviderComponents/ApplicantStats.jsx';
import BookingStats from '/src/components/ProviderComponents/BookingStats.jsx';
import FeedbackStats from '/src/components/ProviderComponents/FeedbackStats.jsx';
import DefaultStats from '/src/components/ProviderComponents/DefaultStats.jsx';
import bookings from '/src/components/ProviderComponents/samplebookings.jsx'
import calendardata from '/src/components/ProviderComponents/samplecalendardata.jsx';

const ProviderDetailPage = () => {
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
          <div className="active-button-box"><DefaultStats activity = {activity} bookings = {bookings}/></div>
          <div className="provider-button-box"><ApplicantStats activity = {activity} bookings = {bookings}/></div>
          <div className="provider-button-box"><BookingStats activity = {activity} calendardata = {calendardata}/></div>
          <div className="provider-button-box"><FeedbackStats activity = {activity}/></div>
        </div>

        <div className="detail-layout">
          <div className="main-content">
            <span className="tag">{activity.tag}</span>
            <h1 className="activity-title">{activity.title}</h1>
            <p className="description">{activity.description}</p>

            <h3>Activity Description</h3>
            <ul className="description-list">
                <p>Lorem ipsum dolor sit amet consectetur. 
                    Vitae odio amet a ullamcorper at eu sagittis vitae id. 
                    Mattis mus magna eget consectetur sed ut magna. 
                    Quisque eleifend quis arcu aliquam. 
                    Nec hendrerit quis in varius sed pharetra turpis.
                     Tincidunt pharetra tortor pellentesque convallis tortor massa proin. 
                     Leo sollicitudin ullamcorper ut ut non mauris. 
                     Dictum commodo suspendisse tellus enim faucibus sodales nullam neque.</p>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Mattis mus magna eget consectetur sed urna magna.</li>
              <li>Nec hendrerit quis in varius sed pharetra turpis.</li>
              <li>Leo sollicitudin ullamcorper ut et non mauris.</li>
            </ul>

            <div className="info-grid">
              <div><strong>Audience:</strong><br />{activity.audience}</div>
              <div><strong>Eligibility Criteria:</strong><br />Gender Equality</div>
              <div><strong>Fees:</strong><br />Free</div>
              <div><strong>Group Size:</strong><br />1–30</div>
              <div><strong>Delivery Method:</strong><br />{activity.format}</div>
              <div><strong>Duration:</strong><br />{activity.duration}</div>
            </div>

            <div className="tags-section">
              <button className="tag-btn">Local Authority</button>
              <button className="tag-btn">Aberdeen City</button>
              <button className="tag-btn">Aberdeenshire</button>
              <button className="tag-btn">Dundee</button>
              {/* Add more tags if needed */}
            </div>

            <div className="further-info">
              <strong>Further Information</strong><br />
              Contact: nhseducation.ac.uk
            </div>
          </div>
        </div>
      </div>
    </>
  );
};  

export default ProviderDetailPage;