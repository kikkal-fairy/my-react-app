import React from 'react';

import Header from '/src/components/Header/Header.jsx';
import Footer from '/src/components/Footer/Footer.jsx';
import Navigation from '/src/components/Navigation/Navigation.jsx';

const SearchPage = () => {
  return (
    <div>
    <Header />
    <Navigation />
    <div className="search-container">
      <h1>Search Activities</h1>
      <input type="text" placeholder="Search by keyword..." className="search-input" />
      <button className="search-button">Search</button>
    </div>
    <Footer />
    </div>
  );
};

export default SearchPage;
