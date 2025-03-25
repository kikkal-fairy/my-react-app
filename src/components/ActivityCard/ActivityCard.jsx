import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaChalkboardTeacher, FaClock } from 'react-icons/fa';
import './ActivityCard.css'; // optional if you use external CSS

const ActivityCard = () => {
  return (
    <div className="activity-card">
      <span className="tag">Awareness, Inspiration and Aspiration</span>

      <h3 className="activity-title">The Future of Healthcare: Understanding Medical Innovations</h3>

      <p className="activity-description">
        Explore the latest advancements in medicine through the expertise of experienced doctors and discover how they are shaping the future of healthcare.
      </p>

      <div className="activity-details">
        <div><FaMapMarkerAlt /> HMS Caledonia, Hilton Rd, Rosyth, KY11 2XH</div>
        <div><FaCalendarAlt /> 03 March 2025</div>
        <div><FaUsers /> Secondary (S4-S6), Educators</div>
        <div><FaChalkboardTeacher /> Face to Face</div>
        <div><FaClock /> 1–2 hours</div>
        <div>🏥 NHS Education for Scotland</div>
      </div>
    </div>
  );
};

export default ActivityCard;
