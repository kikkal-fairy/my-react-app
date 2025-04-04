import React from 'react';
import { Outlet } from "react-router-dom";
import "./styles/global.css";

function App() {
  return (
      <div className="app-container">
        <main className="main-content">
          <Outlet />  {/* This will render the current page */}
        </main>
      </div>
  );
}

export default App;