import React from 'react';
import { Link } from 'react-router-dom'; 
import locationIcon from '/src/assets/icons/location_on.svg';
import calendarIcon from '/src/assets/icons/calendar_today.svg';
import peopleIcon from '/src/assets/icons/people.svg';
import handshakeIcon from '/src/assets/icons/handshake.svg';
import accessTimeIcon from '/src/assets/icons/access_time.svg';
import workIcon from '/src/assets/icons/work.svg';

const ProviderActivityCard = ({ activity }) => {
  return (
    <Link
    to={`/provider-detail/${activity.id}`}
    state={{ activity }} // ✅ ADDED
    className="activity-card-link" // ✅ ADDED for styling
  >

    <div className="provider-activity-card">
      <span className="tag">{activity.tag}</span>

      <h3 className="activity-title">{activity.title}</h3>

      <p className="activity-description">{activity.description}</p>

      <div className="activity-details">
        <div className="detail-item">
          <img src={locationIcon} alt="Location" className="icon" />
          <span>{activity.location}</span>
        </div>
        <div className="detail-item">
          <img src={calendarIcon} alt="Date" className="icon" />
          <span>{activity.date}</span>
        </div>
        <div className="detail-item">
          <img src={peopleIcon} alt="Audience" className="icon" />
          <span>{activity.audience}</span>
        </div>
        <div className="detail-item">
          <img src={handshakeIcon} alt="Format" className="icon" />
          <span>{activity.format}</span>
        </div>
        <div className="detail-item">
          <img src={accessTimeIcon} alt="Duration" className="icon" />
          <span>{activity.duration}</span>
        </div>
        <div className="detail-item">
          <img src={workIcon} alt="Provider" className="icon" />
          <span>{activity.provider}</span>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ProviderActivityCard;