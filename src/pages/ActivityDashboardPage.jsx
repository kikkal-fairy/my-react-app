import React, { useState } from "react";
import EventForm from "../components/EventForm";


const ActivityDashboardPage = () => {
    const [showForm, setShowForm] = useState(false);
    const [refresh, setRefresh] = useState(false);

    return (
        <div className="dashboard-container">
            <h1>Activity Dashboard</h1>
            <p>Manage and create activity posts.</p>

            {/* Toggle the event form */}
            <button
                onClick={() => setShowForm(!showForm)}
            >
                {showForm ? "Close Form" : "Create New Activity"}
            </button>

            {/* Show Event Form */}
            {showForm && <EventForm onEventAdded={() => setRefresh(!refresh)} />}

            {/* List of Events */}
            <h2>Recent Activities</h2>
        </div>
    );
};

export default ActivityDashboardPage;