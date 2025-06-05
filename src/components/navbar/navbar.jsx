import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Menu, X, Search, ShoppingBag, Heart, User2Icon, Tag,
  TrendingUp, Mail, Info, Home
} from "lucide-react";
import { IoHomeOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { RiOrderPlayFill } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext"; // ✅ Import useAuth

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { user } = useAuth(); // ✅ Get user from context

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/allproduct" },
    { name: "Brands", path: "/brand" },
    { name: "Best selling", path: "/bestselling" },
    { name: "Contact us", path: "/contact" },
    { name: "About us", path: "/aboutus" },
  ];

  return (
    <>
      <nav className="bg-white text-gray-900 fixed w-full top-0 left-0 z-50 shadow-md">

        {/* Top Bar */}
        <div className="w-full py-4 items-center justify-between px-6 md:flex hidden">
          <div>
            <Link to={'/profile'}>
              <button className="hover:text-blue-600 hidden sm:inline-block">
                <User2Icon size={24} />
              </button>
            </Link>
          </div>

          <Link
            to="/"
            className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold uppercase tracking-widest text-black text-center cursor-pointer"
          >
            OSDSTORE
          </Link>

          <div className="flex items-center space-x-4 ml-auto">
            <button className="hover:text-blue-600" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search size={24} />
            </button>
            <button className="hover:text-blue-600 hidden sm:inline-block">
              <Heart size={24} />
            </button>
            <Link to="/cart" className="hidden sm:inline-flex hover:text-blue-600">
              <ShoppingBag size={24} />
            </Link>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="container mx-auto flex justify-between items-center p-4 relative">
          <div className="flex items-center">
            <button className="md:hidden mr-4" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="responsive-logo text-xl font-bold uppercase tracking-widest text-black md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:hidden lg:hidden"
          >
            OSD STORE
          </motion.div>

          <ul className="hidden md:flex w-full text-smd lg:flex justify-around text-gray-500">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative cursor-pointer group px-2 py-1 hover:text-black"
              >
                <Link to={item.path}>{item.name}</Link>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </motion.li>
            ))}
          </ul>

          <div className="flex items-center space-x-4 md:hidden">
            <button className="hover:text-blue-600" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search size={24} />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute w-full bg-gray-100 text-gray-900 p-4 top-full flex justify-center"
          >
            <input
              type="text"
              placeholder="Search for shoes..."
              className="w-3/4 p-2 rounded-md bg-white text-gray-900 border border-gray-300 focus:outline-none"
            />
          </motion.div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-white text-gray-900 z-50 p-6 overflow-y-auto"
          >
            <button
              className="absolute top-6 right-6 text-gray-900"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            {/* ✅ Profile Section with Conditional Image */}
            <div className="flex items-center space-x-4 p-4 rounded-lg">
              <div className="relative w-16 h-16">
                <img
                  src={user?.image || "https://www.gravatar.com/avatar/?d=mp"}
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <Link to="/profile">
                  <button className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
                    <FiEdit2 size={14} className="text-gray-600" />
                  </button>
                </Link>
              </div>
              <div>
                <div className="text-lg font-medium text-gray-900">
                  {user?.name || "Guest"}
                </div>
                <div className="text-sm text-gray-500">
                  {user?.email || "guest@example.com"}
                </div>
              </div>
            </div>

            {/* Mobile Nav Items */}
            <ul className="flex flex-col space-y-4 mt-8">
              {[
                { name: "Home", icon: <Home size={20} />, path: "/" },
                { name: "Products", icon: <ShoppingBag size={20} />, path: "/allproduct" },
                { name: "Brands", icon: <Tag size={20} />, path: "/brand" },
                { name: "Best Selling", icon: <TrendingUp size={20} />, path: "/bestselling" },
                { name: "Contact Us", icon: <Mail size={20} />, path: "/contact" },
                { name: "About Us", icon: <Info size={20} />, path: "/aboutus" },
              ].map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center mt-2 space-x-3 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
                  >
                    {item.icon}
                    <span className="text-base font-medium">{item.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-200 text-black p-4 md:hidden shadow-md z-40">
        <div className="flex items-center justify-around font-semibold">
          <Link to="/" className="flex flex-col items-center hover:text-blue-600">
            <IoHomeOutline size={24} />
            <span className="text-xs">Home</span>
          </Link>
          <Link to="/order" className="flex flex-col items-center hover:text-blue-600">
            <RiOrderPlayFill size={24} />
            <span className="text-xs">Order</span>
          </Link>
          <Link to="/cart" className="flex flex-col items-center hover:text-blue-600">
            <LuShoppingCart size={24} />
            <span className="text-xs">Cart</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center hover:text-blue-600">
            <FaRegUserCircle size={24} />
            <span className="text-xs">Profile</span>
          </Link>
        </div>
      </div>
    </>
  );
}
