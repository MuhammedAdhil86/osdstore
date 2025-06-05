// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("access_token") || null);

  useEffect(() => {
    if (token) {
      fetchProfile(token);
    } else {
      setLoading(false);
    }
  }, [token]);

  const fetchProfile = async (token) => {
    try {
      const res = await axios.get(
        "https://osdstore-seven.vercel.app/api/users/profile/",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUser(res.data);
    } catch (error) {
      console.error("Failed to fetch profile:", error);
      setUser(null);
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      setToken(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const res = await axios.post(
        "https://osdstore-seven.vercel.app/api/users/login/",
        { email, password }
      );

      if (res.data.access_token) {
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("refresh_token", res.data.refresh_token);
        setToken(res.data.access_token); // 🟢 Set token in state
        await fetchProfile(res.data.access_token);
        navigate("/");
      } else {
        throw new Error("No access token returned");
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null); // 🟢 Clear token in state
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/loginpage");
  };

  const updateUser = (updatedData) => {
    setUser(updatedData);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, token, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
