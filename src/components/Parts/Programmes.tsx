// components/Programmes.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const Programmes = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#16327b] text-center mb-12 md:mb-16"
        >
          Our <span className="text-[#c48820]">Products & Services</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 ">
          <ProductCard
            href="/media"
            imageSrc="/original.png"
            imageAlt="Techinika.com Logo"
            title="Techinika Media"
            status="-Original-"
            description="Learn how to do it yourself with our comprehensive guides and tutorials."
          />
          <ProductCard
            href="/masterclass"
            imageSrc="/masterclass.png"
            imageAlt="Techinika Learning Logo"
            title="Techinika Masterclass"
            status="-For B2C & B2B-"
            description="A highly customized training program to help you stay competitive on a job market."
          />
          <ProductCard
            href="https://ubunifu.techinika.co.rw"
            imageSrc="/consultancy.png"
            imageAlt="Ubunifu Labs"
            title="Ubunifu Labs"
            status="-For Businesses-"
            description="Our division for consultancy, research and development of business solutions."
          />
          <ProductCard
            href="/community"
            imageSrc="/community.png"
            imageAlt="Rwanda Technology Community Logo"
            title="Rwanda Technology Community"
            status="-Non-Profit-"
            description="We are building a community to ignite talents to learn and support them as they build."
          />
        </div>
      </div>
    </section>
  );
};

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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{
        y: -8,
        boxShadow:
          "0 15px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.04)",
      }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 flex flex-col items-center p-6 text-center h-full"
    >
      <Link
        href={href}
        target={
          href.startsWith("http") || href === "/masterclass"
            ? "_blank"
            : "_self"
        }
        className="flex flex-col items-center justify-between h-full w-full"
      >
        <div className="mb-4 relative w-full h-20 flex items-center justify-center">
          {" "}
          <Image
            alt={imageAlt}
            src={imageSrc}
            fill
            className="object-contain"
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
