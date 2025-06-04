import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 md:bottom-0 md:w-full pb-24 sm:pb-28 lg:p-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Shop Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Shop</h2>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-400">All Products</Link></li>
              <li><Link to="/brand" className="hover:text-gray-400">Brands</Link></li>
              <li><Link to="/bestselling" className="hover:text-gray-400">Best Selling</Link></li>
              <li><Link to="/soon" className="hover:text-gray-400">Accessories</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li><Link to="/aboutus" className="hover:text-gray-400">About Us</Link></li>
              <li><Link to="/return-policy" className="hover:text-gray-400">policy</Link></li>
              <li><Link to="/soon" className="hover:text-gray-400">Press</Link></li>
              <li><Link to="/soon" className="hover:text-gray-400">Blog</Link></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Support</h2>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-gray-400">Contact Us</Link></li>
              <li><Link to="/delivery" className="hover:text-gray-400">Delivery</Link></li>
              <li><Link to="/return-policy" className="hover:text-gray-400">Returns policy</Link></li>
              <li><Link to="/faq" className="hover:text-gray-400">FAQ</Link></li>
            </ul>
          </div>

          {/* Follow Us Section with Icons */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <p className="mb-4 font-pacifico text-white relative inline-block transition-all duration-300 ease-in-out transform hover:-translate-y-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              Obsessive Sneaker Disorder
            </p>

            <div className="flex space-x-4 font">
              <a href="#" className="text-white hover:text-blue-400 text-xl"><FaFacebookF /></a>
              <a href="#" className="text-white hover:text-blue-400 text-xl"><FaTwitter /></a>
              <a
                href="https://www.instagram.com/osdstore.in/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-400 text-xl"
              >
                <FaInstagram />
              </a>
              <a href="#" className="text-white hover:text-red-400 text-xl"><FaYoutube /></a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} OSDSTORE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
