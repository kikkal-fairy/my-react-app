import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import './Navigation.css';

const ProviderNavigation = () => (
    <nav className="nav-bar">
        <Link to="/" className="home-button">Home</Link>
        <Link to="/ActivityDashboard">Dashboard</Link>
        <Link to="/Published">Published Posts</Link>
        <Link to="/">Booking Schedules</Link>
        <Link to="/">Archived</Link>
        <Link to="/ProviderDashboard">Provider Dashboard (Temp)</Link>
    </nav>
);

const GeneralNavigation = () => (
    <nav className="nav-bar">
        <Link to="/" className="home-button">Home</Link>
        <Link to="/AboutUs">About Us</Link>
        <Link to="/PartnerOrganisations">Partner Organisations</Link>
        <Link to="/CareerGuidance">Career Guidance</Link>
        <Link to="/ApplicationGuidance">Application Guidance</Link>
    </nav>
);

const Navigation = () => {
    const [accountType, setAccountType] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setAccountType(decoded.account_type);
            } catch (err) {
                console.error("Error decoding token:", err);
            }
        }
    }, []);

    if (accountType === 'provider') {
        return <ProviderNavigation />;
    }

    return <GeneralNavigation />;
};

export default Navigation;
