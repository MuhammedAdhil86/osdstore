import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password2: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.password2) {
      setError("❌ Passwords do not match.");
    } else {
      setSuccess("✅ Registration data is valid!");
    }
  };

  return (
    <div className="max-w-sm mx-auto lg:mt-40  md:mt-40 sm:mt-20 mt-20 p-4 bg-white shadow-md rounded-md border">
      <h2 className="text-2xl font-semibold text-center text-gray-700">Create Account</h2>

      {error && (
        <div className="mt-3 bg-red-100 text-red-700 p-2 rounded-md shadow-sm">
          {error}
        </div>
      )}

      {success && (
        <div className="mt-3 bg-green-100 text-green-700 p-2 rounded-md shadow-sm">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={formData.last_name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
        <input
          type="password"
          name="password2"
          placeholder="Confirm Password"
          value={formData.password2}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-all"
        >
          Register
        </button>
      </form>

      <p className="text-center text-sm text-gray-500 mt-3">
        Already have an account?{" "}
        <span
          className="text-blue-500 cursor-pointer hover:underline"
          onClick={() => navigate("/login")}
        >
          Login here
        </span>
      </p>
    </div>
  );
};

export default Register;
