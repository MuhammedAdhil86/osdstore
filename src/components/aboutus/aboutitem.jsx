import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.8, ease: "easeOut" },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutUs() {
  return (
    <motion.div
      className="max-w-5xl mx-auto px-6 py-16 mt-10 mb-10 md:mt-20 text-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h1
        className="text-5xl font-bold text-center mb-10 text-black"
        variants={childVariants}
      >
        About <span className="text-red-600">OSDSTORE</span>
      </motion.h1>

      <motion.p className="text-lg mb-6 leading-8" variants={childVariants}>
        <strong>OSDSTORE</strong> — short for <em>Obsessive Sneaker Disorder</em> — isn't just a store. It’s a movement. 
        Created for sneaker lovers, by sneaker lovers, we exist to feed your obsession with the freshest, boldest,
        and most exclusive kicks.
      </motion.p>

      <motion.p className="text-lg mb-6 leading-8" variants={childVariants}>
        Our shelves are stacked with handpicked sneakers from brands like Nike, Jordan, Adidas, and more. Whether you're
        flexing in the streets or collecting grails at home, OSDSTORE is your plug.
      </motion.p>

      <motion.div className="mt-10" variants={childVariants}>
        <h2 className="text-2xl font-semibold mb-3 text-black">🔥 Why Sneakerheads Love Us</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>100% authentic, brand-new sneakers — no compromises.</li>
          <li>Curated collections, exclusive drops, and OG classics.</li>
          <li>Fast shipping & reliable customer support.</li>
          <li>Passion-driven service — we know the culture because we live it.</li>
        </ul>
      </motion.div>

      <motion.div className="mt-12" variants={childVariants}>
        <h2 className="text-2xl font-semibold mb-3 text-black">🎯 Our Mission</h2>
        <p className="text-lg leading-8">
          To fuel the sneaker community with premium, hard-to-find sneakers and make every customer feel like a part of
          our family. We're not just selling shoes — we're empowering a lifestyle.
        </p>
      </motion.div>

      <motion.div className="mt-12" variants={childVariants}>
        <h2 className="text-2xl font-semibold mb-3 text-black">💬 Join the Hype</h2>
        <p className="text-lg leading-8 mb-4">
          Whether you're lacing up your first pair or adding to your collection, OSDSTORE welcomes you to the fam.
          Follow us on Instagram, DM us for the latest heat, or slide into our WhatsApp for quick drops and updates.
        </p>
        <p className="text-center text-lg font-semibold mt-6">
          Stay laced. Stay fresh. Stay <span className="text-red-600">obsessed</span>.
        </p>
      </motion.div>
    </motion.div>
  );
}
