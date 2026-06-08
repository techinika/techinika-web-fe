"use client";

import React from "react";
import Link from "next/link";
import {
  Home,
  Search,
  ArrowLeft,
  Newspaper,
  GraduationCap,
  Wallet,
  Terminal,
} from "lucide-react";

const NotFoundComponent = () => {
  const suggestions = [
    {
      name: "Read Tech Stories",
      icon: <Newspaper size={18} />,
      href: "https://techinika.com",
      color: "text-blue-500",
    },
    {
      name: "Learn with us",
      icon: <GraduationCap size={18} />,
      href: "https://ubuhanga.techinika.com",
      color: "text-purple-500",
    },
    {
      name: "Support Creators",
      icon: <Wallet size={18} />,
      href: "https://agaseke.me",
      color: "text-green-500",
    },
    {
      name: "Ubunifu Labs",
      icon: <Terminal size={18} />,
      href: "https://ubunifu.techinika.co.rw",
      color: "text-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] text-slate-50 font-black text-[20vw] leading-none select-none">
          404
        </div>
      </div>

      <div className="relative z-10 max-w-xl w-full text-center">
        <div className="mb-8 inline-flex items-center justify-center w-24 h-24 bg-white rounded-4xl shadow-xl shadow-blue-500/10 border border-slate-100 transform -rotate-12">
          <Search className="w-10 h-10 text-blue-600 animate-pulse" />
        </div>

        <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
          Page not found.
        </h1>
        <p className="text-slate-500 text-lg mb-12">
          It seems the page you are looking for has been moved, renamed, or
          perhaps it never existed in our tech ecosystem.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-12">
          {suggestions.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              target="_blank"
              className="group p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform ${item.color}`}
                >
                  {item.icon}
                </div>
                <span className="font-bold text-slate-700 text-sm">
                  {item.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg active:scale-95 w-full sm:w-auto"
          >
            <Home size={18} /> Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 text-slate-600 font-bold px-8 py-4 hover:text-slate-900 transition-colors w-full sm:w-auto"
          >
            <ArrowLeft size={18} /> Go Back
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <span className="text-xs font-bold tracking-tighter text-slate-400 uppercase tracking-widest">
          Techinika 2020-{new Date().getFullYear()}
        </span>
      </div>
    </div>
  );
};

export default NotFoundComponent;
