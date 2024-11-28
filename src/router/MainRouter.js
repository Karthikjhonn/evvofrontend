import React from "react";
import Home from "../pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Auth/Login";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/notfound/NotFound";
import { Toaster } from "react-hot-toast";
import SignUp from "../pages/Auth/SignUp";

function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/sign-up"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default MainRouter;
