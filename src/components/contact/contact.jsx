import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex items-center justify-center p-8 mt-24 mb-16 md:mb-2"
    >
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-black"
        >
          <h2 className="text-3xl font-bold mb-4">CONTACT</h2>
          <p className="mb-6 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Address</h3>
              <p className="text-gray-800">523, Tower-24, Space IT-Park, Sohna Road, Sector-48, Gurugram-122018</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-800">+91 893-919-3704</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-800">info@promozdigital.com</p>
            </div>
            <div className="flex justify-start space-x-4 mt-6 border-t border-gray-400 pt-4">
              <FaFacebook className="text-blue-600 text-2xl cursor-pointer hover:text-blue-800 transition duration-300" />
              <FaInstagram className="text-pink-500 text-2xl cursor-pointer hover:text-pink-700 transition duration-300" />
              <FaTwitter className="text-blue-400 text-2xl cursor-pointer hover:text-blue-600 transition duration-300" />
              <FaYoutube className="text-red-600 text-2xl cursor-pointer hover:text-red-800 transition duration-300" />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="bg-slate-50 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-black text-2xl font-bold mb-4">GET IN TOUCH</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-500 hover:ring-gray-700 transition duration-300" />
            <input type="email" placeholder="Email" className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-500 hover:ring-gray-700 transition duration-300" />
            <textarea placeholder="Message" rows="4" className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-500 hover:ring-gray-700 transition duration-300"></textarea>
            <button type="submit" className="w-full p-3 bg-black text-white font-bold rounded shadow-lg transition duration-300 hover:bg-gray-800">Send Message</button>
          </form>
        </motion.div>
      </div>
      
    </motion.div>
  );
}
