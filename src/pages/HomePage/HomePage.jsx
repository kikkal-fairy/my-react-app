import React from 'react';
import FilterSearchBar from '../../components/FilterSearchBar/FilterSearchBar';
import Filter from '../../components/Filter/Filter';
import './HomePage.css';

import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Navigation from '../../components/Navigation/Navigation.jsx';

const HomePage = () => {
  
  const activities = [
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

  return (
    <div>
    <Header />
    <Navigation />
    <div className="homepage">
      <div className="content-container">
        <div className="filter-column">
          <Filter />
        </div>
       
        <div className="activity-column">
          
        {/* Search Bar & Activity Cards */}
          <div className="search-bar-wrapper">
            <FilterSearchBar activities={activities} />
          </div>

        {/* Activity count + sort -- move to component later */}
          <div className="activity-list-header">
            <div className="activity-count">
              <strong>Showing 5</strong> of 90 Activities
            </div>
            <div className="sort-select-button">
              <div className="sort-label">Recent</div>
              <div className="arrow-wrapper">
                <div className="arrow-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default HomePage;