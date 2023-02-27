import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
  const { token } = useSelector((state) => state.AuthReducer);

  const useAuth = () => {
    if (token) {
      return true;
    } else {
      return false;
    }
  };

  const auth = useAuth();

  return <>{!auth ? <Navigate to="/" /> : <Outlet />}</>;
};

export default ProtectedRoutes;
