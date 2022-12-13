import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const token = localStorage.getItem("@TOKEN");

  if (!token) return <Navigate replace to="/" />;

  return <Outlet />;
};
