import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '/src/components/Header/Header.jsx';
import Navigation from '/src/components/Navigation/Navigation.jsx';
import Footer from '/src/components/Footer/Footer.jsx';
import '/src/styles/global.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Navigation />

      <main className="main-content">
        <Outlet /> {/* This will render the matched route page (e.g. HomePage, AboutUs) */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
