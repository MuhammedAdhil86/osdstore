import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

function Profile() {
  const { user, loading, logout } = useAuth();
  const [showConfirm, setShowConfirm] = useState(false);

  if (loading)
    return (
      <div className="flex justify-center mt-40 text-lg font-medium">
        Loading user...
      </div>
    );

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center">
          <h2 className="text-2xl font-bold text-yellow-600 mb-4">
            You’re not logged in
          </h2>
          <p className="text-gray-600 mb-6">
            Please log in to access your profile and account details.
          </p>
          <Link
            to="/loginpage"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-sky-100 to-indigo-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center relative">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-indigo-100 flex items-center justify-center text-3xl font-bold text-indigo-500">
          {user.name?.charAt(0).toUpperCase() || user.username?.charAt(0).toUpperCase() || "U"}
        </div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Welcome, {user.name || user.username || "User"}
        </h1>
        <p className="text-gray-600 text-sm mb-4">
          Email: <span className="font-medium">{user.email}</span>
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => window.location.href = "/"}
            className="bg-indigo-500 text-white px-5 py-2 rounded-xl hover:bg-indigo-600 transition-all"
          >
            Go to Home
          </button>
          <button
            onClick={() => setShowConfirm(true)}
            className="bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition-all"
          >
            Logout
          </button>
        </div>

        {/* Logout Confirmation Modal */}
        {showConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Are you sure you want to logout?</h3>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={logout}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Yes, Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
