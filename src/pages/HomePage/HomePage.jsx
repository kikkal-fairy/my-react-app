import React from 'react';
import FilterSearchBar from '../../components/FilterSearchBar/FilterSearchBar';
import Filter from '../../components/Filter/Filter';
import ActivityCard from '../../components/ActivityCard/ActivityCard';
import './HomePage.css';

const HomePage = () => {
  const handleSearch = (searchTerm) => {
    console.log('Search Term:', searchTerm);
  };

  const activities = [
    {
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
          {activities.map((activity, index) => (
            <ActivityCard key={index} {...activity} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
