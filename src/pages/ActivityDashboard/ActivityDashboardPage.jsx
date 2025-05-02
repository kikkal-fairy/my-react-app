import React, { useState } from "react";
import EventForm from "/src/components/EventForm";


const ActivityDashboardPage = () => {
    const [showForm, setShowForm] = useState(false);
    const [refresh, setRefresh] = useState(false);

    return (
        <div className="dashboard-container">
            <h1 className="form-header">Activity Dashboard</h1>
            <EventForm onEventAdded={() => setRefresh(!refresh)} />
        </div>
    );
};

export default ActivityDashboardPage;