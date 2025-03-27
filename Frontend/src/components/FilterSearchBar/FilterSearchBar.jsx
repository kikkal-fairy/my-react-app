import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './FilterSearchBar.css';

const FilterSearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    // Removed onSearch from here to only search on submit
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {  // Only search if there's actual input
      onSearch(searchTerm.trim());
    }
  };

  return (
    <form 
      className="filter-search-wrapper" 
      onSubmit={handleSubmit}
      role="search"  // Better accessibility
    >
      <div className="filter-search-input-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Search by keywords"
          value={searchTerm}
          onChange={handleChange}
          aria-label="Search activities"
          aria-describedby="search-description"
        />
        <button 
          className="search-icon-button" 
          type="submit"
          aria-label="Submit search"
          disabled={!searchTerm.trim()} // Disable when empty
        >
          <FaSearch className="search-icon" />
        </button>
      </div>
      <span id="search-description" className="visually-hidden">
        Search through activities
      </span>
    </form>
  );
};

export default FilterSearchBar;