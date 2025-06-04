import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Footer from "../components/footer/footer";

const faqs = [
  {
    question: "What is OSD Store?",
    answer:
      "OSD Store is your go-to destination for high-quality sneakers at unbeatable prices. We’re here to make top-tier sneaker culture accessible.",
  },
  {
    question: "Do I need an account to place an order?",
    answer:
      "Yes. An account helps manage your orders, track deliveries, and get access to exclusive releases.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "We accept all Razorpay-supported methods — UPI, credit/debit cards, net banking, and wallets.",
  },
  {
    question: "Is my payment information safe?",
    answer:
      "Absolutely. Razorpay ensures secure, encrypted, PCI-compliant transactions at all times.",
  },
  {
    question: "How do I track my order?",
    answer:
      "You’ll get a tracking link post-purchase, and you can also check under ‘My Orders’ in your account.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Return within 7 days of delivery if unused and in original condition. Check our Return Policy for full details.",
  },
  {
    question: "Are all sneakers authentic?",
    answer:
      "100%. Every pair we sell is verified authentic and sourced from reliable partners.",
  },
  {
    question: "What if I forget my password?",
    answer:
      "Click 'Forgot Password' on the login screen and follow the OTP-based recovery process.",
  },
  {
    question: "Need more help?",
    answer:
      "Reach out via our Contact page or email us at support@osdstore.com. We’ve got your back.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
 <>
 
 <div className="px-4 py-12 md:py-20 flex justify-center items-center bg-gradient-to-br from-white via-gray-50 to-purple-100  mt-10 lg:mt-24 md:mt-20 sm:mt-20">
      <div className="w-full max-w-5xl space-y-10">
        {/* Header */}
        <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-black via-blue-500 to-purple-600 bg-clip-text text-transparent">
  Need Help? We've Got Answers.
</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg mt-4">
            Everything you need to know about ordering, shipping, returns, and your sneaker journey at OSD.
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
              className="bg-white shadow-md rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-lg font-semibold text-gray-800 hover:bg-gray-50 transition"
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-purple-500" />
                ) : (
                  <ChevronDown className="text-purple-500" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-6 pb-5 text-gray-600 text-base"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center pt-8">
          <p className="text-gray-700">
            Still have questions?{" "}
            <a
              href="/contact"
              className="underline font-semibold  bg-gradient-to-r from-black via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Contact our support
            </a>
          </p>
        </div>
      </div>
    </div>
    <Footer/>
 </>
  );
}
