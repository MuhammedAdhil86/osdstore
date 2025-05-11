import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import cartimg1 from '../../img/nb-tumb/add-thumnail (2).jpeg';
import cartimg2 from '../../img/nb-tumb/add-thumnail (3).jpeg';
import cartimg3 from '../../img/nb-tumb/add-thumnail (4).jpeg';

const initialCartItems = [
    { id: 1, name: 'Nb 500', price: 50, quantity: 1, image: cartimg1 },
    { id: 2, name: 'Product Two', price: 30, quantity: 1, image: cartimg2 },
    { id: 3, name: 'Product Three', price: 30, quantity: 2, image: cartimg3 },
];

const validCoupons = {
    "SAVE10": 10,
    "WELCOME20": 20
};

const Cartitem = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState(initialCartItems);
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [couponError, setCouponError] = useState('');

    const updateQuantity = (id, delta) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const applyCoupon = () => {
        if (validCoupons[couponCode]) {
            setDiscount(validCoupons[couponCode]);
            setCouponError('');
        } else {
            setDiscount(0);
            setCouponError('Invalid coupon code');
        }
    };

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discountAmount = (subtotal * discount) / 100;
    const total = (subtotal - discountAmount).toFixed(2);

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8 mt-20 lg:mt-32 md:mt-28 sm:mt-24">
            <div className="max-w-6xl mx-auto bg-white p-7 rounded-lg shadow-xl flex flex-col lg:flex-row gap-6">
                
                {/* Cart Items Section */}
                <div className="flex-1">
                    <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h1>

                    <div className="space-y-4">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white p-4 border rounded-lg shadow-sm mt-4">
                                <div className="flex items-center gap-6">
                                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                                    <div>
                                        <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                                        <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                    </div>
                                </div>

                                {/* Quantity & Remove Button */}
                                <div className="flex items-center gap-4">
                                    {/* Quantity Control */}
                                    <div className="flex items-center border rounded-lg overflow-hidden">
                                        <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-2 bg-gray-200 hover:bg-gray-300">-</button>
                                        <span className="px-4 py-2 bg-white">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-2 bg-gray-200 hover:bg-gray-300">+</button>
                                    </div>

                                    {/* Remove Item */}
                                    <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                                        <Trash2 size={22} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Summary & Coupon Section */}
                <div className="w-full lg:w-80 bg-gray-100 p-6 rounded-lg shadow-inner">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Order Summary</h2>

                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span className="font-medium">${subtotal.toFixed(2)}</span>
                        </div>

                        {discount > 0 && (
                            <div className="flex justify-between text-green-600">
                                <span>Discount ({discount}%)</span>
                                <span>- ${discountAmount.toFixed(2)}</span>
                            </div>
                        )}

                        <div className="flex justify-between font-semibold text-lg">
                            <span>Total</span>
                            <span>${total}</span>
                        </div>
                    </div>

                    {/* Coupon Code */}
                    <div className="mt-6">
                        <h3 className="text-md font-medium mb-2">Apply Coupon</h3>
                        <div className="flex">
                            <input
                                type="text"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                                className="flex-1 border rounded-l-lg p-2"
                                placeholder="Enter coupon code"
                            />
                            <button onClick={applyCoupon} className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700">Apply</button>
                        </div>
                        {couponError && <p className="text-red-500 mt-2">{couponError}</p>}
                        {discount > 0 && <p className="text-green-600 mt-2">Coupon applied! {discount}% off</p>}
                    </div>

                    {/* Checkout Button */}
                    <button onClick={() => navigate("/checkout")} className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold text-lg">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cartitem;
