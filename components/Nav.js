import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex fixed items-center content-center p-4 px-8 justify-between shadow-md w-full top-0 z-20 bg-gray-200">
      <div>
        <h1 className=" text-2xl font-bold">
          <Link href="/">Techinika.</Link>
        </h1>
      </div>
      <div className="">
        <ul className=" md:items-center hidden md:flex text-xl">
          <li className="pr-6 hover:text-blue-800">
            <Link href="/">Home</Link>
          </li>
          <li className="pr-6 hover:text-blue-800">
            <Link href="#programs">Programs</Link>
          </li>
          <li className="pr-6 hover:text-blue-800">
            <Link href="#offers">Offers</Link>
          </li>
          <li className="pr-6 hover:text-blue-800">
            <Link href="#our-story">Our story</Link>
          </li>
          <li className="pr-6 hover:text-blue-800">
            <Link href="#contact">Reach out</Link>
          </li>
          <li className="pr-6 hover:text-blue-800">
            <Link href="/shop ">Shop</Link>
          </li>
          <li className="pr-6 hover:text-blue-800">
            <Link href="#partners">Partners</Link>
          </li>
          <li className="hover:text-white bg-mainBlue text-white text-center px-4 py-2 rounded-md">
            <Link href="#">Hire Us</Link>
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
