import React from "react";
import Login from "../pages/Auth/Login";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PrivateRoute({ children }) {
  const {isAuth}=useAuth()
  // const isAuth = localStorage.getItem("token")
  return isAuth ? children : <Navigate to="/login" />;
}

export default PrivateRoute;