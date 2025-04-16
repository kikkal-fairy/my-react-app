import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '/src/components/Header/Header.jsx';
import Navigation from '/src/components/Navigation/Navigation.jsx';
import Footer from "/src/components/Footer/Footer";
import "./styles/global.css";

function App() {
  return (
      <div className="app-container">
        <main className="main-content">
            <Header />
            <Navigation />
            <Outlet />  {/* This will render the current page */}
            <Footer />
        </main>
      </div>
  );
}

export default App;