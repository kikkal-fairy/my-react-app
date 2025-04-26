import React from 'react';
import { Link } from 'react-router-dom'; 

const FeedbackStats = ({ activity, userfeedback }) => {

  if (!userfeedback) {
    return (
      <Link
      to={`/provider-detail/${activity.id}/feedback`}
      state={{ activity }} // ✅ ADDED
      className="provider-button-link"
      >
      <div>
      <h3>Feedback</h3>
      <h1>{0}</h1>
      <p>Response(s)</p>
      </div>
    </Link>
    );
  }

  return (
    <Link
    to={`/provider-detail/${activity.id}/feedback`}
    state={{ activity }} // ✅ ADDED
    className="provider-button-link"
  >
    <div>
      <h3>Feedback</h3>
      <h1>{userfeedback.filter(feedback => feedback.activityid == activity.id).length}</h1>
      <p>Response(s)</p>
    </div>
    </Link>
  );
};

export default FeedbackStats;