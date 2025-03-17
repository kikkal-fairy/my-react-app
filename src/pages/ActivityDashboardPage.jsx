import React, { useState } from "react";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";

const ActivityDashboardPage = () => {
    const [showForm, setShowForm] = useState(false);
    const [refresh, setRefresh] = useState(false);

    return (
        <div className="dashboard-container">
            <h1 className="text-2xl font-bold mb-4">Activity Dashboard</h1>
            <p className="mb-4">Manage and create activity posts.</p>

            {/* Toggle the event form */}
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
                onClick={() => setShowForm(!showForm)}
            >
                {showForm ? "Close Form" : "Create New Activity"}
            </button>

            {/* Show Event Form */}
            {showForm && <EventForm onEventAdded={() => setRefresh(!refresh)} />}

            {/* List of Events */}
            <h2 className="text-xl font-semibold mt-6 mb-2">Recent Activities</h2>
            <EventList key={refresh} />
        </div>
    );
};

export default ActivityDashboardPage;