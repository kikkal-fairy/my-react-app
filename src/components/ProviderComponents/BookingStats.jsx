import React from 'react';
import { Link } from 'react-router-dom'; 

const BookingStats = ({ activity, calendardata }) => {

  const upcoming = calendardata.length;

  return (
    <Link
    to={`/provider-detail/${activity.id}/bookings`}
    state={{ activity }}
    className="provider-button-link"
  >
    <div>
      <h3>Bookings</h3>
      <h1>{upcoming}</h1>
      <p>Event(s)</p>
    </div>
    </Link>
  );
};

export default BookingStats;