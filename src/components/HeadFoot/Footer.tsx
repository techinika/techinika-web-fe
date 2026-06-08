// components/Footer.jsx
"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-lg font-bold tracking-tighter text-slate-900">
                 TECHINIKA
               </div>
            </div>
            <p className="text-slate-500 text-sm max-w-xs">
              {`Empowering Rwanda's digital future through Media, Education, and
              Innovative Technology.`}
            </p>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                Connect
              </p>
              <Link
                href="https://x.com/techinika"
                className="text-sm font-semibold hover:text-blue-600 transition"
              >
                Twitter
              </Link>
              <Link
                href="https://instagram.com/techinika"
                className="text-sm font-semibold hover:text-blue-600 transition"
              >
                Instagram
              </Link>
              <Link
                href="https://linkedin.com/company/techinika"
                className="text-sm font-semibold hover:text-blue-600 transition"
              >
                LinkedIn
              </Link>
              <Link
                href="https://ubuhanga.techinika.com"
                className="text-sm font-semibold hover:text-blue-600 transition"
              >
                Ubuhanga
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                Contact
              </p>
              <Link
                href="mailto:info@techinika.com"
                className="text-sm font-semibold hover:text-blue-600 transition"
              >
                Email Us
              </Link>
              <Link
                href="https://wa.me/250791377446"
                target="_blank"
                className="text-sm font-semibold hover:text-blue-600 transition"
              >
                WhatsApp: +250791377446
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs font-medium">
            © 2020 - {new Date().getFullYear()} Techinika Ltd. All rights
            reserved.
          </p>
          <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">
            Designed for the future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
