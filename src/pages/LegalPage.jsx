import React from 'react';

import Header from '/src/components/Header/Header.jsx';
import Footer from '/src/components/Footer/Footer.jsx';
import Navigation from '/src/components/Navigation/Navigation.jsx';

const LegalPage = () => {
  return (
    <div>
    <Header/>
    <Navigation />
    <div className="legal-container">
      <h1>Legal Information</h1>
      <p>Review our policies and terms of use.</p>
      <button className="terms-button">View Terms & Conditions</button>
    </div>
    <Footer />
    </div>
  );
};

export default LegalPage;
