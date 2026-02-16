import React from "react";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import PublicLayout from "./layout/PublicLayout/PublicLayout";
import LandingPage from "./pages/Public/LandingPage";
import AboutUs from "./pages/public/AboutUs";
import ContactUs from "./pages/public/ContactUs";
import Membership from "./pages/public/Membership";
import Login from "./pages/public/Login";
import Signup from "./pages/public/Signup";
import ProtectedRoute from "./routes/ProtectedRoute";
import AppLayout from "./layout/AppLayout/AppLayout";
import HomePage from "./pages/App/HomePage";
import Browse from "./pages/app/Browse";
import Collection from "./pages/app/Collection";
import Favorites from "./pages/app/Favorites";
import Profile from "./pages/app/Profile";

export default function App() {
    const routing = createBrowserRouter([
        {
            path: "/",
            element: <PublicLayout />,
            children: [
                { index: true, element: <LandingPage /> },
                { path: "about", element: <AboutUs /> },
                { path: "contact", element: <ContactUs /> },
                { path: "membership", element: <Membership /> },
                { path: "login", element: <Login /> },
                { path: "signup", element: <Signup /> },
            ],
        },
        {
            element: <ProtectedRoute />,
            children: [
                {
                    path: "/app",
                    element: <AppLayout />,
                    children: [
                        { index: true, element: <HomePage /> },
                        { path: "browse", element: <Browse /> },
                        { path: "collection", element: <Collection /> },
                        { path: "favorites", element: <Favorites /> },
                        { path: "profile", element: <Profile /> },
                    ],
                },
            ],
        },
    ]);
    return <RouterProvider router={routing}></RouterProvider>;
}
