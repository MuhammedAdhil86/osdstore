import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTimes, FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../context/AuthContext"; // Adjust path if needed

import bgImage from "../img/login/domino-studio-164_6wVEHfI-unsplash.jpg";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleClose = () => {
    navigate("/"); // Redirect to homepage or desired route
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      // If login does not redirect automatically, you can do it here:
      // navigate("/");
    } catch {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative flex flex-col md:flex-row sm:mt-12 mt-11 lg:mt-32 md:mt-32 mb-0 lg:mb-0 md:mb-0">
        {/* X Button */}
        <button
          onClick={handleClose}
          className="absolute top-10 right-5 z-50 text-black hover:text-white p-2 transition-all duration-300 ease-in-out hover:scale-110"
          aria-label="Close"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        {/* Left Side - Login Form */}
        <div className="flex-1 flex items-center justify-center p-6 bg-white">
          <div className="max-w-md w-full space-y-6">
            <div className="text-center">
              <h2 className="mt-4 text-3xl font-bold text-gray-800">OSDSTORE</h2>
              <p className="text-sm text-gray-500">
                Sign in to fuel your Obsessive Sneaker Disorder with the latest drops and exclusive deals.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="text-red-600 text-sm font-medium">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700">Email *</label>
                <input
                  type="email"
                  placeholder="Enter your mail address"
                  className="mt-1 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Password *</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="mt-1 w-full px-4 py-3 pr-10 border rounded-lg focus:ring-2 focus:ring-purple-600 outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-600 focus:outline-none"
                    tabIndex={-1}
                    aria-label={showPassword ? "Hide password" : "Show password"}
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
                <Link to="/forget-password" className="text-blue-600 hover:underline">
                  Forgot your password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 text-white rounded-lg font-semibold transition ${
                  loading ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-900"
                }`}
              >
                {loading ? "Logging in..." : "Log In"}
              </button>

              <p className="text-center text-sm">
                Don’t have an account?{" "}
                <Link to="/otpsent" className="text-blue-700 hover:underline">
                  Register here
                </Link>
              </p>
            </form>
          </div>
        </div>

        {/* Right Side - HD Image */}
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="h-full w-full bg-black bg-opacity-20"></div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
