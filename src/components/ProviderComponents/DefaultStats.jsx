import React from 'react';
import { Link } from 'react-router-dom'; 

const DefaultStats = ({ activity, bookings }) => {

  const applicants = bookings.filter(booking => booking.activityid == activity.id).length;

  return (
    <Link
    to={`/provider-detail/${activity.id}`}
    state={{ activity }}
    className="provider-button-link"
  >
    <div>
      <h3>Performance</h3>
      <h1>{applicants}</h1>
      <p>Applicant(s)</p>
    </div>
    </Link>
  );
};

export default DefaultStats;