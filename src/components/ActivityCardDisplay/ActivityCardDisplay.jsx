// ✅ FIXED VERSION of ActivityCardDisplay.jsx
import React from 'react';
import './ActivityCardDisplay.css';
import ActivityCard from '../../components/ActivityCard/ActivityCard';

const ActivityCardDisplay = ({ activitySearch }) => {
  return (
    <div className="activity-grid">
      {activitySearch?.map((activity) => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
    </div>
  );
};

export default ActivityCardDisplay;
