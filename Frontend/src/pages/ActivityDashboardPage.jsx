import React from 'react';

const ActivityDashboardPage = () => {
  return (
    <div className="dashboard-container">
      <h1>Activity Dashboard</h1>
      <p>Manage and create activity posts.</p>
      <button className="create-button">Create New Activity</button>
      <h2>Recent Activities</h2>
      <ul>
        <li>🏥 Healthcare Workshop - 10 Participants</li>
        <li>💡 Medical Research Talk - 15 Participants</li>
        <li>📚 Training Session - 20 Participants</li>
      </ul>
    </div>
  );
};

export default ActivityDashboardPage;
