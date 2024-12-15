import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PublicRoute({ children }) {
  const { isJwtTokenValid } = useAuth();
  const isAuth = isJwtTokenValid();
  // console.log("public", isAuth);
  return isAuth ? <Navigate to="/" /> : children;
}

export default PublicRoute;
