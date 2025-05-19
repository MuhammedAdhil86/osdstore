import { FiShoppingCart, FiFilter } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import Image1 from "../../img/nb-tumb/add-thumnail (2).jpeg";
import Image2 from "../../img/nb-tumb/add-thumnail (3).jpeg";
import Image3 from "../../img/nb-tumb/add-thumnail (4).jpeg";
import bannerbg from "../../img/about/istockphoto-1451389365-612x612.jpg";

const products = [
  {
    name: "Nike Cosmic Unity ",
    price: 459,
    originalPrice: 699,
    image: Image1,
    brand: "Nike",
    sizes: ["EU 44", "EU 45", "EU 46"],
  },
  {
    name: "Nike Air Max Plus 3",
    price: 799,
    originalPrice: 999,
    image: Image2,
    brand: "Nike",
    sizes: ["EU 42", "EU 43", "EU 44"],
  },
  {
    name: "Adidas UltraBoost",
    price: 899,
    originalPrice: 1099,
    image: Image3,
    brand: "Adidas",
    sizes: ["EU 44", "EU 45"],
  },
  {
    name: "Puma RS-X",
    price: 499,
    originalPrice: 799,
    image: Image1,
    brand: "Puma",
    sizes: ["EU 41", "EU 42", "EU 45"],
  },
  {
    name: "Nike Air Max Plus",
    price: 379,
    originalPrice: 599,
    image: Image2,
    brand: "Nike",
    sizes: ["EU 43", "EU 45"],
  },
  {
    name: "Adidas Superstar",
    price: 359,
    originalPrice: 499,
    image: Image3,
    brand: "Adidas",
    sizes: ["EU 42", "EU 44"],
  },
];

