import React from 'react';

import ProviderNavigation from '/src/components/ProviderComponents/ProviderNavigation.jsx';

import FilterPublished from '/src/components/ProviderComponents/FilterPublished.jsx';
import activities from '/src/components/ProviderComponents/sampleactivities.jsx';

const ProviderPublished = () => {
  {/* Username declared here for testing purposes */}
  const username = "nhsprovider123";

  return (
    <div>
    <ProviderNavigation />
    <div className="publishedpage">
      <div className="content-container">
        <div className="activity-column">
          <h2>Published Posts</h2>
          {/* Search Bar & Activity Cards */}
          <div className="search-bar-wrapper">
            <FilterPublished activities={activities} username={username} />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProviderPublished;