import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const { token } = useSelector((state) => state.AuthReducer);
  const useAuth = () => {
    if (token) {
      return true;
    } else {
      return false;
    }
  };

  const auth = useAuth();
  return <>{auth ? <Outlet /> : <Navigate to="/" />}</>;
};

export default PrivateRoute;
