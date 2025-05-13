import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

const Profile = () => {
  const defaultAvatar = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y';

  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    address: '123 Main Street',
    phone: '9876543210',
    pincode: '600001',
    state: 'Tamil Nadu',
  });

  const [image, setImage] = useState(defaultAvatar);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => setIsEditing(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleImageRemove = () => {
    setImage(defaultAvatar);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 lg:mt-36 md:mt-36 sm:mt-38 mt-16 mb-20 lg:mb-12 md:mb-12 sm:mb-24 bg-white rounded-xl shadow-lg ">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
        {/* Profile Image */}
        <div className="relative w-24 h-24 group">
          <img
            src={image}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border"
          />
          <div className="absolute bottom-0 right-0 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
            <label className="bg-white p-1 rounded-full shadow cursor-pointer">
              <FaEdit className="text-gray-600 text-sm" />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
            <button
              onClick={handleImageRemove}
              className="bg-white p-1 rounded-full shadow text-xs text-red-500 hover:text-red-700"
              title="Remove"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Basic Info */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-800">{form.name}</h2>
          <p className="text-gray-500">{form.email}</p>
        </div>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            disabled={!isEditing}
            value={form.name}
            onChange={handleChange}
            className={`mt-1 w-full px-3 py-2 rounded border ${
              isEditing ? 'bg-white border-gray-300' : 'bg-gray-100 border-transparent'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phone"
            disabled={!isEditing}
            value={form.phone}
            onChange={handleChange}
            className={`mt-1 w-full px-3 py-2 rounded border ${
              isEditing ? 'bg-white border-gray-300' : 'bg-gray-100 border-transparent'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <textarea
            name="address"
            rows="2"
            disabled={!isEditing}
            value={form.address}
            onChange={handleChange}
            className={`mt-1 w-full px-3 py-2 rounded border ${
              isEditing ? 'bg-white border-gray-300' : 'bg-gray-100 border-transparent'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        {/* Pincode */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Pincode</label>
          <input
            type="text"
            name="pincode"
            disabled={!isEditing}
            value={form.pincode}
            onChange={handleChange}
            className={`mt-1 w-full px-3 py-2 rounded border ${
              isEditing ? 'bg-white border-gray-300' : 'bg-gray-100 border-transparent'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        {/* State */}
        <div>
          <label className="block text-sm font-medium text-gray-700">State</label>
          <input
            type="text"
            name="state"
            disabled={!isEditing}
            value={form.state}
            onChange={handleChange}
            className={`mt-1 w-full px-3 py-2 rounded border ${
              isEditing ? 'bg-white border-gray-300' : 'bg-gray-100 border-transparent'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>
      </form>

      {/* Buttons */}
      <div className="flex justify-end mt-8">
        {!isEditing ? (
          <button
            onClick={handleEdit}
            className="px-5 py-2 text-sm font-medium bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
          >
            Edit Profile
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="px-5 py-2 text-sm font-medium bg-green-600 text-white rounded shadow hover:bg-green-700 transition"
          >
            Save Changes
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
