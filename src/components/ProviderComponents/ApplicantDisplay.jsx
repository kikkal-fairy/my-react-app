import React from 'react';

const ApplicantDisplay = ({ activity, bookings }) => {

  return (
    <table className="provider-table">
      <tr>
        <th>Username</th>
        <th>Participant Type</th>
        <th>Activity Name</th>
        <th>Date</th>
        <th>Location</th>
        <th>Group Size</th>
        <th>Contact</th>
      </tr>
      {bookings.filter((booking) => booking.activityid == activity.id)?.map(
        (filteredBookings) => 
          
            <tr>
              <td>{filteredBookings.username}</td>
              <td>{filteredBookings.type}</td>
              <td>{activity.title}</td>
              <td>{activity.date}</td>
              <td>{activity.location}</td>
              <td>{filteredBookings.groupsize}</td>
              <td>{filteredBookings.email}</td>
            </tr>
          
          )}
        </table>
      )}
export default ApplicantDisplay;