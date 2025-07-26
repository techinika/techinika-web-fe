// components/HeroSection.jsx
"use client";

import React from "react";
import Link from "next/link";
// import { Button } from "@/components/ui/button"; // Remove if not using shadcn/ui Button specifically here
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion from framer-motion

const partners = [
  {
    id: 4,
    name: "Ganza Nation",
    logo: "/ganzanation.png",
    website: "https://www.instagram.com/ganza_nation/",
  },
  {
    id: 6,
    name: "Green Home Group",
    logo: "/greenhomegroup.jpeg",
    website: "#",
  },
  {
    id: 7,
    name: "Rwanda ICT Chamber",
    logo: "/ictchamber.jpeg",
    website: "https://ictchamber.rw/",
  },
  {
    id: 8,
    name: "She Can Code School",
    logo: "/shecancode.png",
    website: "https://www.shecancodeschool.org/",
  },
  {
    id: 9,
    name: "ICP Rwanda",
    logo: "/icp.png",
    website: "https://x.com/icp_Rwanda_",
  },
  {
    id: 10,
    name: "HackNoel",
    logo: "/youthcode.png",
    website: "https://www.youthcodecamp.live/",
  },
  {
    id: 11,
    name: "HangaPitchFest",
    logo: "/hanga.png",
    website: "https://www.hangapitchfest.rw/",
  },
  {
    id: 12,
    name: "Sherrie Silver Foundation",
    logo: "/sherrie.jpg",
    website: "https://www.sherriesilverfoundation.org/",
  },
  {
    id: 13,
    name: "YALI Rwanda Chapter",
    logo: "/yali.png",
    website: "https://yalirwandachapter.org/",
  },
  {
    id: 14,
    name: "BICE Mechatrotech Ltd",
    logo: "/bice.png",
    website: "#",
  },
  {
    id: 15,
    name: "National Cyber Security Authority",
    logo: "/ncsa.png",
    website: "https://cyber.gov.rw/home/",
  },
];

export default function HeroSection() {
  // Renamed from Content to HeroSection
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center flex flex-col items-center justify-center gap-6 relative z-10">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold leading-tight text-[#16327b]"
        >
          We Create <span className="text-[#c48820]">Digital Tools</span> that
          Power Your <span className="text-[#c48820]">Business Growth</span>
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
          <Link href="/solutions">
            <button // Changed from <Button> to <button> directly for consistent styling
              className="px-8 py-3 rounded-full text-white bg-[#c48820] hover:bg-[#c48820]/90 transition-colors duration-300 font-semibold text-base shadow-lg"
            >
              Explore Our Solutions
            </button>
          </Link>
          <Link href="/consultancy">
            <button // Changed from <Button> to <button> directly
              className="px-8 py-3 rounded-full text-white bg-[#16327b] hover:bg-[#16327b]/90 transition-colors duration-300 font-semibold text-base shadow-lg"
            >
              Book a Free Consultation
            </button>
          </Link>
        </motion.div>

        {/* Trusted By / Partners Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-12 w-full overflow-hidden pb-4" // Increased mt-8 to mt-12 for more space
        >
          <p className="text-gray-600 font-medium mb-6 text-center text-lg">
            {" "}
            {/* Adjusted mb-4 to mb-6, added text-lg */}
            Trusted by Leading Organizations:
          </p>
          <div className="relative group">
            {/* Overlay for fading effect on edges, ensuring infinite scroll looks good */}
            <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-blue-50 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-blue-50 to-transparent z-10"></div>

            <ul className="flex animate-infinite-scroll space-x-16 group-hover:pause">
              {[...partners, ...partners, ...partners].map(
                (
                  partner,
                  index // Duplicate more times for smoother, longer scroll
                ) => (
                  <li
                    key={`${partner.id}-${index}`}
                    className="flex items-center flex-shrink-0" // flex-shrink-0 is important for preventing items from shrinking
                  >
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={partner.name}
                    >
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={120} // Slightly increased width for better visibility
                        height={50} // Slightly increased height
                        className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" // Adjusted opacity and transition
                      />
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
