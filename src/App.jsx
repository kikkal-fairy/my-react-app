import React, { useContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from '/src/components/Header/Header.jsx';
import Navigation from '/src/components/Navigation/Navigation.jsx';
import Footer from "/src/components/Footer/Footer.jsx";

import { AuthContext } from '/src/context/AuthContext.jsx';

import "/src/styles/global.css";

function App() {
    const location = useLocation();
    const { user } = useContext(AuthContext);

    const excludedPaths = ['/login', '/register'];
    const hideLayout = excludedPaths.includes(location.pathname);

    const isProvider = user?.account_type === 'provider';

    return (
        <div className="app-container">
            <main className="main-content">
                {!hideLayout && <Header />}
                {!hideLayout && <Navigation />}
                <Outlet />
                {!hideLayout && <Footer />}
            </main>
        </div>
    );
}

export default App;
