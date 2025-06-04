import React from "react";
import { motion } from "framer-motion";
import { Truck, AlertCircle } from "lucide-react";
import Footer from "../components/footer/footer";

export default function Delivery() {
  return (
   <>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white px-4 py-12 sm:px-6 lg:px-20 flex justify-center items-start"
    >
      <div className="w-full max-w-4xl bg-white rounded-3xl  p-6 sm:p-10  mt-10 lg:mt-24 md:mt-20 sm:mt-20">
        <header className="flex items-center space-x-4 mb-10">
          <Truck className="w-8 h-8 text-black" />
          <h1 className="text-3xl sm:text-4xl font-bold text-black">Delivery & Replacement Policy</h1>
        </header>

        <section className="space-y-8 text-gray-800 text-base sm:text-lg leading-relaxed">
          <p>
            We ensure timely and secure delivery of all orders across India. Below are the full details of our shipping and replacement process to help you shop with confidence.
          </p>

          <div>
            <h2 className="text-xl font-semibold mb-2">📦 Delivery Timeline</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Order processing:</strong> 1–2 business days</li>
              <li><strong>Delivery time:</strong> 4–5 business days after dispatch</li>
              <li><strong>Shipping area:</strong> PAN India only</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">💸 Delivery Charges</h2>
            <p>
              <strong>✅ Standard delivery is absolutely FREE.</strong> You pay nothing for shipping your original order.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">🔁 Replacement Policy</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Replacement requests accepted within 7 days of delivery</li>
              <li>Return shipping to us: <strong>Customer pays</strong></li>
              <li>Shipping for replacement product: <strong>₹150 (paid by customer)</strong></li>
              <li>Total time for replacement: <strong>10–15 business days</strong> including return and re-shipping</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">📍 Address & Tracking</h2>
            <p>
              Please ensure your delivery address is accurate. Tracking details will be shared via email once your order is shipped.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">📧 Need Help?</h2>
            <p>
              For delivery issues or questions, contact our support team at{" "}
              <a
                href="mailto:support@yourstore.com"
                className="text-blue-600 underline hover:text-blue-800"
              >
                support@yourstore.com
              </a>.
            </p>
          </div>

          {/* Size Suggestion Notice */}
          <div className="bg-black p-6 rounded-xl border-l-4  mt-10">
            <div className="flex items-center space-x-3 mb-3">
              <AlertCircle className="w-6 h-6 text-white" />
              <h2 className="text-lg sm:text-xl font-semibold  text-white">Avoid Replacement Delays</h2>
            </div>
            <ul className="list-disc pl-5  text-white space-y-2">
              <li>Measure your foot length in centimeters</li>
              <li>Send it to us before ordering if you are unsure</li>
              <li>We’ll help you choose the perfect size</li>
            </ul>
            <p className="mt-4 font-medium  text-white ">
              ⚠ Replacement takes time and involves cost. Getting your size right first saves effort and money.
            </p>
          </div>
        </section>
      </div>
    </motion.div>
    <Footer/>
   </>
  );
}
