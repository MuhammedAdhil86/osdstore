import Navbar from "./navbar/navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div> {/* Add margin to push content below fixed navbar */}
        <Outlet />
      </div>
    </>
  );
}
