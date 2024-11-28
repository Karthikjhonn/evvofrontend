import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    setIsAuth(false);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    if (token) {
      setIsAuth(true);
    }
  }, [isAuth]);
  const value = {
    user,
    login,
    logout,
    isAuth,
    setIsAuth,
    setUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
