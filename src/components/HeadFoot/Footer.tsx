// components/Footer.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Socials } from "./Socials";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#16327b] text-white py-12">
      {" "}
      {/* Dark blue background, consistent padding */}
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        {/* Column 1: Logo & Company Info */}
        <div className="flex flex-col items-start md:col-span-1">
          <Link href="/" className="mb-4">
            <Image
              src="/techinika-blue.png" // Consider a white version of your logo for dark background
              width={180} // Adjusted size for footer
              height={60}
              alt="Techinika Logo"
              className="object-contain"
            />
          </Link>
          <p className="text-sm leading-relaxed opacity-80 mb-4">
            Creating innovative digital tools to power your business growth. We
            build tailored software solutions to streamline operations and
            empower teams.
          </p>
          <Socials iconSize={24} iconColor="#c48820" className="mt-4" />{" "}
          {/* Use accent color for icons */}
        </div>

        {/* Column 2: Quick Links */}
        <div className="md:col-span-1">
          <h4 className="font-semibold text-lg mb-4 text-[#c48820]">
            Quick Links
          </h4>{" "}
          {/* Accent color for heading */}
          <ul className="space-y-3">
            <li>
              <Link
                href="/"
                className="hover:text-[#c48820] transition-colors duration-200 text-sm opacity-90"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/masterclass"
                target="_blank"
                className="hover:text-[#c48820] transition-colors duration-200 text-sm opacity-90"
              >
                Masterclass Services
              </Link>
            </li>
            <li>
              <Link
                href="/consultancy"
                className="hover:text-[#c48820] transition-colors duration-200 text-sm opacity-90"
              >
                Consultation Services
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className="hover:text-[#c48820] transition-colors duration-200 text-sm opacity-90"
              >
                Community
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#c48820] transition-colors duration-200 text-sm opacity-90"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Services / Products (Dynamic Links) */}
        <div className="md:col-span-1">
          <h4 className="font-semibold text-lg mb-4 text-[#c48820]">
            Our Offerings & Products
          </h4>
          <ul className="space-y-3">
            <li>
              <Link
                href="https://apprena.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c48820] transition-colors duration-200 text-sm opacity-90"
              >
                Apprena
              </Link>
            </li>
            <li>
              <Link
                href="https://securedot.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c48820] transition-colors duration-200 text-sm opacity-90"
              >
                SecureDot
              </Link>
            </li>
            <li>
              <Link
                href="https://chat.whatsapp.com/FDVsiiuDtJDBgIRbK6BaXK"
                className="hover:text-[#c48820] transition-colors duration-200 text-sm opacity-90"
                target="_blank"
              >
                Rwanda Technology Community
              </Link>
            </li>
            <li>
              <Link
                href="/masterclass"
                target="_blank"
                className="hover:text-[#c48820] transition-colors duration-200 text-sm opacity-90"
              >
                Techinika Masterclass & Internships
              </Link>
            </li>
            <li>
              <Link
                href="/consultancy"
                className="hover:text-[#c48820] transition-colors duration-200 text-sm opacity-90"
              >
                Technology Consultation
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h4 className="font-semibold text-lg mb-4 text-[#c48820]">
            Contact Us
          </h4>
          <ul className="space-y-3 mb-6">
            <li className="text-sm opacity-90">
              Email:{" "}
              <a
                href="mailto:info@techinika.com"
                className="hover:text-[#c48820] transition-colors duration-200"
              >
                info@techinika.com
              </a>
            </li>
            <li className="text-sm opacity-90">
              Phone:{" "}
              <a
                href="tel:+250791377446"
                className="hover:text-[#c48820] transition-colors duration-200"
              >
                +250 791 377 446
              </a>
            </li>
            <li className="text-sm opacity-90">Kigali, Rwanda</li>
          </ul>
        </div>
      </div>
      {/* Copyright Section (Full Width) */}
      <div className="border-t border-gray-700 mt-10 pt-8 text-center text-sm opacity-70">
        <p>&copy; {currentYear} Techinika Limited. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
