import React from 'react';
import { Link } from 'react-router-dom';
import './ActivityCardDisplay.css';
import ActivityCard from '../../components/ActivityCard/ActivityCard';

const ActivityCardDisplay = ({ activitySearch }) => {
  return (
    <div>
      {activitySearch?.map(activity => (
        <Link
          key={activity.id}
          to={`/activity-detail/${activity.id}`}
          state={{ activity }}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ActivityCard activity={activity} />
        </Link>
      ))}
    </div>
  );
}
export default ActivityCardDisplay;