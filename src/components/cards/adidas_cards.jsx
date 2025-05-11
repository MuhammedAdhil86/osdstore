import React from "react";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ad1 from "../contents/card_img/ad1.jpeg";
import ad2 from "../contents/card_img/ad2.jpeg";
import ad3 from "../contents/card_img/ad3.jpeg";

// Define brands with their respective products
const brands = [
  {
    name: "Adidas",
    products: [
      { id: 1, name: "Nike Air MX Super 5000", price: 249, originalPrice: 299, image: ad1 },
      { id: 2, name: "Adidas Ultra Boost", price: 199, originalPrice: 250, image: ad2 },
      { id: 3, name: "Puma RS-X", price: 179, originalPrice: 220, image: ad3 },
    ],
  },
  {
    name: "Nike",
    products: [
      { id: 4, name: "Nike ZoomX Vaporfly", price: 299, originalPrice: 350, image: ad1 },
      { id: 5, name: "Nike Pegasus Trail 3", price: 189, originalPrice: 210, image: ad2 },
      { id: 6, name: "Nike Air Force 1", price: 159, originalPrice: 200, image: ad3 },
    ],
  },
  {
    name: "Jordan",
    products: [
      { id: 7, name: "Air Jordan 1 Retro", price: 220, originalPrice: 275, image: ad1 },
      { id: 8, name: "Jordan Jumpman", price: 180, originalPrice: 210, image: ad2 },
      { id: 9, name: "Jordan Delta 2", price: 200, originalPrice: 250, image: ad3 },
    ],
  },
];

export default function BrandSliders() {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    navigate("/product-details", { state: { product } });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div>
      {brands.map((brand, index) => (
        <motion.div
          key={index}
          className="container mx-auto px-4 overflow-hidden h-[28rem] sm:w-[35rem] sm:h-[28rem] md:w-[45rem] lg:w-[70rem] mb-10 mt-7"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Brand Name and View All */}
          <div className="flex items-center justify-between">
            <div className="flex-grow text-left lg:text-center pb-4">
              <span className="lg:font-semibold text-3xl sm:text-4xl font-bold md:text-4xl lg:text-5xl ">
                {brand.name}
              </span>
            </div>
            <motion.span
              className="relative sm:text-md text-lg inline-block transition-transform duration-300 ease-in-out hover:translate-y-1 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
              whileHover={{ y: 3 }}
            >
              VIEW ALL
            </motion.span>
          </div>

          {/* Product Slider */}
          <Slider {...settings}>
            {brand.products.map((product, i) => (
              <motion.div
                key={product.id}
                className="bg-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="relative w-full rounded-lg">
                  <a href="#">
                    <img
                      className="h-60 w-full rounded-t-lg object-cover sm:w-[33rem] p-2"
                      src={product.image}
                      alt={product.name}
                    />
                  </a>
                  <div className="mt-4 px-5 pb-5">
                    <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-slate-900">
                        {product.name}
                      </h5>
                    </a>
                    <div className="flex items-center justify-between mt-3">
                      <p>
                        <span className="text-3xl font-bold text-slate-900">
                          ₹{product.price}
                        </span>
                        <span className="text-sm text-slate-900 line-through ml-2">
                          ₹{product.originalPrice}
                        </span>
                      </p>

                      <motion.button
                        className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700"
                        onClick={() => handleAddToCart(product)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiShoppingCart className="mr-2" /> Shop Now
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      ))}
    </div>
  );
}
