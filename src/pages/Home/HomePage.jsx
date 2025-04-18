import React, { useState, useEffect } from 'react';
import FilterSearchBar from '../../components/FilterSearchBar/FilterSearchBar';
import ActivityCardDisplay from '../../components/ActivityCardDisplay/ActivityCardDisplay';
import Header from '../../components/Header/Header.jsx';
import Navigation from '../../components/Navigation/Navigation.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import UserRoleSwitch from '../../components/UserRoleSwitch/UserRoleSwitch';
import Filter from '../../components/Filter/Filter';
import CustomPagination from '../../components/CustomPagination/CustomPagination';
import './HomePage.css';

const fallbackActivities = [
  {
    id: 1,
    tag: "Awareness, Inspiration and Aspiration",
    title: "The Future of Healthcare: Understanding Medical Innovations",
    description: "Explore the latest advancements in medicine through the expertise of experienced doctors and discover how they are shaping the future of healthcare.",
    location: "HMS Caledonia, Hilton Rd, Rosyth, KY11 2XH",
    date: "03 March 2025",
    audience: "Secondary (S4-S6), Educators",
    format: "Face to Face",
    duration: "1–2 hours",
    provider: "NHS Education for Scotland",
  },
  {
    id: 2,
    tag: "Skills Development & Preparation",
    title: "Medical Interview Masterclass",
    description: "Sharpen your interview skills with real-time feedback from professionals in the medical field.",
    location: "NES HQ, Edinburgh",
    date: "15 April 2025",
    audience: "Senior Students",
    format: "Virtual",
    duration: "2 hours",
    provider: "NES Careers",
  },
  {
    id: 3,
    tag: "Work Experience",
    title: "GP Shadowing Day",
    description: "Join a general practitioner for a full day to understand the daily responsibilities of doctors.",
    location: "Dundee Medical Centre",
    date: "20 May 2025",
    audience: "Secondary & Uni Students",
    format: "In-Person",
    duration: "Full Day",
    provider: "NHS Tayside",
  },
];

const HomePage = () => {
  const [selectedRole, setSelectedRole] = useState('individual');
  const [searchTerm, setSearchTerm] = useState('');
  const [activities, setActivities] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 2;

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await fetch('http://localhost:5050/posts');
        const data = await res.json();
        console.log('✅ Received from backend:', data);
        setActivities(data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
        setActivities(fallbackActivities); // ✅ fallback if fetch fails
      }
    };

    fetchActivities();
  }, []);

  const filteredActivities = activities
    .filter((activity) => {
      const audience = Array.isArray(activity.audience)
      ? activity.audience.join(', ').toLowerCase()
      : (activity.audience || '').toLowerCase();


      if (selectedRole === 'individual') {
        return audience.includes('student') || audience.includes('s4') || audience.includes('s5') || audience.includes('s6');
      }

      if (selectedRole === 'adviser') {
        return audience.includes('educator') || audience.includes('teacher');
      }

      return true;
    })
    .filter((activity) =>
      activity.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const paginatedActivities = filteredActivities.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  return (

      <div className="homepage">
        <div className="content-container">
          <div className="filter-column">
            <UserRoleSwitch onRoleChange={setSelectedRole} />
            <Filter />
          </div>

          <div className="activity-column">
            <FilterSearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <div className="activity-list-header">
              <div className="activity-count">
                <strong>Showing {filteredActivities.length}</strong> Activities
              </div>
              <div className="sort-select-button">
                <div className="sort-label">Recent</div>
                <div className="arrow-wrapper">
                  <div className="arrow-icon" />
                </div>
              </div>
            </div>

            <ActivityCardDisplay activitySearch={paginatedActivities} />

            <CustomPagination
              totalPages={Math.ceil(filteredActivities.length / itemsPerPage)}
              activePage={activePage}
              setActivePage={setActivePage}
            />
          </div>
        </div>
      </div>
      
    
  );
};

export default HomePage;
