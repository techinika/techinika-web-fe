import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex fixed items-center content-center p-4 px-8 justify-between shadow-md w-full top-0 z-20 bg-white">
      <div>
        <h1 className="text-2xl font-bold">
          <Link href="/">Techinika.</Link>
        </h1>
      </div>
      <div className="">
        <ul className=" md:items-center hidden md:flex text-xl">
          <li className="pr-6 hover:text-blue-800">
            <Link href="/">Home</Link>
          </li>
          <li className="pr-6 hover:text-blue-800">
            <Link href="/">Courses</Link>
          </li>
          <li className="pr-6 hover:text-blue-800">
            <Link href="#offers">Institute</Link>
          </li>
          <li className="pr-6 hover:text-blue-800">
            <Link href="#our-story">Blog</Link>
          </li>
          <li className="pr-6 hover:text-blue-800">
            <Link href="#contact">Our story</Link>
          </li>
          <li className="btn-main">
            <Link href="#">Join us</Link>
          </li>
        </ul>
      </div>
      <div className="block md:hidden cursor-pointer">
        <AiOutlineMenu size={28} className="text-blue-800  font-bold" />
      </div>
    </nav>
  );
};

export default Nav;
