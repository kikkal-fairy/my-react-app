import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MantineProvider} from "@mantine/core";

import "/src/styles/global.css";
import App from "/src/App.jsx";

import HomePage from "/src/pages/Home/HomePage.jsx";
import ActivityDashboardPage from "/src/pages/ActivityDashboard/ActivityDashboardPage.jsx";
import AboutUsPage from "/src/pages/AboutUs/AboutUsPage.jsx";
import PartnerOrganisationsPage from "/src/pages/PartnerOrganisations/PartnerOrganisationsPage.jsx";
import CareerGuidancePage from "/src/pages/CareerGuidance/CareerGuidancePage.jsx";
import ApplicationGuidancePage from "/src/pages/ApplicationGuidance/ApplicationGuidancePage.jsx";
import ActivityDetailPage from "/src/pages/ActivityDetail/ActivityDetailPage";

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
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <RouterProvider router={router} />
        </MantineProvider>
    </React.StrictMode>
);
