// components/HeroSection.jsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full p-10 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center justify-center gap-6 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold leading-tight text-[#16327b]"
        >
          Technology <span className="text-[#c48820]">education</span>,
          information, and <span className="text-[#c48820]">solutions.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-5xl text-lg md:text-xl text-gray-700 leading-relaxed"
        >
          We have solutions to help you grow your business with technology,
          upskill your team, and stay informed with the latest trends and best
          practices in the tech industry.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4 mt-4"
        >
          <Link href="/masterclass" target="_blank">
            <button className="px-8 py-3 rounded-full text-white bg-[#c48820] hover:bg-[#c48820]/90 transition-colors duration-300 font-semibold text-base shadow-lg">
              Register to a Masterclass
            </button>
          </Link>
          <Link href="/consultancy" target="_blank">
            <button className="px-8 py-3 rounded-full text-white bg-[#16327b] hover:bg-[#16327b]/90 transition-colors duration-300 font-semibold text-base shadow-lg">
              Start a Project With Us
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
