import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MantineProvider} from "@mantine/core"; // ✅ ADDED
import "./styles/global.css";
import App from "./App.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";

import ActivityDashboardPage from "./pages/ActivityDashboardPage.jsx";
import ActivityDetailPage from "./pages/ActivityDetailPage/ActivityDetailPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";

import AboutUsPage from "./pages/AboutUsPage/AboutUsPage.jsx";
import ResourcesPage from "./pages/ResourcesPage.jsx";
import LegalPage from "./pages/LegalPage.jsx";
import Account from "./pages/AccountPage/Account.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: "ActivityDashboard", element: <ActivityDashboardPage/>},
            {path: "/AboutUs", element: <AboutUsPage/>},
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* ✅ WRAPPED EVERYTHING IN MantineProvider */}
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <RouterProvider router={router} />
        </MantineProvider>
    </React.StrictMode>
);
