import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { AuthProvider } from '/src/context/AuthContext';

import "/src/styles/global.css";
import "/src/styles/provider.css";
import App from "/src/App.jsx";

// 🔹 Pages
import HomePage from "/src/pages/Home/HomePage.jsx";
import ActivityDashboardPage from "/src/pages/ActivityDashboard/ActivityDashboardPage.jsx";
import AboutUsPage from "/src/pages/AboutUs/AboutUsPage.jsx";
import PartnerOrganisationsPage from "/src/pages/PartnerOrganisations/PartnerOrganisationsPage.jsx";
import CareerGuidancePage from "/src/pages/CareerGuidance/CareerGuidancePage.jsx";
import ApplicationGuidancePage from "/src/pages/ApplicationGuidance/ApplicationGuidancePage.jsx";
import ActivityDetailPage from "/src/pages/ActivityDetail/ActivityDetailPage.jsx";

import Login from "/src/pages/Login/Login.jsx";
import Register from "/src/pages/Register/Register.jsx";

import ProviderDashboard from "/src/pages/ProviderPages/ProviderDashboard.jsx"
import ProviderCreate from "/src/pages/ProviderPages/ProviderCreate.jsx"
import ProviderPublished from "/src/pages/ProviderPages/ProviderPublished.jsx"
import ProviderDetailPage from "./pages/ProviderPages/ProviderDetailPage.jsx";
import ProviderApplicantPage from "./pages/ProviderPages/ProviderApplicantPage.jsx";
import ProviderBookingsPage from "./pages/ProviderPages/ProviderBookingsPage.jsx";
import ProviderFeedbackPage from "./pages/ProviderPages/ProviderFeedbackPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: "/AboutUs", element: <AboutUsPage/>},
            {path: "/PartnerOrganisations", element: <PartnerOrganisationsPage/>},
            {path: "/CareerGuidance", element: <CareerGuidancePage/>},
            {path: "/ApplicationGuidance", element: <ApplicationGuidancePage/>},
            {path: "/ActivityDetail/:id", element: <ActivityDetailPage/>},
            {path: "/ActivityDashboard", element: <ActivityDashboardPage/>},

            {path: "/Login", element: <Login/>},
            {path: "/Register", element: <Register/>},

            { path: "dashboard", element: <ProviderDashboard /> },
            { path: "create", element: <ProviderCreate /> },
            { path: "published", element: <ProviderPublished /> },
            { path: "provider-detail/:id/", element: <ProviderDetailPage />},
            { path: "provider-detail/:id/applicants", element: <ProviderApplicantPage /> },
            { path: "provider-detail/:id/bookings", element: <ProviderBookingsPage /> },
            { path: "provider-detail/:id/feedback", element: <ProviderFeedbackPage /> }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <MantineProvider withGlobalStyles withNormalizeCSS>
                <RouterProvider router={router} />
            </MantineProvider>
        </AuthProvider>
  </React.StrictMode>
);
