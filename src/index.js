import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss'; // Ensure this is renamed to .scss
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'nhsuk-frontend/packages/nhsuk.scss'; // NHS.UK CSS
import 'nhsuk-frontend/packages/nhsuk';    // NHS.UK JavaScript

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
