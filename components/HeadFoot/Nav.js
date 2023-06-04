import Link from "next/link";
import { AiFillCloseCircle, AiOutlineMenu, AiOutlineMenuUnfold } from "react-icons/ai";
import React, { useState } from "react";

const Nav = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const links = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Learning", link: "/learning" },
    { id: 3, name: "Services", link: "/services" },
    { id: 4, name: "Community", link: "/community" },
    { id: 5, name: "About Us", link: "/about" },
  ];
  return (
    <nav className="flex fixed items-center content-center px-8 justify-between shadow-md w-full top-0 z-20 bg-white">
      <div>
        <h1 className="text-xl font-bold">
          <Link href="/">Techinika.</Link>
        </h1>
      </div>
      <div className="">
        <ul className=" md:items-center hidden md:flex text-lg">
          {links
            ? links.map((link) => (
                <li className="hover:text-main hover:border-b-4 hover:border-b-main p-6" key={link.id}>
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))
            : null}
          <li className="btn-main">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div
        className="block md:hidden cursor-pointer"
       
      >
        {!showDrawer && <AiOutlineMenuUnfold  onClick={() => setShowDrawer(true)} size={28} className="text-blue-800  font-bold" />}
        {showDrawer && <AiFillCloseCircle  onClick={() => setShowDrawer(false)} size={28} className="text-blue-800  font-bold" />}
      </div>

      {showDrawer && (
        <div className="h-screen bg-bg w-2/3 fixed left-0 top-0 bottom-0 shadow-lg">
          <div className="w-full text-center p-5 bg-mainBlue text-white">
            <h1 className="text-xl font-bold">
              <Link href="/">Techinika.</Link>
            </h1>
          </div>
          <ul className="flex flex-col gap-3">
            {links
              ? links.map((link) => (
                  <li
                    className="p-5 hover:text-blue-800 hover:bg-white hover:shadow"
                    key={link.id}
                  >
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))
              : null}
            <li className="btn-main">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
