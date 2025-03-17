import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/global.css"; // Keep the CSS import here

import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import ActivityDashboardPage from "./pages/ActivityDashboardPage.jsx";
import ActivityDetailPage from "./pages/ActivityDetailPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import ResourcesPage from "./pages/ResourcesPage.jsx";
import LegalPage from "./pages/LegalPage.jsx";
import Account from "./pages/Account.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
            { path: "/activity-detail", element: <ActivityDetailPage /> },
            { path: "/search", element: <SearchPage /> },
            { path: "/dashboard", element: <ActivityDashboardPage /> },
            { path: "/resources", element: <ResourcesPage /> },
            { path: "/legal", element: <LegalPage /> },
            { path: "/account", element: <Account /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
