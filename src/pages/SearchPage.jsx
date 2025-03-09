import React from 'react';

const SearchPage = () => {
  return (
    <div className="search-container">
      <h1>Search Activities</h1>
      <input type="text" placeholder="Search by keyword..." className="search-input" />
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchPage;
