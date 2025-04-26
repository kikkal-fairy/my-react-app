import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import './Footer.css';

const Footer = () => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUserInfo(decoded);
            } catch (err) {
                console.error('Invalid token:', err);
            }
        }
    }, []);

    return (
        <footer className="footer">
            <p>&copy; 2025 NES Outreach</p>
            {userInfo ? (
                <p className="login-status">Logged in as <strong>{userInfo.email}</strong></p>
            ) : (
                <p className="login-status">Not logged in</p>
            )}
        </footer>
    );
};

export default Footer;
