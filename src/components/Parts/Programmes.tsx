// components/Programmes.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const Programmes = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-16 md:py-24">
      {/* Consistent background gradient and increased padding */}
      <div className="container mx-auto px-6 md:px-12">
        {/* Use container for consistent max-width and padding */}
        {/* Section Title */}
        <motion.h2 // Added motion to the title
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#16327b] text-center mb-12 md:mb-16"
        >
          {/* Larger, bolder title with consistent color */}
          Our <span className="text-[#c48820]">Products & Services</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {/* Responsive grid with more sophisticated column breakdown */}
          {/* Product Card: Apprena */}
          <ProductCard
            href="https://apprena.app"
            imageSrc="/apprena.png"
            imageAlt="Apprena Logo" // More descriptive alt text
            title="Apprena"
            status="-Pending launch-"
            description="Operating system for education institutions and a source of rich education."
          />
          {/* Product Card: SecureDot */}
          <ProductCard
            href="https://securedot.tech"
            imageSrc="/securedot.png"
            imageAlt="SecureDot Logo" // More descriptive alt text
            title="SecureDot"
            status="-MVP Launched-"
            description="Instantly secure your website with trusted, automated SSL certificates."
          />
          {/* Product Card: Rwanda Technology Community */}
          <ProductCard
            href="/community"
            imageSrc="/community.png"
            imageAlt="Rwanda Technology Community Logo" // More descriptive alt text
            title="Rwanda Technology Community"
            status="-Non-Profit-"
            description="We are building a community to ignite talents to learn and support them as they build."
          />
          {/* Product Card: Techinika.com */}
          <ProductCard
            href="https://techinika.com"
            imageSrc="/original.png"
            imageAlt="Techinika.com Logo" // More descriptive alt text
            title="Techinika.com"
            status="-Original-"
            description="Learn how to do it yourself with our comprehensive guides and tutorials."
          />
          {/* Product Card: Techinika Learning (Masterclass) */}
          <ProductCard
            href="/masterclass"
            imageSrc="/masterclass.png"
            imageAlt="Techinika Learning Logo" // More descriptive alt text
            title="Techinika Learning"
            status="-For B2C & B2B-"
            description="A highly customized training program to help you stay competitive on a job market."
          />
          {/* Product Card: Technology Consultation */}
          <ProductCard
            href="/consultancy"
            imageSrc="/consultancy.png"
            imageAlt="Technology Consultation Icon" // More descriptive alt text
            title="Technology Consultation"
            status="-For Businesses-"
            description="We help your business determine right tools for the job, or build them for you."
          />
        </div>
      </div>
    </section>
  );
};

// Reusable ProductCard Component
const ProductCard = ({
  href,
  imageSrc,
  imageAlt,
  title,
  status,
  description,
}: {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  status: string;
  description: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Initial animation state for each card
      whileInView={{ opacity: 1, y: 0 }} // Animate into view
      viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of card is visible
      transition={{ duration: 0.5, ease: "easeOut" }} // Animation duration and easing
      whileHover={{
        y: -8, // Slightly more prominent lift
        boxShadow:
          "0 15px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.04)", // Stronger shadow
      }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 flex flex-col items-center p-6 text-center h-full"
    >
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : "_self"}
        className="flex flex-col items-center justify-between h-full w-full"
      >
        <div className="mb-4 relative w-full h-20 flex items-center justify-center">
          {" "}
          {/* Container for image */}
          <Image
            alt={imageAlt}
            src={imageSrc}
            fill // Make image fill the parent container
            className="object-contain" // Keep aspect ratio, fit within container
          />
        </div>
        <div className="flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-[#16327b] mb-2">
              {title}
            </h3>
            <p className="text-[#c48820] text-sm font-medium mb-3">{status}</p>
            <p className="text-gray-700 leading-relaxed text-base">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Programmes;
