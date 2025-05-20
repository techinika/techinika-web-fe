"use client";

import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

const Content = () => {
  return (
    <div className="mx-auto relative">
      <main className="m-auto w-10/12 h-[70vh] items-center text-center justify-center flex flex-col gap-8">
        <div className="text-center">
          <p className="text-5xl font-bold text-main-blue">
            Digital Transformation Partner
          </p>
        </div>
        <p className="md:w-1/2 md:text-2xl sm:text-lg">
          We equip you with skills that unlocks new employment opportunities.
          And build software solutions that streamline your business operations.
        </p>
        <div className="btn-group">
          <Link href={"/masterclass"}>
            <button className="btn-yellow">STAY COMPETITIVE</button>
          </Link>
          <Link href="/consultancy">
            <button className="btn-white border border-main-blue">
              GET FREE CONSULTATION
            </button>
          </Link>
        </div>

        <div className="absolute bottom-0 p-4">
          <div className="p-4">
            <FaArrowDown
              className="animate-bounce text-main-blue hidden md:block"
              size={50}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Content;
