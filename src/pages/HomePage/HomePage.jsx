import React from 'react';
import FilterSearchBar from '../../components/FilterSearchBar/FilterSearchBar';
import Filter from '../../components/Filter/Filter';
import ActivityCard from '../../components/ActivityCard/ActivityCard';
import './HomePage.css';

const HomePage = () => {
  const handleSearch = (searchTerm) => {
    console.log('Search Term:', searchTerm);
  };

  return (
    <div className="homepage">
      <div className="filter-search-container">
        <FilterSearchBar onSearch={handleSearch} />
      </div>

      <div className="content-container">
        <div className="filter-column">
          <Filter />
        </div>
        <div className="activity-column">
          <h2>Latest Opportunities</h2>
          <ActivityCard />
          <ActivityCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
