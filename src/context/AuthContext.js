import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import { CreateUser, LoginAuth } from "../Api/ApiIndex";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const isJwtTokenValid = () => {
  const token = Cookies.get("token");
  if (!token || token == "" || token == null || token == undefined) {
    console.log("No token found");
    return false;
  }
  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp && decoded.exp < currentTime) {
      console.log("Token is expired");
      return false;
    }
    return true;
  } catch (error) {
    console.error("Invalid token:", error.message);
    return false;
  }
};
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const logIn = async (payload) => {
    try {
      setLoading(true);
      const res = await LoginAuth(payload);
      if (res.status == 200) {
        console.log(res?.data?.token);
        Cookies.set("token", res?.data?.token, {
          path: "/",
          secure: true,
          sameSite: "None",
        });
        console.log(res?.data?.message);
        toast.success(res?.data?.message || "Welcome Back!");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Some thing went wrong!");
    } finally {
      setLoading(false);
    }
  };
  const logout = () => {
    Cookies.remove("token");
    setUser(null);
    navigate("/login");
  };

  const signIn = async (payload) => {
    try {
      setLoading(true);
      const res = await CreateUser(payload);
      if (res.status == 200) {
        console.log(res?.data?.token);
        Cookies.set("token", res?.data?.token, {
          path: "/",
          secure: true,
          sameSite: "None",
        });

        console.log(res?.data?.message);
        toast.success(res?.data?.message || "Welcome Back!");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Some thing went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    setUser,
    logIn,
    logout,
    signIn,
    loading,
    isJwtTokenValid,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
