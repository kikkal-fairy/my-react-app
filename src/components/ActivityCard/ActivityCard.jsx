import React from 'react';
import './ActivityCard.css';

import locationIcon from '/src/assets/icons/location_on.svg';
import calendarIcon from '/src/assets/icons/calendar_today.svg';
import peopleIcon from '/src/assets/icons/people.svg';
import handshakeIcon from '/src/assets/icons/handshake.svg';
import accessTimeIcon from '/src/assets/icons/access_time.svg';
import workIcon from '/src/assets/icons/work.svg';

const ActivityCard = ({ tag, title, description, location, date, audience, format, duration, provider }) => {
  return (
    <div className="activity-card">
      <span className="tag">{tag}</span>

      <h3 className="activity-title">{title}</h3>

      <p className="activity-description">{description}</p>

      <div className="activity-details">
        <div className="detail-item">
          <img src={locationIcon} alt="Location" className="icon" />
          <span>{location}</span>
        </div>
        <div className="detail-item">
          <img src={calendarIcon} alt="Date" className="icon" />
          <span>{date}</span>
        </div>
        <div className="detail-item">
          <img src={peopleIcon} alt="Audience" className="icon" />
          <span>{audience}</span>
        </div>
        <div className="detail-item">
          <img src={handshakeIcon} alt="Format" className="icon" />
          <span>{format}</span>
        </div>
        <div className="detail-item">
          <img src={accessTimeIcon} alt="Duration" className="icon" />
          <span>{duration}</span>
        </div>
        <div className="detail-item">
          <img src={workIcon} alt="Provider" className="icon" />
          <span>{provider}</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
