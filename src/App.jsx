import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import Account from './pages/Account.jsx';
import ActivityDashboardPage from './pages/ActivityDashboardPage.jsx';
import ActivityDetailPage from './pages/ActivityDetailPage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import ResourcesPage from './pages/ResourcesPage.jsx';
import LegalPage from './pages/LegalPage.jsx';
import Navigation from './components/Navigation/Navigation.jsx';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/activity-detail" element={<ActivityDetailPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/dashboard" element={<ActivityDashboardPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
