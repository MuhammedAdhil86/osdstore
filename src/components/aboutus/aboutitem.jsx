import React from "react";
import { Truck, RotateCw, HelpCircle, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bgabout from "../../img/about/Orange_Sneakers_PNG_Clipart-391.png"

/**
 * AboutUs Page – OSDSTORE
 * - White background and black text
 * - Branded content for OSDSTORE sneakers shop
 * - Back button
 * - Framer Motion animations
 */

const features = [
  {
    icon: <Truck className="w-8 h-8 text-black" />,
    title: "Free Delivery",
    description:
      "Enjoy free delivery across all of India on every order. No hidden charges, no minimum purchase required—just seamless sneaker shopping.",
  },
  {
    icon: <RotateCw className="w-8 h-8 text-black" />,
    title: "Easy Returns",
    description:
      "Not the right fit? No worries. We offer a hassle-free return process. Read our full return policy on the Policy page for complete details.",
  },
  {
    icon: <HelpCircle className="w-8 h-8 text-black" />,
    title: "24/7 Support",
    description:
      "Have a question or need help? Our customer support team is available around the clock to assist you at any time.",
  },
];

export default function AboutItem() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="w-full mx-auto max-w-7xl bg-white min-h-screen p-6 md:p-12 mb-10">
      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="flex items-center gap-2 mb-6 text-black hover:text-gray-700 transition-colors"
        aria-label="Go back"
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </button>

      {/* HERO */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col-reverse md:flex-row items-center gap-10 rounded-2xl p-8 shadow-sm overflow-hidden"
      >
        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={bgabout}
            alt="Orange sneakers"
            className="w-full max-w-sm md:max-w-md drop-shadow-xl rotate-[-5deg]"
          />
        </div>

        {/* Copy */}
        <div className="flex-1 text-center md:text-left text-black">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Find Your <br className="hidden md:block" /> Perfect Sneakers
          </h1>
          <p className="mt-4 w-full md:max-w-md md:mx-0">
            At <strong>OSDSTORE</strong>, we bring you a handpicked collection of sneakers that blend comfort, style, and performance—all at prices that won’t break the bank. We’re committed to delivering{" "}
            <strong>quality sneakers at affordable prices</strong>, making top-tier footwear accessible to everyone. Whether you're stepping out or working out, we’ve got the perfect pair for you.
          </p>
      <Link to='/allproduct'>
      <button className="mt-6 inline-block bg-black text-white font-semibold rounded-lg px-6 py-3 shadow hover:bg-gray-800 transition-colors">
            Shop Now
          </button>
      </Link>
      
        </div>
      </motion.section>

      {/* FEATURES */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {features.map(({ icon, title, description }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * i, duration: 0.5 }}
            className="flex gap-4 p-6 bg-white rounded-2xl shadow hover:shadow-md transition-shadow"
          >
            <div className="shrink-0 bg-gray-200 p-3 rounded-full">{icon}</div>
            <div>
              <h3 className="font-semibold text-black mb-1">{title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* MAP SECTION */}
      <motion.section
        className="mt-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-black mb-4">Visit Us</h2>
        <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Kollam Bus Stand Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.754025951949!2d76.58520337506565!3d8.885522291182112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05fd06c308b05f%3A0xd8e1e27989c08f11!2sKollam%20KSRTC%20Bus%20Station!5e0!3m2!1sen!2sin!4v1716133764383!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.section>
    </main>
  );
}
