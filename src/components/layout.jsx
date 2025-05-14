import Navbar from "./navbar/navbar";
import { useEffect } from "react";
import { Outlet , useNavigate} from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      const isLoggedIn = localStorage.getItem("authToken"); // change this if needed

      // Optional: skip if already on login or signup
      const currentPath = window.location.pathname;
      const publicPaths = ["/login", "/signup", "/otpsent"];

      if (!isLoggedIn && !publicPaths.includes(currentPath)) {
        navigate("/login");
      }
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div> {/* Add margin to push content below fixed navbar */}
        <Outlet />
      </div>
    </>
  );
}
