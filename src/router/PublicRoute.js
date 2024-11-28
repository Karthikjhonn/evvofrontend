import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PublicRoute({ children }) {
  const {isAuth}=useAuth()
  console.log(isAuth);
  
  // const isAuth = localStorage.getItem("token");
  return isAuth ? <Navigate to="/" /> : children;
}

export default PublicRoute;
