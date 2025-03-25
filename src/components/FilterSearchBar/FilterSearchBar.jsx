import React, { useState } from 'react';

const FilterSearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Pass the search term to the parent component
  };

  return (
    <div className="filter-search-bar">
      <input
        type="text"
        placeholder="Search activities..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default FilterSearchBar;