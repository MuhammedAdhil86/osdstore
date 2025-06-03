// src/pages/BestSelling.jsx
import React from "react";

const products = [
    {
      id: 1,
      name: "Air Jordan 1 Retro",
      price: "$199.99",
      image: "https://placehold.co/300x300?text=Air+Jordan+1",
    },
    {
      id: 2,
      name: "Yeezy Boost 350",
      price: "$229.99",
      image: "https://placehold.co/300x300?text=Yeezy+350",
    },
    {
      id: 3,
      name: "Nike Dunk Low",
      price: "$149.99",
      image: "https://placehold.co/300x300?text=Nike+Dunk+Low",
    },
    {
      id: 4,
      name: "Adidas Forum Low",
      price: "$129.99",
      image: "https://placehold.co/300x300?text=Forum+Low",
    },
  ];
  

export default function BestSelling() {
  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">🔥 Best Selling Products</h1>
        <p className="mt-2 text-gray-600 text-lg">
          Discover the most popular picks our sneakerheads can't get enough of.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 hover:shadow-xl transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
              <p className="text-purple-600 font-bold mt-1">{product.price}</p>
              <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition font-medium">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
