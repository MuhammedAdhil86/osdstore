import { useState } from "react";
import { FaUser, FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CheckoutPart() {
  const [items, setItems] = useState([
    { id: 1, name: "Dark Low Grey - UK 10", price: 1349, quantity: 1 },
    { id: 2, name: "Dark Low Grey - UK 10", price: 1349, quantity: 1 }
  ]);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    pinCode: "",
    city: "",
    state: ""
  });

  const [errors, setErrors] = useState({});

  const deliveryCharge = 150;
  const couponDiscount = 50;

  const handleQuantityChange = (id, delta) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const handleRemoveItem = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const subTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subTotal + deliveryCharge - couponDiscount;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on input change
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.pinCode.trim()) {
      newErrors.pinCode = "Pin Code is required";
    } else if (!/^\d{6}$/.test(formData.pinCode)) {
      newErrors.pinCode = "Enter a valid 6-digit pin code";
    }

    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Ensure items are not empty before proceeding
      if (items.length === 0) {
        alert("Your cart is empty. Please add items before proceeding.");
        return;
      }

      navigate("/revieworder", { state: { formData, items, total } });
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:mt-36 md:mb-7 sm:mt-20 sm:mb-7 mt-20 mb-7">
      {/* Left Section - Contact & Address */}
      <div>
        <div className="border p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold">Contact Details</h3>
          <p className="mt-2 flex items-center gap-2">
            <FaUser /> Muhammed Achill | <FaPhone /> 8138976784
          </p>
        </div>

        <div className="border p-4 rounded-lg shadow-sm mt-4">
          <h3 className="font-semibold">Address</h3>
          <p className="text-sm text-gray-500">Please add your address</p>
          <div className="grid gap-2 mt-2">
            <input 
              className="border p-2 rounded w-full" 
              placeholder="Name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}

            <input 
              className="border p-2 rounded w-full" 
              placeholder="Mobile Number" 
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
            {errors.mobile && <p className="text-red-600 text-sm">{errors.mobile}</p>}

            <input 
              className="border p-2 rounded w-full" 
              placeholder="Address" 
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <p className="text-red-600 text-sm">{errors.address}</p>}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <input 
                className="border p-2 rounded" 
                placeholder="Pin Code" 
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
              />
              {errors.pinCode && <p className="text-red-600 text-sm col-span-3">{errors.pinCode}</p>}

              <input 
                className="border p-2 rounded" 
                placeholder="City" 
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
              {errors.city && <p className="text-red-600 text-sm col-span-3">{errors.city}</p>}

              <input 
                className="border p-2 rounded" 
                placeholder="State" 
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
              {errors.state && <p className="text-red-600 text-sm col-span-3">{errors.state}</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Order Summary */}
      <div className="border p-4 rounded-lg shadow-sm">
        <div className="flex justify-between items-center border-b pb-2">
          <h3 className="font-semibold">Items ({items.length})</h3>
        </div>

        {items.map(item => (
          <div key={item.id} className="mt-4 border-b pb-2">
            <div className="flex justify-between">
              <p>{item.name}</p>
              <p className="font-bold">₹{item.price}</p>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-2 mt-2">
              <button className="border px-2" onClick={() => handleQuantityChange(item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button className="border px-2" onClick={() => handleQuantityChange(item.id, 1)}>+</button>
              <button className="text-red-600 ml-auto" onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          </div>
        ))}

        {/* Continue Button */}
        <div className="col-span-1 md:col-span-2 text-center">
          <button 
            className="w-full bg-blue-600 text-white py-2 rounded mt-4" 
            onClick={handleSubmit}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
