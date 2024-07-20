import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex fixed items-center md:px-8 justify-between shadow-md w-full top-0 z-20 bg-white items-center p-5">
      <div>
        <h1 className="font-bold">
          <Link href="/">
            <Image src="/techinika-logo.png" width={140} height={40} />
          </Link>
        </h1>
      </div>
      <div className="p-2 flex items-center gap-4">
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
  );
};

export default Nav;
