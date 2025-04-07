import React, { useState } from 'react';
import './FilterSearchBar.css';
import searchIcon from '../../assets/search.svg';
import IconButton from '../IconButton/IconButton';

const FilterSearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    
      <div className="filter-search-input-wrapper">
        <input 
          type = "search"
          className = "search-input"
          placeholder = "Search by keywords" 
          onChange = {handleChange}
          aria-label="Search activities"
          aria-describedby="search-description"
        />

<IconButton icon={searchIcon} onClick={() => console.log("Search clicked")} />
      <span id="search-description" className="visually-hidden">
        Search through activities
      </span>
    </div>
  );
}

export default FilterSearchBar;