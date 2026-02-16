import React from "react";

export default function ProtectedRoute() {
    const isAuth = localStorage.getItem("token");

    return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}
