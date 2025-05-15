import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white rounded-xl shadow-sm p-4 mb-4">
    <div className="flex items-start gap-4 w-full sm:w-auto">
      <img src={item.image} alt={item.title} className="w-16 h-16 rounded-md object-cover" />
      <div>
        <h3 className="font-semibold text-base sm:text-lg">{item.title}</h3>
        <p className="text-sm text-gray-600">Size: {item.size}</p>
        <p className="text-sm text-gray-600">Color: {item.color}</p>
      </div>
    </div>
    <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4 mt-4 sm:mt-0 w-full sm:w-auto justify-between sm:justify-end">
      <div className="flex items-center gap-2 border rounded-full px-2">
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          className="w-6 h-6 rounded-full flex items-center justify-center"
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="w-6 h-6 rounded-full flex items-center justify-center"
        >
          +
        </button>
      </div>
      <p className="text-base sm:text-lg font-semibold">${item.price * item.quantity}</p>
      <button onClick={() => onRemove(item.id)} className="text-red-500 text-lg sm:text-xl">🗑️</button>
    </div>
  </div>
);

const OrderSummary = ({ subtotal }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 w-full md:w-1/3">
      <h2 className="text-lg sm:text-xl font-semibold mb-4">Order Summary</h2>
      <div className="flex justify-between mb-4 text-sm sm:text-base">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-bold text-base sm:text-lg mb-4">
        <span>Total</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <Link to="/checkout">
      <button className="w-full bg-black text-white py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base">Go to Checkout →</button>
      </Link>
    </div>
  );
};

const ShoppingCart = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/64x64.png?text=Tee",
      title: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      quantity: 1,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/64x64.png?text=Shirt",
      title: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      quantity: 1,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/64x64.png?text=Jeans",
      title: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      quantity: 1,
    },
  ]);

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setItems(items.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-12 mt-16 lg:mt-28 md:mt-28 sm:mt-16">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">YOUR CART</h1>
      <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
        <div className="w-full md:w-2/3">
          {items.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeItem}
            />
          ))}
        </div>
        <OrderSummary subtotal={subtotal} />
      </div>
    </div>
  );
};

export default ShoppingCart;
