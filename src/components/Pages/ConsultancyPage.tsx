// components/ConsultancyPage.jsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "../HeadFoot/Footer"; // Ensure path is correct
import Nav from "../HeadFoot/Nav"; // Ensure path is correct

// Reusable component for portfolio cards
const PortfolioCard = ({
  href,
  imageSrc,
  imageAlt,
  title,
  description,
}: {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
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
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 flex flex-col h-full"
    >
      <Link href={href} className="flex flex-col h-full">
        <div className="relative w-full aspect-video">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
              No Image Available
            </div>
          )}
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl md:text-2xl font-semibold text-[#16327b] mb-2">
            {title}
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4 flex-grow">
            {description}
          </p>
          <span className="text-[#c48820] font-medium hover:underline self-start">
            Learn More &rarr;
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default function ConsultancyPage() {
  const portfolio = [
    {
      id: 1,
      title: "Members Management System for Sherrie Silver Foundation",
      description:
        "A comprehensive platform designed to streamline the management of members, volunteers, and daily operations for non-profit organizations.",
      picture: "/sherriekms.png",
      link: "/consultancy/sherrie-silver-foundation",
    },
    {
      id: 2,
      title: "Alumni Management System for YALI Rwanda Chapter",
      description:
        "A bespoke system developed to help educational and leadership organizations keep their alumni information accurate and engage their network effectively.",
      picture: "/yaliams.png",
      link: "/consultancy/yali-alumni-management",
    },
    // Add more portfolio items as needed
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-24 md:py-32 text-center relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold leading-tight text-[#16327b] mb-4"
          >
            Expert{" "}
            <span className="text-[#c48820]">IT & Software Consultancy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed mb-8"
          >
            We empower businesses to thrive in the digital age by identifying
            challenges, crafting tailored solutions, and implementing strategies
            that drive efficiency, innovation, and sustainable growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Link
              href="#contact"
              className="px-8 py-4 rounded-full text-white bg-[#c48820] hover:bg-[#c48820]/90 transition-colors duration-300 font-semibold text-lg shadow-lg"
            >
              Get Your Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What We Do / Our Approach Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-[#16327b] text-center mb-12 md:mb-16"
          >
            Our <span className="text-[#c48820]">Consultancy Approach</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="bg-blue-50 p-8 rounded-xl shadow-md text-center"
            >
              <h3 className="text-2xl font-semibold text-[#16327b] mb-4">
                Discovery & Analysis
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We begin by deeply understanding your current business
                processes, pain points, and strategic goals through thorough
                analysis and collaborative workshops.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="bg-blue-50 p-8 rounded-xl shadow-md text-center"
            >
              <h3 className="text-2xl font-semibold text-[#16327b] mb-4">
                Strategy & Recommendations
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Based on our findings, we develop tailored IT and software
                strategies, presenting clear recommendations and a roadmap for
                implementation.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="bg-blue-50 p-8 rounded-xl shadow-md text-center"
            >
              <h3 className="text-2xl font-semibold text-[#16327b] mb-4">
                Implementation & Support
              </h3>
              <p className="text-gray-700 leading-relaxed">
                From custom software development to system integration, we
                oversee the seamless implementation of solutions and provide
                ongoing support to ensure sustained success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-[#16327b] text-center mb-12 md:mb-16"
          >
            Why Choose Our <span className="text-[#c48820]">Consultancy</span>?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex-shrink-0 text-3xl text-[#c48820]">💡</div>
              <div>
                <h3 className="text-2xl font-semibold text-[#16327b] mb-2">
                  Strategic Insight
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Gain a clear vision for your digital future with expert advice
                  tailored to your unique business context.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex-shrink-0 text-3xl text-[#c48820]">🚀</div>
              <div>
                <h3 className="text-2xl font-semibold text-[#16327b] mb-2">
                  Accelerated Growth
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Implement cutting-edge solutions that optimize operations,
                  reduce costs, and unlock new revenue streams.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex-shrink-0 text-3xl text-[#c48820]">🛡️</div>
              <div>
                <h3 className="text-2xl font-semibold text-[#16327b] mb-2">
                  Risk Mitigation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Navigate complex technology landscapes with confidence,
                  minimizing risks and ensuring compliance.
                </p>
              </div>
            </motion.div>
            {/* NEW ADDITION: Budget-Friendly Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex-shrink-0 text-3xl text-[#c48820]">💰</div>{" "}
              {/* Money bag emoji for visual */}
              <div>
                <h3 className="text-2xl font-semibold text-[#16327b] mb-2">
                  Budget-Conscious Solutions
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {`Whether it's a custom build or an existing platform, we find
                  and implement the best solution that perfectly aligns with
                  your budget.`}
                </p>
              </div>
            </motion.div>
            {/* End NEW ADDITION */}
            <motion.div // Keeping this one, potentially move its content if 5 points is too much or rephrase
              initial={{ opacity: 0, x: -50 }} // Adjusted delay for new slot
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5 }} // Adjusted delay
              className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex-shrink-0 text-3xl text-[#c48820]">🛠️</div>
              <div>
                <h3 className="text-2xl font-semibold text-[#16327b] mb-2">
                  Customized & Adaptable
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Receive bespoke software development and IT infrastructure
                  planning perfectly aligned with your unique needs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Portfolio Section */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-[#16327b] text-center mb-12 md:mb-16"
          >
            Our <span className="text-[#c48820]">Portfolio</span>
          </motion.h2>

          {portfolio.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {portfolio.map((project) => (
                <PortfolioCard
                  key={project.id}
                  href={project.link}
                  imageSrc={project.picture}
                  imageAlt={`${project.title} project showcase`}
                  title={project.title}
                  description={project.description}
                />
              ))}
            </div>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="text-gray-600 text-center text-lg mt-8"
            >
              No portfolio items available at the moment. Check back soon!
            </motion.p>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        id="contact"
        className="bg-[#c48820] py-16 md:py-24 text-white text-center"
      >
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Ready to <span className="text-white">Transform Your Business</span>
            ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-8 opacity-90"
          >
            {`Let's discuss your challenges and explore how our expert IT and
            software consultancy can drive your success.`}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="https://forms.gle/Gfv8aswpY8f133qM6"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-[#c48820] bg-white hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg shadow-lg"
            >
              SCHEDULE A CALL
            </Link>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-lg opacity-80"
          >
            Or reach out directly:{" "}
            <b>
              <Link
                href="mailto:info@techinika.com"
                className="underline hover:text-[#16327b] transition-colors"
              >
                info@techinika.com
              </Link>
            </b>{" "}
            or WhatsApp{" "}
            <span className="whitespace-nowrap">+250 780 630 465</span>.
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
