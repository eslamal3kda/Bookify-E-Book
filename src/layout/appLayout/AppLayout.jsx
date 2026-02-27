import React from "react";
import AppNavbar from "./AppNavbar";
import AppFooter from "./AppFooter";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
    return (
        <>
            <AppNavbar />
            <Outlet />
            <AppFooter />
        </>
    );
}
