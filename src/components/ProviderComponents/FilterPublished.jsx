import React, { useState } from 'react';
import ProviderActivityCardDisplay from '/src/components/ProviderComponents/ProviderActivityCardDisplay.jsx';

const FilterPublished = ({ activities, username }) => {

  const [searchTerm, setSearchTerm] = useState("");

  const authorCheck = activities.filter(
    activity => {
      return (
        activity
        .author == username
      );
    }
  );

  const activitySearch = authorCheck.filter(
    activity => {
      return (
        activity
        .title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
        ||
        activity
        .description
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
          placeholder = "Search your posts" 
          onChange = {handleChange}
          aria-label="Search posts"
          aria-describedby="search-description"
        />
      </div>
      <div className="published-count">
        <strong>Showing {activitySearch.length}</strong> Activities
      </div>
      <ProviderActivityCardDisplay activitySearch={activitySearch} />
      <span id="search-description" className="visually-hidden">
        Search your posts
      </span>
    </div>
  );
}

export default FilterPublished;