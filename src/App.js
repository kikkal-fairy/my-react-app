import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import BookingPage from './pages/BookingPage';
import './App.scss';

function App() {
  return (
    <Router>
      <Header />
      <main className="nhsuk-main-wrapper">
        <div className="nhsuk-width-container">
          <Routes> 
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>
        </div>
      </main>   
      <Footer />
    </Router>
  );
}

export default App;
