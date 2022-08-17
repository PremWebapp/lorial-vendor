import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const { token } = useSelector(state => state.login)
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;