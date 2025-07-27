// components/OurStory.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const OurStory = () => {
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      {" "}
      {/* Ensure overflow-hidden for animations */}
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#16327b] text-center mb-16"
        >
          Our <span className="text-[#c48820]">Unique</span> Journey
        </motion.h2>

        {/* Story Block 1: The Origin (Community Focus) */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-blue-50 rounded-xl shadow-lg p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          <div className="md:w-1/2 order-2 md:order-1">
            <h3 className="text-3xl font-bold text-[#16327b] mb-4">
              Born from a Vision: Empowering Rwandans
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Techinika Limited began with a singular, impactful goal right here
              in **Kigali, Rwanda**: to democratize digital knowledge. We saw a
              need to help fellow Rwandans learn essential digital skills with
              little or no barriers.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Through dedicated community initiatives, we proudly trained
              **thousands of Rwandans**, equipping them with the confidence and
              abilities to navigate and thrive in the digital world. This
              foundational experience deeply ingrained our commitment to
              **practical education and impactful solutions**.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
            {/* Image container now defines the space */}
            <div className="relative w-full aspect-w-4 aspect-h-2 rounded-lg overflow-hidden shadow-md border border-blue-100">
              <Image
                src="/education_first.png"
                alt="Rwandan Community Learning Digital Skills"
                fill // Image now fills the parent container
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimize for different screen sizes
                className="object-cover" // Ensures it covers the area without distortion
              />
            </div>
          </div>
        </motion.div>

        {/* Story Block 2: The Evolution (Transition to Businesses) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-16 flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12" // flex-row-reverse swaps order
        >
          <div className="md:w-1/2 order-2 md:order-1">
            <h3 className="text-3xl font-bold text-[#16327b] mb-4">
              Evolving with Need: Partnering with Businesses
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              As the digital landscape evolved, so did the needs of our
              community. We observed that many local and regional businesses
              faced unique challenges in digital transformation, often lacking
              the tailored tools and expert guidance to scale effectively.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Leveraging our deep understanding of digital ecosystems and our
              proven track record in problem-solving, we naturally extended our
              expertise. Techinika now partners with **businesses across various
              sectors**, providing sophisticated, custom digital solutions that
              drive efficiency, foster innovation, and unlock new opportunities
              for growth.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
            {/* Image container now defines the space */}
            <div className="relative w-full aspect-w-4 aspect-h-2 rounded-lg overflow-hidden shadow-md border border-gray-200">
              <Image
                src="/business_support.png"
                alt="Business Collaboration and Digital Solutions"
                fill // Image now fills the parent container
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimize for different screen sizes
                className="object-cover" // Ensures it covers the area without distortion
              />
            </div>
          </div>
        </motion.div>

        {/* Story Block 3: The Future (Core Values & CTA) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-primary text-white rounded-xl shadow-lg p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Our Enduring Values: Innovation, Integrity, Impact
          </h3>
          <p className="text-lg leading-relaxed opacity-90 max-w-3xl mx-auto mb-8">
            Our journey reflects our core belief: that technology, rooted in
            genuine impact, can transform lives and businesses. Whether
            empowering individuals or optimizing enterprises, our commitment to
            **innovation, integrity, and sustainable impact** remains
            unwavering.
          </p>
          <Link href="/story">
            <button className="px-8 py-3 rounded-full text-[#16327b] bg-white hover:bg-gray-100 transition-colors duration-300 font-semibold text-base shadow-lg">
              Learn More About Our Mission
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
