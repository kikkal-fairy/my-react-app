import React from 'react';
import { Link } from 'react-router-dom'; 

const ApplicantStats = ({ activity, bookings }) => {

  const applicants = bookings.filter(booking => booking.activityid == activity.id);
  const advisers = applicants.filter(applicant => applicant.type == "adviser").length;
  const individuals = applicants.filter(applicant => applicant.type == "individual").length;

  return (
    <Link
    to={`/provider-detail/${activity.id}/applicants`}
    state={{ activity }} // ✅ ADDED
    className="provider-button-link"
  >
    <div className="applicant-stats">
      <h3>Applicants</h3>
      <div className="applicant-numbers">
        <div className="adviser-number">
          <h1>{advisers}</h1>
          <p>Adviser(s)</p>
        </div>
        <div className="individual-number">
          <h1>{individuals}</h1>
          <p>Individual(s)</p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ApplicantStats;