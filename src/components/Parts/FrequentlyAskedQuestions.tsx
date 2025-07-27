"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa"; // Icon for accordion toggle
import Link from "next/link";

const faqs = [
  {
    question: "What kind of businesses do you work with?",
    answer:
      "We partner with businesses of all sizes, from startups to established enterprises, across various industries. Our solutions are tailored to meet unique challenges and foster growth.",
  },
  {
    question: "How long does it take to develop a custom software solution?",
    answer:
      "The timeline for custom software development varies greatly depending on the project's complexity, features, and specific requirements. We work closely with you during the discovery phase to provide a detailed project roadmap and estimated timeline.",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer:
      "Absolutely! Our commitment extends beyond deployment. We offer comprehensive post-launch support, maintenance, updates, and optimization services to ensure your solutions run smoothly and efficiently long-term.",
  },
  {
    question: "What is your consultation process like?",
    answer:
      "Our consultation process begins with a free, no-obligation discussion to understand your needs. We'll then provide insights, potential strategies, and a clear outline of how we can help, ensuring transparency from the start.",
  },
  {
    question: "How is pricing determined for your services?",
    answer:
      "Pricing for our services is tailored to each project's scope and complexity. We provide detailed proposals after our initial consultation, ensuring clarity and alignment with your budget and goals.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // State to manage which FAQ item is open

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-16 md:py-24">
      {" "}
      {/* Consistent background */}
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#16327b] text-center mb-12"
        >
          Frequently <span className="text-[#c48820]">Asked Questions</span>
        </motion.h2>

        {/* FAQ Grid/Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-semibold text-[#16327b]">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`text-[#c48820] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    id={`faq-answer-${index}`}
                    aria-labelledby={`faq-question-${index}`}
                  >
                    <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Link to Full FAQ Page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-700 mb-4">
            {`Still have questions? We're here to help!`}
          </p>
          <Link href="/contact">
            {" "}
            <button className="px-8 py-3 rounded-full text-white bg-[#16327b] hover:bg-[#c48820] transition-colors duration-300 font-semibold text-base shadow-lg">
              Contact Us for More Info
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
