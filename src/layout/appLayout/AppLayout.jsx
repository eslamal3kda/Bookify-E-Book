import React from "react";
import AppNavbar from "./AppNavbar";
import AppFooter from "./AppFooter";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";

export default function AppLayout() {
    return (
        <>
            <ScrollToTop />
            <AppNavbar />
            <Outlet />
            <AppFooter />
        </>
    );
}
