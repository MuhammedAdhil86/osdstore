import React from "react";
import { motion } from "framer-motion";
import { Wrench, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom"; // If using React Router

export default function ComingSoon() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-black flex flex-col items-center justify-center px-6 text-white text-center"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-xl"
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          <Wrench className="w-14 h-14 text-white" />
          <h1 className="text-4xl sm:text-5xl font-extrabold">Coming Soon</h1>
          <p className="text-lg sm:text-xl text-gray-300">
            This section (like <span className="italic">Accessories</span>) is currently under construction.<br />
            We’re working on something awesome — stay tuned!
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center space-x-2 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
