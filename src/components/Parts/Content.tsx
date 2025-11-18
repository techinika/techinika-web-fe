// components/HeroSection.jsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion"; // Import motion from framer-motion

// const partners = [
//   {
//     id: 4,
//     name: "Ganza Nation",
//     logo: "/ganzanation.png",
//     website: "https://www.instagram.com/ganza_nation/",
//   },
//   {
//     id: 6,
//     name: "Green Home Group",
//     logo: "/greenhomegroup.jpeg",
//     website: "#",
//   },
//   {
//     id: 7,
//     name: "Rwanda ICT Chamber",
//     logo: "/ictchamber.jpeg",
//     website: "https://ictchamber.rw/",
//   },
//   {
//     id: 8,
//     name: "She Can Code School",
//     logo: "/shecancode.png",
//     website: "https://www.shecancodeschool.org/",
//   },
//   {
//     id: 9,
//     name: "ICP Rwanda",
//     logo: "/icp.png",
//     website: "https://x.com/icp_Rwanda_",
//   },
//   {
//     id: 10,
//     name: "HackNoel",
//     logo: "/youthcode.png",
//     website: "https://www.youthcodecamp.live/",
//   },
//   {
//     id: 11,
//     name: "HangaPitchFest",
//     logo: "/hanga.png",
//     website: "https://www.hangapitchfest.rw/",
//   },
//   {
//     id: 12,
//     name: "Sherrie Silver Foundation",
//     logo: "/sherrie.jpg",
//     website: "https://www.sherriesilverfoundation.org/",
//   },
//   {
//     id: 13,
//     name: "YALI Rwanda Chapter",
//     logo: "/yali.png",
//     website: "https://yalirwandachapter.org/",
//   },
//   {
//     id: 14,
//     name: "BICE Mechatrotech Ltd",
//     logo: "/bice.png",
//     website: "#",
//   },
//   {
//     id: 15,
//     name: "National Cyber Security Authority",
//     logo: "/ncsa.png",
//     website: "https://cyber.gov.rw/home/",
//   },
// ];

export default function HeroSection() {
  // Renamed from Content to HeroSection
  return (
    <section className="relative w-full p-10 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="container mx-auto text-center flex flex-col items-center justify-center gap-6 relative z-10">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold leading-tight text-[#16327b]"
        >
          Technology <span className="text-[#c48820]">education</span>,
          information, and <span className="text-[#c48820]">solutions.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl text-lg md:text-xl text-gray-700 leading-relaxed"
        >
          We build tailored software solutions that streamline your operations,
          empower teams, and help you stay ahead in a competitive world.
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
