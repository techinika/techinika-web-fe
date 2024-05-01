import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex fixed items-center md:px-8 sm:px-3 justify-between shadow-md w-full top-0 z-20 bg-white items-center p-5">
      <div>
        <h1 className="text-xl font-bold">
          <Link href="/">
            <Image src="/techinika-logo.png" width={160} height={40} />
          </Link>
        </h1>
      </div>
      <div className="p-2">
        <Link
          href="https://calendly.com/techinika/work"
          className="bg-mainBlue p-3 rounded-xl text-white"
          target="_blank"
        >
          BOOK A DEMO
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
