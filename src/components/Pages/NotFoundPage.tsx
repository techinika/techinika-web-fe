"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Assuming Nav and Footer components are available in these paths
import Nav from "../HeadFoot/Nav";
import Footer from "../HeadFoot/Footer";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Nav />

      <main className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-8xl font-extrabold text-[#16327b] mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Page <span className="text-[#c48820]">Not Found</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Oops! It looks like the page you are looking for does not exist or
            has been moved. Do not worry, we will help you find your way back.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-10"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-[#16327b] hover:bg-[#122863] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#16327b]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Go to Homepage
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="mt-8 text-sm text-gray-500"
          >
            If you believe this is an error, please contact us at{" "}
            <Link
              href="mailto:info@techinika.com"
              className="text-[#c48820] hover:underline"
            >
              info@techinika.com
            </Link>
            .
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
