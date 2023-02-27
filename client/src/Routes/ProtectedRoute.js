import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const { token } = useSelector((state) => state.AuthReducer);
  const useAuth = () => {
    console.log(token);
    if (token) {
      return true;
    } else {
      return false;
    }
  };

  const auth = useAuth();
  return <>{auth ? <Navigate to="/" /> : <Outlet />}</>;
};

export default ProtectedRoute;
