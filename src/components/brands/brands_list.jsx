import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import image1 from "../../img/brand-logo/almond.png";
import image2 from "../../img/brand-logo/asis.png";
import image3 from "../../img/brand-logo/crocks.png";
import image4 from "../../img/brand-logo/cverse.png";
import image5 from "../../img/brand-logo/jordan.png";
import image6 from "../../img/brand-logo/nike.png";
import image7 from "../../img/brand-logo/puma.png";
import image8 from "../../img/brand-logo/reebok.png";

// IMPORTANT: Make sure file names in "img/brand-logo" exactly match
// These must be lowercase if imported like that (Linux is case-sensitive)

// Animation configs
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

// Static brand data
const staticBrands = [
  { name: "ALMOST GODS", image: image1 },
  { name: "ASICS", image: image2 },
  { name: "CROCKS", image: image3 },
  { name: "CONVERSE", image: image4 },
  { name: "JORDAN", image: image5 },
  { name: "NIKE", image: image6 },
  { name: "PUMA", image: image7 },
  { name: "REBOOK", image: image8 },
];

const BrandsGrid = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    setBrands(staticBrands);
  }, []);

  return (
    <motion.div
      className="container mt-20 md:mt-40 pb-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h1
        className="text-2xl pb-4 md:text-2xl font-bold text-center font-pacifico"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Explore Our Brands
      </motion.h1>

      <motion.div
        className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6"
        variants={containerVariants}
      >
        {brands.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No categories available.
          </p>
        ) : (
          brands.map((brand, index) => (
            <motion.a
              key={index}
              href={brand.link || "#"} // ✅ Prevent href crash
              className="flex flex-col items-center flex-wrap"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center rounded-md overflow-hidden transition-transform">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="mt-2 text-sm sm:text-lg md:text-xl text-black text-center font-san">
                {brand.name}
              </span>
            </motion.a>
          ))
        )}
      </motion.div>
    </motion.div>
  );
};

export default BrandsGrid;
