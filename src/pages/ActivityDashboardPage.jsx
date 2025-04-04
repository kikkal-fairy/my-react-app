import React, { useState } from "react";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";

import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Navigation from '../components/Navigation/Navigation.jsx';

const ActivityDashboardPage = () => {
    const [showForm, setShowForm] = useState(false);
    const [refresh, setRefresh] = useState(false);

    return (
        <div>
        <Header />
        <Navigation />
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
            <EventList key={refresh} />
        </div>
        <Footer />
        </div>
    );
};

export default ActivityDashboardPage;