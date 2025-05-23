import React from 'react';
import { Link } from 'react-router-dom';
import './ActivityCardDisplay.css';
import ActivityCard from '/src/components/ActivityCard/ActivityCard';

const ActivityCardDisplay = ({ activitySearch }) => {
  return (
      <div>
        {activitySearch?.map(activity => (
            <Link
                key={activity.id}
                to={`/ActivityDetail/${activity.id}`}
                state={{ activity }}
                className="activity-card-link"
            >
              <ActivityCard activity={activity} />
            </Link>
        ))}
      </div>
  );
}
export default ActivityCardDisplay;