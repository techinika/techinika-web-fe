"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // For client logos or avatars
import Link from "next/link";

const testimonials = [
  {
    quote:
      "Techinika transformed our internal processes. Their custom software solution streamlined our operations, saving us countless hours and significantly boosting our team's productivity. Highly recommend!",
    name: "Jane Doe",
    title: "CEO, Innovate Corp",
    avatar: "/carine.jpg", // Replace with actual client avatars/photos
  },
  {
    quote:
      "The expertise and dedication of the Techinika team are unmatched. They guided us through a complex cloud migration effortlessly, ensuring zero downtime. A true partner in technology!",
    name: "John Smith",
    title: "CTO, GlobalTech Solutions",
    avatar: "/carine.jpg",
  },
  {
    quote:
      "Working with Techinika for our AI integration project was a game-changer. Their insightful consulting led to measurable improvements in our data analysis and decision-making capabilities.",
    name: "Sarah Lee",
    title: "Founder, Data Insights Ltd.",
    avatar: "/carine.jpg",
  },
];

export const Testimonials = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      {" "}
      {/* White background for this section */}
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#16327b] text-center mb-16"
        >
          Hear From Our{" "}
          <span className="text-[#c48820]">Satisfied Clients</span>
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-blue-50 rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-blue-100 h-full" // Subtle blue background for cards
            >
              {/* Quote Icon */}
              <blockquote className="relative mb-6">
                <svg
                  className="absolute top-0 left-0 -mt-6 -ml-6 w-12 h-12 text-[#c48820] opacity-20 transform -scale-x-100"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 14.725c0-5.141 3.892-10.519 10-10.519l-.984 2.189c-4.544 0-7.025 4.388-7.025 8.169h4.016l-7.025 10.156-3.753-4.195zm-12 0c0-5.141 3.892-10.519 10-10.519l-.984 2.189c-4.544 0-7.025 4.388-7.025 8.169h4.016l-7.025 10.156-3.753-4.195z"></path>
                </svg>
                <p className="text-gray-800 italic relative z-10 text-lg">
                  &quot;{testimonial.quote}&quot;
                </p>
              </blockquote>

              {/* Client Info */}
              <div className="mt-auto">
                {" "}
                {/* Pushes content to bottom if cards have different heights */}
                {testimonial.avatar && (
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full mx-auto mb-4 object-cover border-2 border-[#c48820] shadow-md"
                  />
                )}
                <p className="font-bold text-[#16327b] text-xl">
                  {testimonial.name}
                </p>
                <p className="text-gray-600 text-sm">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional: Call to action for more case studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-700 mb-4">
            Want to see how we delivered real impact?
          </p>
          <Link href="/case-studies">
            {" "}
            {/* Link to a dedicated case studies page */}
            <button className="px-8 py-3 rounded-full text-white bg-[#16327b] hover:bg-[#c48820] transition-colors duration-300 font-semibold text-base shadow-lg">
              Explore Our Case Studies
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
