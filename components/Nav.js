import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex  items-center content-center  p-6 px-8  justify-between">
      <div>
        <h1 className=" text-xl font-bold">
          <Link href="/">Techinika Limited</Link>
        </h1>
      </div>
      <div className="">
        <ul className=" hidden md:flex">
          <li className="pr-6 hover:text-blue-800">
            <Link href="/">Home</Link>
          </li>
          <li className="pr-6 hover:text-blue-800">
            <Link href="/services"> Services</Link>
          </li>
          <li className="pr-6 hover:text-blue-800">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="pr-6 hover:text-blue-800">
            <Link href="/about ">About Us</Link>
          </li>
          <li className="pr-6 hover:text-blue-800">
            <Link href="/contact">Contact Us</Link>
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
