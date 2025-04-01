import React, { useState } from 'react';
import ActivityCardDisplay from '../../components/ActivityCardDisplay/ActivityCardDisplay';
import './FilterSearchBar.css';

const FilterSearchBar = ({ activities }) => {

  const [searchTerm, setSearchTerm] = useState("");

  const activitySearch = activities.filter(
    activity => {
      return (
        activity
        .title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="filter-search-input-wrapper">
        <input 
          type = "search"
          className = "search-input"
          placeholder = "Search by keywords" 
          onChange = {handleChange}
          aria-label="Search activities"
          aria-describedby="search-description"
        />
      </div>
      <ActivityCardDisplay activitySearch={activitySearch} />
      <span id="search-description" className="visually-hidden">
        Search through activities
      </span>
    </div>
  );
}

export default FilterSearchBar;