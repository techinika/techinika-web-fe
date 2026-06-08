// components/Nav.jsx
"use client";

import Link from "next/link";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-xl font-bold tracking-tighter text-slate-900">
             TECHINIKA
           </div>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-semibold text-slate-600 uppercase tracking-wider">
          <Link href="#products" className="hover:text-blue-600 transition">
            Solutions
          </Link>
          <Link href="#education" className="hover:text-blue-600 transition">
            Education
          </Link>
          <Link href="#philosophy" className="hover:text-blue-600 transition">
            About
          </Link>
        </div>
        <Link
          href="https://agaseke.me/techinika/booking"
          target="_blank"
        >
          <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 transition shadow-md shadow-slate-200">
            Work With Us
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
