import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/common/Loading";

const Private = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (loading) {
    return <Loading />;
  }

  return children;
};

export default Private;
