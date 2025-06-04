import React from "react";
import { FaExchangeAlt, FaShippingFast, FaVideo, FaRuler } from "react-icons/fa";
import Footer from "../components/footer/footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

const slideInFromLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const slideInFromRight = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
};

const ReturnPolicy = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-10 lg:mt-28 md:mt-28 sm:mt-28">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeIn} className="text-center mb-12">
              <motion.h1 
                className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4"
                variants={itemVariants}
              >
                Return & Replacement Policy
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600"
                variants={itemVariants}
              >
                We want you to be completely satisfied with your purchase
              </motion.p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div 
              className="bg-white shadow-xl rounded-lg overflow-hidden"
              variants={scaleUp}
            >
              {/* Policy Highlights */}
              <motion.div 
                className="bg-gradient-to-r from-black to-indigo-600 p-6 text-white"
                variants={slideInFromLeft}
              >
                <h2 className="text-2xl font-bold mb-4">Policy Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div 
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <FaExchangeAlt className="text-2xl mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Easy Returns</h3>
                      <p className="text-purple-100">10-day replacement policy</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <FaShippingFast className="text-2xl mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Quick Processing</h3>
                      <p className="text-purple-100">10 working days total</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Main Content */}
              <div className="p-6 md:p-8">
                {/* Return Reasons */}
                <AnimatedSection>
                  <motion.div 
                    className="mb-10"
                    variants={fadeIn}
                  >
                    <motion.h2 
                      className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2"
                      variants={itemVariants}
                    >
                      When Can You Return?
                    </motion.h2>
                    <div className="space-y-6">
                      <motion.div 
                        className="flex items-start"
                        variants={slideInFromLeft}
                      >
                        <div className="flex-shrink-0 bg-red-100 p-3 rounded-full">
                          <svg
                            className="h-6 w-6 text-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900">
                            Quality Issues or Damages
                          </h3>
                          <p className="mt-1 text-gray-600">
                            If you receive a damaged or defective product, we'll replace it immediately.
                          </p>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="flex items-start"
                        variants={slideInFromRight}
                      >
                        <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                          <FaRuler className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900">
                            Size Issues
                          </h3>
                          <p className="mt-1 text-gray-600">
                            Got the wrong size? We'll help you find the perfect fit.
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatedSection>

                {/* Replacement Process */}
                <AnimatedSection>
                  <motion.div 
                    className="mb-10"
                    variants={fadeIn}
                  >
                    <motion.h2 
                      className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2"
                      variants={itemVariants}
                    >
                      Replacement Process
                    </motion.h2>
                    <div className="relative">
                      {/* Timeline */}
                      <div className="border-l-4 border-black absolute h-full left-4 top-0"></div>
                      
                      {/* Steps */}
                      <div className="space-y-8">
                        {[
                          {
                            title: "1. Initiate Return",
                            text: "Contact our support team to start the return process."
                          },
                          {
                            title: "2. Ship Back the Product",
                            text: "Pack the item securely and ship it back to us."
                          },
                          {
                            title: "3. Quality Check",
                            text: "We inspect the returned item upon arrival."
                          },
                          {
                            title: "4. Dispatch Replacement",
                            text: "We ship your replacement immediately after approval."
                          }
                        ].map((step, index) => (
                          <motion.div 
                            key={index}
                            className="relative"
                            variants={itemVariants}
                          >
                            <div className="absolute w-4 h-4 bg-black rounded-full left-4 -ml-2 mt-1"></div>
                            <div className="ml-12">
                              <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                              <p className="text-gray-600">{step.text}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>

                {/* Replacement Details */}
                <AnimatedSection>
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
                    variants={containerVariants}
                  >
                    <motion.div 
                      className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                      variants={itemVariants}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <FaShippingFast className="mr-2" />
                        Replacement Time
                      </h3>
                      <p className="text-gray-600">
                        Once we receive the returned product, we'll replace it within <span className="font-bold">10 working days</span> (including return shipping and replacement delivery).
                      </p>
                    </motion.div>

                    <motion.div 
                      className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                      variants={itemVariants}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <svg
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Replacement Charges
                      </h3>
                      <ul className="text-gray-600 space-y-2">
                        <li>• You pay return shipping charges</li>
                        <li>• ₹150 shipping charge for replacement</li>
                      </ul>
                    </motion.div>

                    <motion.div 
                      className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                      variants={itemVariants}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <FaVideo className="mr-2" />
                        Video Requirement
                      </h3>
                      <p className="text-gray-600">
                        You must record a <span className="font-bold">360° unboxing video</span> showing the product condition from beginning to end.
                      </p>
                    </motion.div>
                  </motion.div>
                </AnimatedSection>

                {/* Size Guidance */}
                <AnimatedSection>
                  <motion.div 
                    className="bg-indigo-50 p-6 rounded-lg border border-indigo-100"
                    variants={scaleUp}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Size Confusion?</h2>
                    <p className="text-gray-700 mb-4">
                      Provide your foot length in cm or inches and we'll help you select the perfect size.
                    </p>
             
                  </motion.div>
                </AnimatedSection>
              </div>

              {/* Footer Note */}
              <motion.div 
                className="bg-gray-100 px-6 py-4"
                variants={fadeIn}
              >
                <p className="text-center text-gray-600">
                  For any questions about our return policy, please contact our customer support.
                </p>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReturnPolicy;