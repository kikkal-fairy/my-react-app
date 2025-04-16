import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MantineProvider} from "@mantine/core";

import "/src/styles/global.css";
import App from "/src/App.jsx";

import HomePage from "/src/pages/HomePage/HomePage.jsx";
import ActivityDashboardPage from "/src/pages/ActivityDashboardPage.jsx";
import AboutUsPage from "/src/pages/AboutUsPage/AboutUsPage.jsx";

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
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <RouterProvider router={router} />
        </MantineProvider>
    </React.StrictMode>
);
