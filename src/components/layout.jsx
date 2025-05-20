import Navbar from "./navbar/navbar";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import LoginForm from "../components/login/login"; // Adjust path

export default function Layout() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      const isLoggedIn = localStorage.getItem("authToken"); // Your auth logic here

      // Optionally exclude public paths
      const publicPaths = ["/signup", "/otpsent"];
      if (!isLoggedIn && !publicPaths.includes(location.pathname)) {
        setShowLoginModal(true);
      }
    }, 10000); // 10 seconds delay

    return () => clearTimeout(timer);
  }, [location]);

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>

      {showLoginModal && <LoginForm onClose={closeLoginModal} />}
    </>
  );
}
