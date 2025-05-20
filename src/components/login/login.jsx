import React, { useState } from "react";
import { FaTimes, FaEye, FaEyeSlash } from "react-icons/fa";

import bgImage from "../../img/login/domino-studio-164_6wVEHfI-unsplash.jpg";

const LoginForm = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePassword = () => setShowPassword(!showPassword);

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your real login/auth logic
    if (email && password) {
      localStorage.setItem("authToken", "dummy-token"); // Example token
      onClose(); // Close modal on successful login
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-white rounded-lg p-6 relative max-w-md w-full shadow-lg"
        style={{ maxHeight: "90vh", overflowY: "auto" }}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-black"
          aria-label="Close login modal"
        >
          <FaTimes className="w-6 h-6" />
        </button>

        {/* Left Side - Login Form */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="mt-4 text-3xl font-bold text-gray-800">OSDSTORE</h2>
            <p className="text-sm text-gray-500">
              Sign in to fuel your Obsessive Sneaker Disorder with the latest drops and exclusive deals.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email *</label>
              <input
                type="email"
                placeholder="Enter your mail address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password *</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full px-4 py-3 pr-10 border rounded-lg focus:ring-2 focus:ring-purple-600 outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-600 focus:outline-none"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <FaEye className="w-5 h-5" />
                  ) : (
                    <FaEyeSlash className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox text-purple-600" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot your password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 text-white bg-black hover:bg-gray-900 rounded-lg transition font-semibold"
            >
              Log In
            </button>

            <p className="text-center text-sm">
              Don’t have an account?{" "}
              <a href="/otpsent" className="text-blue-700 hover:underline">
                Register here
              </a>
            </p>
          </form>
        </div>

    
      </div>
    </div>
  );
};

export default LoginForm;
