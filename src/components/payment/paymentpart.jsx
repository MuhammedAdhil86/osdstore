import { FaCheckCircle } from "react-icons/fa";

export default function ReviewOrder({ checkoutData = {}, items = [], total = {}, onConfirm }) {
  return (
    <div className="p-6 max-w-5xl mx-auto md:mt-36 mb-7 sm:mt-20 mt-20">
      {/* Address Section */}
      <div className="border p-4 rounded-lg shadow-sm mb-4">
        <h3 className="font-semibold">Address</h3>
        <p className="mt-1">{checkoutData.name || "N/A"}, {checkoutData.mobile || "N/A"}</p>
        <p className="text-gray-600">
          {checkoutData.address || "N/A"}, {checkoutData.city || "N/A"}, {checkoutData.state || "N/A"} - {checkoutData.pinCode || "N/A"}
        </p>
      </div>

      {/* Shipping Options */}
      <div className="border p-4 rounded-lg shadow-sm mb-4">
        <h3 className="font-semibold">Shipping Options</h3>
    
        <p className="text-sm text-gray-500">Get it by Thursday, 20 Mar 2025</p>
      </div>

      {/* Additional Notes */}
      <div className="border p-4 rounded-lg shadow-sm mb-4">
        <h3 className="font-semibold">Additional Notes</h3>
        <p>Alternative Mobile Number</p>
        <input
          className="border p-2 rounded w-full mt-1"
          placeholder="Enter alternative number"
          value={checkoutData.altMobile || ""}
          readOnly
        />
      </div>

  

      {/* Order Summary */}
      <div className="border p-4 rounded-lg shadow-sm mb-4">
        <h3 className="font-semibold">Items ({items.length})</h3>
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="flex justify-between border-b py-2">
              <p>{item.name}</p>
              <p className="font-bold">₹{item.price}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No items in the cart.</p>
        )}
      </div>

      {/* Bill Details */}
      <div className="border p-4 rounded-lg shadow-sm">
        <h3 className="font-semibold">Bill Details</h3>
        <div className="flex justify-between">
          <p>Sub Total:</p>
          <p>₹{total.subTotal || 0}</p>
        </div>
      
    
        <div className="flex justify-between">
          <p>Prepaid Shipping Discount:</p>
          <p className="text-green-600">-₹150</p>
        </div>
        <div className="flex justify-between">
          <p>Coupon Discount:</p>
          <p className="text-red-600">-₹50</p>
        </div>
        <div className="flex justify-between font-bold mt-2">
          <p>Payable:</p>
          <p>₹{total.finalAmount || 0}</p>
        </div>
      </div>

      {/* Success Message */}
      <div className="flex items-center text-green-600 bg-green-100 p-3 rounded-lg mt-4">
        <FaCheckCircle />
        <p className="ml-2">₹1300 saved so far on this order</p>
      </div>

      {/* Pay Now Button */}
      <button
        className="w-full bg-blue-600 text-white py-2 rounded mt-4"
        onClick={onConfirm}
      >
        Pay Now
      </button>
    </div>
  );
}
