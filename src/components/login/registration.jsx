
// src/components/Register.jsx
import React, { useState } from "react";
import {  FaLock, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/axios";
import bgImage from "../../img/login/domino-studio-164_6wVEHfI-unsplash.jpg";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post("/users/signup/set-password/", { name, email, password });
      navigate("/loginpage");
    } catch (err) {
      alert("Registration failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex mt-0 lg:mt-20">
      <div className="w-1/2 hidden md:block relative">
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <img src={bgImage} alt="Background" className="w-full h-full object-cover absolute top-0 left-0 z-0" />
      </div>

      <div className="flex-1 flex items-center justify-center bg-white px-8 py-10">
        <div className="max-w-md w-full space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Register</h2>
          <p className="text-gray-500">Create your account to get started</p>

          <form className="space-y-4" onSubmit={handleRegister}>
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-black rounded-full focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
       
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-black rounded-full focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white py-2 rounded-full font-semibold transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-sm text-center text-gray-500">
            Already have an account?{' '}
            <Link to="/loginpage" className="text-blue-600 hover:underline">
              Log in
            </Link>
          </p>

          <div className="flex justify-center space-x-4 text-gray-400">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
