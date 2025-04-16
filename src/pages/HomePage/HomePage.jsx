import React, { useState, useEffect } from 'react';

import FilterSearchBar from '../../components/FilterSearchBar/FilterSearchBar';
import ActivityCardDisplay from '../../components/ActivityCardDisplay/ActivityCardDisplay';
import UserRoleSwitch from '../../components/UserRoleSwitch/UserRoleSwitch';
import Filter from '../../components/Filter/Filter';
import CustomPagination from '../../components/CustomPagination/CustomPagination';
import './HomePage.css';
import '/src/styles/global.css';

const HomePage = () => {
  const [selectedRole, setSelectedRole] = useState('individual');
  const [searchTerm, setSearchTerm] = useState('');
  const [activities, setActivities] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 2;

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await fetch('http://localhost:5000/posts');
        const data = await res.json();
        setActivities(data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    fetchActivities();
  }, []);

  // 🔍 Filter logic
  const filteredActivities = activities
      /*.filter((activity) => {
        const audience = (activity.audience || '').toLowerCase();

        if (selectedRole === 'individual') {
          return (
              audience.includes('student') ||
              audience.includes('s4') ||
              audience.includes('s5') ||
              audience.includes('s6')
          );
        }

        if (selectedRole === 'adviser') {
          return (
              audience.includes('educator') ||
              audience.includes('teacher')
          );
        }

        return true;
      })*/
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
