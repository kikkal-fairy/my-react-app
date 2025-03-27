import React from 'react';
import { Outlet } from "react-router-dom";
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import "./styles/global.css";

function App() {
  return (
      <div className="app-container">
        <Header />
        <Navigation />
        <main className="main-content">
          <Outlet />  {/* This will render the current page */}
        </main>
        <Footer />
      </div>
  );
}

export default App;