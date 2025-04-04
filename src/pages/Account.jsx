import React from 'react';

import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Navigation from '../components/Navigation/Navigation.jsx';

const Account = () => {
  return (
    <div>
    <Header />
    <Navigation />
    <div className="account-container">
      <h1>Account Settings</h1>
      <p>Update your personal information and preferences.</p>
      <button className="save-button">Save Changes</button>
    </div>
    <Footer />
    </div>
  );
};

export default Account;