import React, { useState } from "react";
import { Link } from "react-router-dom";

import bgImage from "../../img/login/domino-studio-164_6wVEHfI-unsplash.jpg";
import Footer from "../footer/footer";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row sm:mt-12 mt-11 lg:mt-32 md:mt-32 mb-0 lg:mb-0 md:mb-0">
        {/* Left Side - Login Form */}
        <div className="flex-1 flex items-center justify-center p-6 bg-white">
          <div className="max-w-md w-full space-y-6">
            <div className="text-center">
              <h2 className="mt-4 text-3xl font-bold text-gray-800">OSDSTORE</h2>
              <p className="text-sm text-gray-500">
                Sign in to fuel your Obsessive Sneaker Disorder with the latest drops and exclusive deals.
              </p>
            </div>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email *</label>
                <input
                  type="email"
                  placeholder="Enter your mail address"
                  className="mt-1 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Password *</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="mt-1 w-full px-4 py-3 pr-10 border rounded-lg focus:ring-2 focus:ring-purple-600 outline-none"
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-600 focus:outline-none"
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      // Eye Open SVG
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    ) : (
                      // Eye Closed SVG
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.965 9.965 0 012.442-4.162m3.1-2.317A9.969 9.969 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.96 9.96 0 01-4.507 5.385M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M3 3l18 18" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox text-purple-600" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-blue-600 hover:underline">Forgot your password?</a>
              </div>

              <button
                type="submit"
                className="w-full py-3 text-white bg-black hover:bg-gray-900 rounded-lg transition font-semibold"
              >
                Log In
              </button>

              <p className="text-center text-sm">
  Don’t have an account? <Link to="/otpsent" className="text-blue-700 hover:underline">Register here</Link>
</p>
            </form>
          </div>
        </div>

        {/* Right Side - HD Image */}
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <div className="h-full w-full bg-black bg-opacity-20"></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LoginForm;
