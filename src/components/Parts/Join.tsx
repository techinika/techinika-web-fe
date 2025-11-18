"use client";

import Link from "next/link";
import { motion } from "framer-motion"; // For subtle animations

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-[#16327b] to-[#1a4092] py-20 md:py-24 text-white text-center">
      {" "}
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
        >
          Ready to <span className="text-[#c48820]">Transform</span> Your
          Business?
        </motion.h2>

        {/* Benefit-driven Copy */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg md:text-xl opacity-90 mb-10"
        >
          {`Let's discuss how our tailored digital tools and expertise can
          streamline your operations, empower your team, and drive sustainable
          growth. Your next big leap starts here.`}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/consultancy">
            <button className="px-10 py-4 rounded-full text-[#16327b] bg-white hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-xl">
              Book Your Free Consultation
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
