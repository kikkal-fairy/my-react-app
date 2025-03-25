import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaChalkboardTeacher, FaClock } from 'react-icons/fa';
import './ActivityCard.css';

const ActivityCard = ({
  tag,
  title,
  description,
  location,
  date,
  audience,
  format,
  duration,
  provider
}) => {
  return (
    <div className="activity-card">
      <span className="tag">{tag}</span>

      <h3 className="activity-title">{title}</h3>

      <p className="activity-description">{description}</p>

      <div className="activity-details">
        <div><FaMapMarkerAlt /> {location}</div>
        <div><FaCalendarAlt /> {date}</div>
        <div><FaUsers /> {audience}</div>
        <div><FaChalkboardTeacher /> {format}</div>
        <div><FaClock /> {duration}</div>
        <div>🏥 {provider}</div>
      </div>
    </div>
  );
};

export default ActivityCard;
