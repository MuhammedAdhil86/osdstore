import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import image1 from "../img/nb-tumb/add-thumnail (2).jpeg";
import image2 from "../img/nb-tumb/add-thumnail (3).jpeg";
import image3 from "../img/nb-tumb/add-thumnail (4).jpeg";
import image4 from "../img/nb-tumb/add-thumnail(1).jpeg";

const initialProducts = [
  {
    id: 1,
    brand: "Adidas",
    name: "574 Core",
    price: 1100000,
    offerprice: 1350000,
    sizes: ["7", "8", "9"],
    image: image1,
  },
  {
    id: 2,
    brand: "New Balance",
    name: "327 Retro",
    price: 1220000,
    offerprice: 1400000,
    sizes: ["8", "9"],
    image: image2,
  },
  {
    id: 3,
    brand: "New Balance",
    name: "990v5 Made in USA",
    price: 2200000,
    offerprice: 2500000,
    sizes: ["10", "11"],
    image: image3,
  },
  {
    id: 4,
    brand: "New Balance",
    name: "9060 Gray Matter",
    price: 1950000,
    offerprice: 2300000,
    sizes: ["9", "10"],
    image: image4,
  },
  {
    id: 5,
    brand: "New Balance",
    name: "550 White/Red",
    price: 1320000,
    offerprice: 1600000,
    sizes: ["7", "8"],
    image: image1,
  },
  {
    id: 6,
    brand: "New Balance",
    name: "2002R Protection Pack",
    price: 1750000,
    offerprice: 2100000,
    sizes: ["9", "10", "11"],
    image: image2,
  },
];

