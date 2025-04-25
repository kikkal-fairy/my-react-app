import React from 'react';

const FeedbackDisplay = ({ activity, userfeedback }) => {

  if (!userfeedback) {
    return (
      <p>No feedback available.</p>
    );
  }

  return (
    <table className="provider-table">
      <tr>
        <th>Username</th>
        <th>Participant Type</th>
        <th>Feedback</th>
        <th>Rating</th>
      </tr>
      {userfeedback.filter((feedback) => feedback.activityid == activity.id)?.map(
        (filteredFeedback) => 
          
            <tr>
              <td>{filteredFeedback.username}</td>
              <td>{filteredFeedback.type}</td>
              <td>{filteredFeedback.content}</td>
              <td>{filteredFeedback.rating}</td>
            </tr>
          )}
        </table>
      )}

export default FeedbackDisplay;