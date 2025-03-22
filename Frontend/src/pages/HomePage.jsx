// import React from 'react';
// import FilterSearchBar from '../components/FilterSearchBar';
// import Filter from '../components/Filter';

// const HomePage = () => {
//   const handleSearch = (searchTerm) => {
//     console.log('Search Term:', searchTerm);
//     // Implement search logic here
//   };

//   return (
//     <div className="homepage">
//       {/* Navigation Bar (already in your layout) */}

//       {/* Filter and Search Bar Container */}
//       <div className="filter-search-container">
//         <Filter /> {/* Filter on the left */}
//         <FilterSearchBar onSearch={handleSearch} /> {/* Search bar on the right */}
//       </div>

//       {/* Rest of the homepage content */}
//       <div className="sample-data-container">
//         <h2>Latest Opportunities</h2>
//         <ul>
//           <li>📌 Medical Research Program - Apply Now</li>
//           <li>📌 Healthcare Training Workshop - Register</li>
//           <li>📌 NHS Career Guidance - Book a Session</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React from 'react';
import FilterSearchBar from '../components/FilterSearchBar';
import Filter from '../components/Filter';
import ActivitiesFor from '../components/ActivitiesFor'; // Import the new ActivitiesFor component

const HomePage = () => {
  const handleSearch = (searchTerm) => {
    console.log('Search Term:', searchTerm);
    // Implement search logic here
  };

  return (
    <div className="homepage">
      {/* Navigation Bar (already in your layout) */}

      {/* Filter and Search Bar Container */}
      <div className="filter-search-container">
        <div className="left-sidebar">
          {/* Activities Box */}
          <div className="activities-box-container">
            <ActivitiesFor />
          </div>

          {/* Filter Box (Below Activities Box) */}
          <div className="filter-box-container">
            <Filter />
          </div>
        </div>

        {/* Search Bar */}
        <FilterSearchBar onSearch={handleSearch} />
      </div>

      {/* Rest of the homepage content */}
      <div className="sample-data-container">
        <h2>Latest Opportunities</h2>
        <ul>
          <li>📌 Medical Research Program - Apply Now</li>
          <li>📌 Healthcare Training Workshop - Register</li>
          <li>📌 NHS Career Guidance - Book a Session</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
