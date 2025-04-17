import React from 'react';

import Header from '/src/components/Header/Header.jsx';
import Footer from '/src/components/Footer/Footer.jsx';
import Navigation from '/src/components/Navigation/Navigation.jsx';

const ResourcesPage = () => {
  return (
    <div>
    <Header />
    <Navigation />
    <div className="resources-container">
      <h1>Resources & Guidance</h1>
      <p>Access helpful resources for healthcare training.</p>
      <ul>
        <li>📄 Healthcare Training Manual</li>
        <li>🎥 Video Tutorials for Medical Staff</li>
        <li>🔗 NHS Best Practices & Policies</li>
      </ul>
    </div>
    <Footer />
    </div>
  );
};

export default ResourcesPage;
