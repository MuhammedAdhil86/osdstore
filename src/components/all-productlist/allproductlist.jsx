import { FiShoppingCart, FiFilter, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import Image1 from "../../img/nb-tumb/add-thumnail (2).jpeg";
import Image2 from "../../img/nb-tumb/add-thumnail (3).jpeg";
import Image3 from "../../img/nb-tumb/add-thumnail (4).jpeg";

const productVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeInOut" } 
  },
};

const products = [
  { name: "Nike Cosmic Unity", price: 459, image: Image1, brand: "Nike", sizes: ["EU 44", "EU 45", "EU 46"] },
  { name: "Nike Air Max Plus 3", price: 799, image: Image2, brand: "Nike", sizes: ["EU 42", "EU 43", "EU 44"] },
  { name: "Adidas UltraBoost", price: 899, image: Image3, brand: "Adidas", sizes: ["EU 44", "EU 45"] },
  { name: "Puma RS-X  b    he", price: 499, image: Image1, brand: "Puma", sizes: ["EU 41", "EU 42", "EU 45"] },
  { name: "Nike Air Max Plus", price: 379, image: Image2, brand: "Nike", sizes: ["EU 43", "EU 45"] },
  { name: "Adidas Superstar", price: 359, image: Image3, brand: "Adidas", sizes: ["EU 42", "EU 44"] },
];

export default function AllProductsList() {
  const [filter, setFilter] = useState({ size: "All", price: 749, brand: "All" });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = products.filter(
    (product) =>
      product.price <= filter.price &&
      (filter.brand === "All" || product.brand === filter.brand) &&
      (filter.size === "All" || product.sizes.includes(filter.size))
  );

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto md:mt-32 lg:mt-32">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Unisex Sneakers</h1>

      {/* Filters Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 mb-6 gap-4">
        {/* Filters for Larger Screens */}
        <div className="hidden md:flex flex-wrap gap-x-8 gap-y-4 items-center">
          <label className="flex items-center space-x-2">
            <span className="font-medium">Size:</span>
            <select
              className="border p-1 rounded w-24"
              value={filter.size}
              onChange={(e) => setFilter({ ...filter, size: e.target.value })}
            >
              <option value="All">All</option>
              <option value="EU 41">EU 41</option>
              <option value="EU 42">EU 42</option>
              <option value="EU 43">EU 43</option>
              <option value="EU 44">EU 44</option>
              <option value="EU 45">EU 45</option>
              <option value="EU 46">EU 46</option>
            </select>
          </label>

          <label className="flex items-center space-x-2">
            <span className="font-medium">Price:</span>
            <input
              type="range"
              min="100"
              max="1000"
              value={filter.price}
              className="w-32 md:w-40"
              onChange={(e) => setFilter({ ...filter, price: Number(e.target.value) })}
            />
            <span className="ml-2">Under Rs. {filter.price}.00</span>
          </label>

          <label className="flex items-center space-x-2">
            <span className="font-medium">Brand:</span>
            <select
              className="border p-1 rounded w-32"
              value={filter.brand}
              onChange={(e) => setFilter({ ...filter, brand: e.target.value })}
            >
              <option value="All">All</option>
              <option value="Nike">Nike</option>
              <option value="Adidas">Adidas</option>
              <option value="Puma">Puma</option>
            </select>
          </label>
        </div>

        {/* Mobile Filter Button */}
        <div className="flex justify-end mt-8 md:mt-16 md:hidden">
          <button
            className="flex items-center bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 w-28"
            onClick={() => setIsFilterOpen(true)}
          >
            <FiFilter className="mr-2" /> Open filter
          </button>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Filter Options</h2>
              <button onClick={() => setIsFilterOpen(false)} className="text-gray-600 hover:text-black">
                <FiX size={24} />
              </button>
            </div>

            {/* Filter Options */}
            <label className="block mb-4">
              Size:
              <select
                className="w-full border p-2 rounded mt-1"
                value={filter.size}
                onChange={(e) => setFilter({ ...filter, size: e.target.value })}
              >
                <option value="All">All</option>
                <option value="EU 41">EU 41</option>
                <option value="EU 42">EU 42</option>
                <option value="EU 43">EU 43</option>
                <option value="EU 44">EU 44</option>
                <option value="EU 45">EU 45</option>
                <option value="EU 46">EU 46</option>
              </select>
            </label>

            <label className="block mb-4">
              Price:
              <input
                type="range"
                min="100"
                max="1000"
                value={filter.price}
                className="w-full mt-1"
                onChange={(e) => setFilter({ ...filter, price: Number(e.target.value) })}
              />
              <span className="block text-right">Under Rs. {filter.price}.00</span>
            </label>

            <label className="block mb-4">
              Brand:
              <select
                className="w-full border p-2 rounded mt-1"
                value={filter.brand}
                onChange={(e) => setFilter({ ...filter, brand: e.target.value })}
              >
                <option value="All">All</option>
                <option value="Nike">Nike</option>
                <option value="Adidas">Adidas</option>
                <option value="Puma">Puma</option>
              </select>
            </label>

            <button className="bg-black text-white px-4 py-2 rounded w-full hover:bg-gray-800" onClick={() => setIsFilterOpen(false)}>
              Apply Filters
            </button>
          </div>
        </div>
      )}

      {/* Products List */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {filteredProducts.map((product, index) => (
          <motion.div key={index} variants={productVariants} initial="hidden" animate="visible" className="border p-4 rounded-lg shadow-lg w-full h-full max-w-xs mx-auto ">
            <img src={product.image} alt={product.name} className="lg:w-full lg:h-48 object-cover mb-4" />
            <h2 className="text-lg md:text-xl font-semibold text-center w-34 h-12">{product.name}</h2>
            <p className="text-md md:text-lg font-bold mt-2 text-center">Rs. {product.price}</p>
            <button className="flex items-center mt-3 bg-black text-white md:py-2 lg:py-2 lg:px-4 md:px-4  rounded-md hover:bg-gray-800 w-full justify-center ">
              <FiShoppingCart className="mr-2 " /> Add to cart
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