export default function AllProductsList() {
  const [filter, setFilter] = useState({
    size: "All",
    price: 749,
    brand: "All",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredProducts = products.filter(
    (product) =>
      product.price <= filter.price &&
      (filter.brand === "All" || product.brand === filter.brand) &&
      (filter.size === "All" || product.sizes.includes(filter.size)) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
  };

  return (
    <div className="p-4 mt-24 md:p-8 max-w-6xl mx-auto md:mt-32 mb-10">
      {/* Responsive Heading */}
      <h1 className="hidden sm:block text-2xl md:text-4xl lg::text-3xl font-bold text-slate-900 mb-2 text-left">
        Explore Our Latest Sneakers Collection
      </h1>

      {/* heading and Filter Bar */}
      <div className="w-full flex items-center justify-between gap-2 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 ml-8 mt-3 text-center sm:text-left sm:hidden m">
          Explore Our Latest
        </h1>
        <button
          className="flex sm:hidden bg-black p-3 rounded-full text-white"
          onClick={() => setShowMobileFilters(true)}
        >
          <FiFilter size={20} />
        </button>
      </div>

      {/* Mobile Sale Banner */}
      <div className="shadow-xl rounded-2xl p-4 flex items-center justify-between mb-6 sm:hidden">
        <div>
          <h2 className="text-lg font-semibold">Latest Arrival</h2>
          <p className="text-sm text-gray-700"> All india free delivery</p>
         <Link to="/Bestselling">
         <button className="mt-2 px-4 py-2 bg-black text-white rounded-full text-xs">
            Shop Now
          </button>
         </Link>
        </div>
        <img src={bannerbg} alt="Sale" className="h-24" />
      </div>

      {/* Mobile Brand Filter Buttons */}
      <div className="flex gap-2 overflow-x-auto mb-6 sm:mb-0 sm:hidden ">
        {["All", "Nike", "Adidas", "Puma", "Fila"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter({ ...filter, brand: cat })}
            className={`px-4 py-1 rounded-full text-sm whitespace-nowrap ${
              filter.brand === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Mobile Filter Modal */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center sm:hidden">
          <div className="bg-white w-[90%] max-w-md p-4 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 text-xl"
              onClick={() => setShowMobileFilters(false)}
              aria-label="Close filter modal"
            >
              &times;
            </button>

            <h2 className="text-lg font-semibold mb-4 text-slate-800">Filter Products</h2>

            {/* Mobile Filter - Same as Desktop */}
            <div className="flex flex-col gap-4 text-sm text-gray-600">

              <label className="flex flex-col space-y-1">
                <span className="font-medium">Size:</span>
                <select
                  className="border p-2 rounded"
                  value={filter.size}
                  onChange={(e) => setFilter({ ...filter, size: e.target.value })}
                >
                  <option value="All">All</option>
                  {["EU 41", "EU 42", "EU 43", "EU 44", "EU 45", "EU 46"].map((sz) => (
                    <option key={sz} value={sz}>{sz}</option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col space-y-1">
                <span className="font-medium">Price:</span>
                <input
                  type="range"
                  min="1000"
                  max="10000"
                  value={filter.price}
                  className="w-full"
                  onChange={(e) =>
                    setFilter({ ...filter, price: Number(e.target.value) })
                  }
                />
                <span>Under ₹{filter.price}.00</span>
              </label>

              <label className="flex flex-col space-y-1">
                <span className="font-medium">Brand:</span>
                <select
                  className="border p-2 rounded"
                  value={filter.brand}
                  onChange={(e) => setFilter({ ...filter, brand: e.target.value })}
                >
                  <option value="All">All</option>
                  <option value="Nike">Nike</option>
                  <option value="Adidas">Adidas</option>
                  <option value="Puma">Puma</option>
                </select>
              </label>

              <button
                className="mt-4 bg-black text-white py-2 rounded-full"
                onClick={() => setShowMobileFilters(false)}
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Filters */}
      <div className="hidden sm:flex flex-row items-center justify-start gap-8 text-sm text-gray-600 mb-6 whitespace-nowrap">
        <label className="flex items-center space-x-2">
          <span className="font-medium">Size:</span>
          <select
            className="border p-1 rounded w-24"
            value={filter.size}
            onChange={(e) => setFilter({ ...filter, size: e.target.value })}
          >
            <option value="All">All</option>
            {["EU 41", "EU 42", "EU 43", "EU 44", "EU 45", "EU 46"].map((sz) => (
              <option key={sz} value={sz}>
                {sz}
              </option>
            ))}
          </select>
        </label>

        <label className="flex items-center space-x-2">
          <span className="font-medium">Price:</span>
          <input
            type="range"
            min="1000"
            max="10000"
            value={filter.price}
            className="w-40"
            onChange={(e) =>
              setFilter({ ...filter, price: Number(e.target.value) })
            }
          />
          <span className="ml-2">Under ₹{filter.price}.00</span>
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

      {/* Desktop Product Grid */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <img
              className="h-60 w-full object-cover"
              src={product.image}
              alt={product.name}
            />
            <div className="p-4">
              <h5 className="text-xl font-semibold text-slate-900">
                {product.name}
              </h5>
              <div className="mt-2 flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-slate-900">
                    ₹{product.price}
                  </span>
                  <span className="text-sm text-slate-500 line-through ml-2">
                    ₹{product.originalPrice}
                  </span>
                </div>
                <motion.button
                  className="flex items-center bg-slate-900 text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800"
                  onClick={() => handleAddToCart(product)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiShoppingCart className="mr-2" /> Shop Now
                </motion.button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Product Grid */}
      <div className="grid grid-cols-2 gap-4 sm:hidden">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-3 flex flex-col items-center text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-28 object-contain mb-2"
            />
            <h5 className="text-sm font-medium truncate w-full">
              {product.name}
            </h5>
            <p className="text-base font-bold text-slate-900 mt-1 mb-2">
              ₹{product.price}
              <span className="text-xs text-slate-500 line-through ml-1">
                ₹{product.originalPrice}
              </span>
            </p>
            <motion.button
              className="w-full mt-auto bg-slate-900 text-white text-xs py-2 rounded-md hover:bg-gray-800 flex items-center justify-center"
              onClick={() => handleAddToCart(product)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiShoppingCart className="mr-1" /> Shop Now
            </motion.button>
          </div>
        ))}
      </div>
    </div>
  );
}
