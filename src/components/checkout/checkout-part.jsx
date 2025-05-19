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
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponError, setCouponError] = useState("");

  // Define valid coupons and their corresponding discounts
  const validCoupons = {
    SAVE10: 10,
    SAVE20: 20
  };

  const subTotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const couponDiscount = discount > 0 ? (subTotal * discount) / 100 : 0;

  const total = subTotal - couponDiscount;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
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
      if (items.length === 0) {
        alert("Your cart is empty. Please add items before proceeding.");
        return;
      }

      navigate("/revieworder", { state: { formData, items, total } });
    }
  };

  const applyCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    if (validCoupons.hasOwnProperty(code)) {
      setDiscount(validCoupons[code]);
      setCouponError("");
    } else if (code === "") {
      setCouponError("Please enter a coupon code");
      setDiscount(0);
    } else {
      setCouponError("Invalid coupon code");
      setDiscount(0);
    }
  };

  return (
    <div className="p-4 md:p-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 sm:mt-20 gap-6 md:mt-40 lg:mt-40 mb-7 mt-24">
      {/* Left Section */}
      <div>
        <div className="border p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold">Contact Details</h3>
          <p className="mt-2 flex items-center gap-2 text-sm text-gray-700">
            <FaUser /> Muhammed Achill | <FaPhone /> 8138976784
          </p>
        </div>

        <div className="border p-4 rounded-lg shadow-sm mt-4">
          <h3 className="font-semibold">Address</h3>
          <p className="text-sm text-gray-500 mb-2">Please add your address</p>
          <div className="grid gap-2">
            <input
              className="border p-2 rounded w-full"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-600 text-sm">{errors.name}</p>
            )}

            <input
              className="border p-2 rounded w-full"
              placeholder="Mobile Number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
            {errors.mobile && (
              <p className="text-red-600 text-sm">{errors.mobile}</p>
            )}

            <input
              className="border p-2 rounded w-full"
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && (
              <p className="text-red-600 text-sm">{errors.address}</p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <input
                className="border p-2 rounded"
                placeholder="Pin Code"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
              />
              <input
                className="border p-2 rounded"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
              <input
                className="border p-2 rounded"
                placeholder="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
            {errors.pinCode && (
              <p className="text-red-600 text-sm">{errors.pinCode}</p>
            )}
            {errors.city && (
              <p className="text-red-600 text-sm">{errors.city}</p>
            )}
            {errors.state && (
              <p className="text-red-600 text-sm">{errors.state}</p>
            )}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="border p-4 rounded-lg shadow-sm flex flex-col justify-between">
        <div>
          <h3 className="font-semibold mb-4">Order Summary</h3>
          {items.map((item) => (
            <div key={item.id} className="flex justify-between text-sm mb-2">
              <span>
                {item.name} x{item.quantity}
              </span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}
          <hr className="my-2" />
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subTotal}</span>
          </div>

          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span>-₹{couponDiscount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-green-600">Delivery Charge</span>
            <span className="text-green-600">-₹0.00</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>

          {/* Coupon Code */}
          <div className="mt-6 border p-4 rounded-lg shadow-sm">
            <h3 className="text-md font-medium mb-2">Apply Coupon</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="border p-2 rounded flex-1"
                placeholder="Enter coupon code"
              />
              <button
                onClick={applyCoupon}
                className="bg-black text-white px-4 py-2 rounded hover:bg-black"
              >
                Apply
              </button>
            </div>
            {couponError && (
              <p className="text-red-500 mt-2">{couponError}</p>
            )}
            {discount > 0 && (
              <p className="text-green-600 mt-2">
                Coupon applied! {discount}% off
              </p>
            )}
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="mt-4 bg-black text-white py-3 rounded font-semibold hover:bg-gray-800"
        >
          Proceed to Review
        </button>
      </div>
    </div>
  );
}