const BestSelling = () => {
  const [products] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState(3000000);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
    setShowSort(false);
  };
  const navigate = useNavigate();

  const toggleSort = () => {
    setShowSort(!showSort);
    setShowFilter(false);
  };

  const handleSort = (type) => {
    let sorted = [...filteredProducts];

    switch (type) {
      case "newest":
        sorted.sort((a, b) => b.id - a.id);
        break;
      case "highToLow":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "lowToHigh":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "az":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    setFilteredProducts(sorted);
    setShowSort(false);
  };

  const handleSizeChange = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handlePriceChange = (e) => {
    setPriceRange(Number(e.target.value));
  };

  useEffect(() => {
    let filtered = products.filter((product) => {
      const matchBrand =
        selectedBrands.length === 0 || selectedBrands.includes(product.brand);

      // Check if any of the product's sizes are included in selectedSizes
      const matchSize =
        selectedSizes.length === 0 ||
        product.sizes.some((size) => selectedSizes.includes(size));

      const matchPrice = product.price <= priceRange;

      return matchBrand && matchSize && matchPrice;
    });

    setFilteredProducts(filtered);
  }, [products, selectedBrands, selectedSizes, priceRange]);

  // Get unique brands dynamically and sort alphabetically
  const uniqueBrands = Array.from(new Set(products.map((p) => p.brand))).sort();

  // All sizes available across all products for filter UI
  const allSizes = ["6", "7", "8", "9", "10", "11"];

  return (
    <div className="p-4 sm:p-6 font-sans mt-16 lg:mt-32 md:mt-32 sm:mt-20 relative">
      <div className="max-w-6xl mx-auto ">
        {/* Mobile-only Heading (top) */}
        <h1 className="block sm:hidden text-3xl font-bold mb-7 text-center border-b-2">
          New Arrivals
        </h1>
        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 w-full relative">
          {/* Centered Heading */}
          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl md:text-2xl font-semibold hidden sm:block">
            New Arrivals
          </h1>

          {/* Left: Item count */}
          <div className="flex items-center gap-2 min-w-0 overflow-hidden">
            <span className="text-sm text-gray-500 tracking-wide font-medium whitespace-nowrap">
              {filteredProducts.length} items found
            </span>
          </div>

          {/* Right: Filter & Sort */}
          <div className="flex gap-2 shrink-0 ml-auto">
            <button
              onClick={toggleFilter}
              className="px-4 py-2 border border-gray-300 text-sm font-medium tracking-wide rounded-md text-gray-700 hover:bg-gray-100 transition"
            >
              FILTER
            </button>
            <button
              onClick={toggleSort}
              className="px-4 py-2 border border-gray-300 text-sm font-medium tracking-wide rounded-md text-gray-700 hover:bg-gray-100 transition"
            >
              Sort
            </button>
          </div>
        </div>

        {/* Filter Popup */}
        {showFilter && (
          <div className="absolute top-24 right-6 w-72 bg-white shadow-lg border rounded-xl p-4 z-50">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-sm">Filter Options</h3>
              <button onClick={() => setShowFilter(false)}>
                <FaTimes className="text-gray-600" />
              </button>
            </div>

            {/* Brand Filter */}
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2">Brand</h4>
              {uniqueBrands.map((brand) => (
                <label key={brand} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                  />
                  {brand}
                </label>
              ))}
            </div>

            {/* Size Filter */}
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2">Size</h4>
              <div className="flex flex-wrap gap-2 text-sm">
                {allSizes.map((size) => (
                  <label
                    key={size}
                    className="border px-2 py-1 rounded cursor-pointer flex items-center"
                  >
                    <input
                      type="checkbox"
                      className="mr-1"
                      checked={selectedSizes.includes(size)}
                      onChange={() => handleSizeChange(size)}
                    />
                    {size}
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-2">
              <h4 className="text-sm font-medium mb-2">Price (Up to)</h4>
              <input
                type="range"
                min="1000000"
                max="3000000"
                value={priceRange}
                onChange={handlePriceChange}
                className="w-full"
              />
              <div className="text-sm text-gray-600 mt-1">
                Max: Rs. {priceRange.toLocaleString("id-ID")}
              </div>
            </div>
          </div>
        )}

        {/* Sort Popup */}
        {showSort && (
          <div className="absolute top-24 right-6 w-64 bg-white shadow-lg border rounded-xl p-4 z-50">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-sm">Sort By</h3>
              <button onClick={() => setShowSort(false)}>
                <FaTimes className="text-gray-600" />
              </button>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              {[
                { label: "Newest First", value: "newest" },
                { label: "Price High to Low", value: "highToLow" },
                { label: "Price Low to High", value: "lowToHigh" },
                { label: "Alphabetically (A-Z)", value: "az" },
                { label: "Alphabetically (Z-A)", value: "za" },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSort(option.value)}
                  className="text-left hover:bg-gray-100 p-2 rounded transition"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
          {filteredProducts.map((product) => {
            const discount = Math.round(
              (1 - product.price / product.offerprice) * 100
            );

            return (
              <div
                key={product.id}
                className="relative border rounded-xl overflow-hidden p-3 w-full md:max-w-[23rem]  mb-10 shadow-xl bg-white"
              >
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  -{discount}%
                </div>

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full sm:w-40 md:w-44 lg:w-52 xl:w-52 h-auto object-contain mx-auto mb-3"
                />

                <div className="text-xs text-gray-700 font-semibold mb-1 tracking-wide">
                  B <span className="font-normal">{product.brand}</span>
                </div>

                <div className="text-sm font-semibold text-gray-900 leading-tight tracking-tight">
                  {product.name}
                </div>

                {/* Show all available sizes */}
                <div className="text-xs text-gray-600 mb-1">
                  Sizes: {product.sizes.join(", ")}
                </div>

                <div className="text-black font-bold text-sm mb-1 tracking-normal">
                  Rs. {product.price.toLocaleString("id-ID")}
                </div>
                <div className="text-xs text-gray-400 line-through tracking-wide">
                  Rs. {product.offerprice.toLocaleString("id-ID")}
                </div>

                <button
                  className="w-full mt-2 bg-black text-white text-xs font-semibold py-2 rounded hover:bg-gray-800 transition"
                  onClick={() => navigate("/product-details")}
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
