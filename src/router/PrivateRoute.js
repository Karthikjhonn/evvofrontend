import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

function PrivateRoute({ children }) {
  const { isJwtTokenValid } = useAuth();
  const isAuth = isJwtTokenValid();
  // console.log("private", isAuth);
  if (!isAuth) {
    toast.error("Session Expired");
    return <Navigate to="/login" />;
  }
  return children;
}

export default PrivateRoute;
