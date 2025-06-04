import React, { useState, useContext } from "react";
import { FaTimes, FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Login = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useContext(AuthContext);
  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setFeedback({ type: "error", message: "Please enter email and password." });
      return;
    }

    setIsLoading(true);

    try {
      const user = await login(email, password);
      setFeedback({ type: "success", message: "Login successful!" });
      if (onClose) onClose();
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setFeedback({ type: "error", message: "Invalid email or password." });
      } else {
        setFeedback({ type: "error", message: "Something went wrong. Please try again." });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 relative max-w-md w-full shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-black"
        >
          <FaTimes className="w-6 h-6" />
        </button>

        <div className="space-y-6">
          <div className="text-center">
            <h2 className="mt-4 text-3xl font-bold text-gray-800">OSDSTORE</h2>
            <p className="text-sm text-gray-500">
              Sign in to fuel your Obsessive Sneaker Disorder with the latest drops.
            </p>
          </div>

          {/* Feedback Message */}
          {feedback && (
            <div
              className={`p-4 rounded-md text-sm font-medium ${
                feedback.type === "success"
                  ? "bg-green-100 text-green-800 border border-green-300"
                  : "bg-red-100 text-red-800 border border-red-300"
              }`}
            >
              {feedback.message}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email *
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password *
              </label>
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
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>

              {/* Forgot Password Link */}
              <div className="text-right mt-2">
                <Link
                  to="/forget-password"
                  className="text-sm text-purple-600 hover:text-purple-800 font-medium"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 text-white rounded-lg transition font-semibold ${
                isLoading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-black hover:bg-gray-900"
              }`}
            >
              {isLoading ? "Logging in..." : "Log In"}
            </button>

            {/* Register Link */}
            <div className="text-center text-sm text-gray-600 mt-4">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-purple-600 hover:text-purple-800 font-medium transition"
              >
                Register here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
