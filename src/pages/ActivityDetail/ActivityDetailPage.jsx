import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Navigation from '../../components/Navigation/Navigation.jsx';
import './ActivityDetailPage.css';

const ActivityDetailPage = () => {
  const { state } = useLocation();
  const activity = state?.activity;

  if (!activity) {
    return (
      <>
        <Header />
        <Navigation />
        <div className="activity-detail-page">
          <p>No activity found.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Navigation />
      <div className="activity-detail-page">
        <Link to="/" className="back-link">← Back to Activities</Link>

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

          <div className="side-panel">
            <p className="provider-label">Provided by {activity.provider}</p>
            <div className="join-card">
            <h3 className="side-title">Join Our Activity</h3>
              <p className="label">Activity</p>
              <p className="text">{activity.title}</p>

              <p className="label">Activity Location</p>
              <p className="text">{activity.location}</p>

              <p className="label">Activity Date</p>
              <p className="text">{activity.date}</p>

              <div className="counter">
                <p className="label">Reserve Your Seat</p>
                <div className="count-controls">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
              </div>

              <button className="apply-btn">Apply</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ActivityDetailPage;
