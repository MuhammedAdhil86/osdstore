import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSignOutAlt,
  FaHome,
  FaImage,
} from "react-icons/fa";
import axios from "axios";

function Profile() {
  const { user, loading, logout, token, updateUser } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (user) setForm(user);
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-lg font-medium animate-pulse text-black">
        Loading user...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white px-4">
        <div className="bg-white rounded-2xl  p-8 max-w-sm w-full text-center border border-gray-300">
          <h2 className="text-3xl font-bold text-black mb-4">You’re not logged in</h2>
          <p className="text-gray-700 mb-6">Please log in to access your profile.</p>
          <Link
            to="/loginpage"
            className="inline-block bg-black hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-lg transition"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const res = await axios.patch(
        "https://osdstore-seven.vercel.app/api/users/profile/update/",
        form,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      updateUser(res.data);
      setEditMode(false);
      window.location.reload();
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white px-6 py-12 flex justify-center items-start sm:items-center mt-1 lg:mt-20 md:mt-20">
      <div className="bg-white  rounded-3xl p-10 max-w-6xl w-full flex flex-col lg:flex-row gap-12">
        {/* Left Panel */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/3">
          {user.image ? (
            <img
              src={user.image}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-black shadow-lg"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-7xl font-extrabold text-black mb-6 shadow-lg">
              {user.name?.[0]?.toUpperCase() || user.username?.[0]?.toUpperCase() || "U"}
            </div>
            
          )}
          <h1 className="text-3xl font-extrabold text-black text-center lg:text-left leading-tight">
            Welcome, {user.name || user.username || "User"}
          </h1>

          <h1 className="text-md font-extrabold text-black text-center lg:text-left leading-tight">
             { user.email}
          </h1>
        </div>

        {/* Right Panel */}
        <div className="flex flex-col lg:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-black text-base">
            {[
              { label: "Name", name: "name", icon: <FaUser /> },
              { label: "Address", name: "address", icon: <FaMapMarkerAlt /> },
              { label: "City", name: "city", icon: <FaMapMarkerAlt /> },
              { label: "State", name: "state", icon: <FaMapMarkerAlt /> },
              { label: "Zip Code", name: "zip_code", icon: <FaMapMarkerAlt /> },
              { label: "Phone", name: "phone_number", icon: <FaPhoneAlt /> },
              { label: "Image URL", name: "image", icon: <FaImage /> },
            ].map((field) => (
              <div
                key={field.name}
                className="flex items-center gap-4 bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="text-black text-2xl">{field.icon}</div>
                <div className="flex flex-col w-full">
                  <label className="text-gray-700 font-semibold mb-1">{field.label}</label>
                  {editMode ? (
                    <input
                      type="text"
                      name={field.name}
                      value={form[field.name] || ""}
                      onChange={handleChange}
                      className="font-medium border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black bg-white text-black"
                    />
                  ) : (
                    <span className="font-medium truncate max-w-xs">{user[field.name] || "N/A"}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Buttons Container */}
          <div className="mt-10 flex flex-col sm:flex-row sm:justify-start gap-6">
            {editMode ? (
              <>
                <button
                  onClick={handleSave}
                  className="flex-1 sm:flex-none bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-xl font-semibold transition shadow-md focus:outline-none focus:ring-2 focus:ring-black"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setForm(user);
                    setEditMode(false);
                  }}
                  className="flex-1 sm:flex-none bg-gray-300 hover:bg-gray-400 text-black px-8 py-3 rounded-xl font-semibold transition shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setEditMode(true)}
                  className="flex-1 sm:flex-none  bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-xl font-semibold transition shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  Edit Profile
                </button>
                <button
                  onClick={() => setShowConfirm(true)}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-xl font-semibold transition shadow-md focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </>
            )}
          </div>
        </div>

        {/* Logout Confirmation Modal */}
        {showConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 px-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full text-center">
              <h3 className="text-2xl font-bold text-black mb-6">
                Are you sure you want to logout?
              </h3>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="px-6 py-3 bg-gray-300 rounded-xl text-black font-semibold hover:bg-gray-400 transition focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={logout}
                  className="px-6 py-3 bg-black rounded-xl text-white font-semibold hover:bg-slate-600 transition focus:outline-none focus:ring-2 focus:ring-red-600"
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
