// components/Nav.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define common link styles for reusability
  const linkClasses = "hover:text-[#c48820] transition-colors duration-200";
  const ctaButtonClasses =
    "px-5 py-2 rounded-full text-white bg-[#16327b] hover:bg-[#c48820] transition-colors duration-300 font-semibold shadow-md";

  return (
    <header className="top-0 w-full bg-white shadow-md z-50">
      <nav className="flex items-center justify-between px-5 md:px-10 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/techinika-logo.png" // Ensure this path is correct
            width={150}
            height={50}
            alt="Techinika Logo"
            priority // Prioritize loading for LCP
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-[#16327b]">
          <Link href="/" className={linkClasses}>
            Home
          </Link>
          <Link href="/masterclass" target="_blank" className={linkClasses}>
            Masterclass
          </Link>
          <Link href="/consultancy" className={linkClasses}>
            Consultation
          </Link>
          <Link href="/media" className={linkClasses}>
            Media
          </Link>
          <Link href="/community" className={linkClasses}>
            Community
          </Link>

          <Link
            href="/contact"
            rel="noopener noreferrer"
            className={ctaButtonClasses}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-7 h-7 text-[#16327b]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }} // Slightly more aggressive initial Y for mobile
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-6 text-[#16327b] font-medium text-xl z-40"
          >
            {/* Close button for mobile menu */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-5 text-[#16327b]"
              aria-label="Close menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={linkClasses}
            >
              Home
            </Link>
            <Link
              href="/masterclass"
              target="_blank"
              onClick={() => setIsOpen(false)}
              className={linkClasses}
            >
              Masterclass
            </Link>
            <Link
              href="/consultancy"
              onClick={() => setIsOpen(false)}
              className={linkClasses}
            >
              Consultation
            </Link>
            <Link
              href="/media"
              onClick={() => setIsOpen(false)}
              className={linkClasses}
            >
              Media
            </Link>
            <Link
              href="/community"
              onClick={() => setIsOpen(false)}
              className={linkClasses}
            >
              Community
            </Link>
            <Link
              href="/contact"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className={ctaButtonClasses}
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
