// components/Socials.jsx
"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn, // Changed to FaLinkedinIn for better icon consistency
  FaXTwitter, // Changed to FaXTwitter for the new X logo
  FaYoutube,
} from "react-icons/fa6"; // Using fa6 for updated icons

export const Socials = ({
  iconSize = 20,
  iconColor = "#FFFFFF",
  className = "",
}) => {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com/techinika",
      icon: <FaFacebookF size={iconSize} color={iconColor} />,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/techinika",
      icon: <FaInstagram size={iconSize} color={iconColor} />,
    },
    {
      name: "Twitter (X)",
      href: "https://x.com/techinika",
      icon: <FaXTwitter size={iconSize} color={iconColor} />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/techinika",
      icon: <FaLinkedinIn size={iconSize} color={iconColor} />,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@Techinika",
      icon: <FaYoutube size={iconSize} color={iconColor} />,
    },
  ];

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {" "}
      {/* Added spacing and flexbox */}
      {socialLinks.map((social, index) => (
        <Link
          key={index}
          href={social.href}
          className="hover:scale-110 transition-transform duration-200"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
        >
          {/* Removed extra div for icon to simplify, applied styling directly to Link */}
          {social.icon}
        </Link>
      ))}
    </div>
  );
};
