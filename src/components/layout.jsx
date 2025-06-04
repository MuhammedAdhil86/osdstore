import React, { useEffect, useState } from "react";
import Navbar from "./navbar/navbar";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Adjust path as necessary
import Login from "../components/login/login"; // Your login modal component
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  const { user, loading } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      const alreadyShown = sessionStorage.getItem("loginPopupShown");
      if (!alreadyShown) {
        const timer = setTimeout(() => {
          setShowLoginModal(true);
          sessionStorage.setItem("loginPopupShown", "true");
        }, 10000);

        return () => clearTimeout(timer);
      }
    }
  }, [loading, user]);

  return (
    <>
     <ScrollToTop />
      <Navbar />
      <div>
        <Outlet />
      </div>

      {showLoginModal && <Login onClose={() => setShowLoginModal(false)} />}
    </>
  );
}
