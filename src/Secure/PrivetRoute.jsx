import React from "react";
import useAuth from "../Hooks/useAuth";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import { Navigate, useLocation } from "react-router-dom";

function PrivetRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (user) {
    return children;
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  return <Navigate state={location?.pathname} to="/login" />;
}

export default PrivetRoute;
