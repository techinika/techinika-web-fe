import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex fixed items-center justify-between shadow-md w-full top-0 z-20 bg-white p-5 md:px-8">
        <div className="flex items-center">
          <h1 className="font-bold">
            <Link href="/">
              <Image
                src="/techinika-logo.png"
                width={140}
                height={40}
                alt="Techinika Logo"
              />
            </Link>
          </h1>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex md:items-center md:gap-4 flex-wrap items-center gap-4">
          <Link href="/story" className="font-bold">
            Our Story
          </Link>
          <Link
            href="https://forms.gle/wNBe86jYxMusZRFr8"
            className="btn-main"
            target="_blank"
          >
            JOIN THE WAITLIST
          </Link>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-30">
          <div className="absolute top-5 right-5">
            <button
              onClick={() => setIsOpen(false)}
              className="focus:outline-none text-white"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="bg-white text-mainBlue p-5 flex items-center justify-start flex-col">
            <h1 className="font-bold mb-8">
              <Link href="/">
                <Image
                  src="/techinika-logo.png"
                  width={140}
                  height={40}
                  alt="Techinika Logo"
                />
              </Link>
            </h1>
            <div className="flex flex-col items-center gap-4">
              <Link
                href="/request"
                className="text-xl"
                onClick={() => setIsOpen(false)}
              >
                Request
              </Link>
              <Link
                href="/story"
                className="text-xl"
                onClick={() => setIsOpen(false)}
              >
                Our Story
              </Link>
              <Link
                href="https://forms.gle/wNBe86jYxMusZRFr8"
                className="btn-main text-xl"
                target="_blank"
                onClick={() => setIsOpen(false)}
              >
                JOIN THE WAITLIST
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
