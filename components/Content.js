import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";

const Content = (props) => {
  const promises = [
    "Training",
    "Software for schools",
    "Software for training institutions",
    "Software for the government",
  ];
  const [promise, setPromise] = useState(0);
  useEffect(() => {
    const updatePromise = () => {
      setPromise((prevIndex) => (prevIndex + 1) % promises.length);
      setTimeout(updatePromise, 2000);
    };

    const timeoutId = setTimeout(updatePromise, 2000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div className="mx-auto relative">
      <main className="m-auto w-10/12 h-screen items-center text-center justify-center flex flex-col gap-3">
        <div className="text-center">
          <p className="text-5xl font-bold text-mainBlue">We are Techinika!</p>
        </div>
        <p className="md:w-1/2 md:text-2xl sm:text-lg">
          We enhance your learning outcomes through software solutions,
          training, online courses and the community.
        </p>
        <div className="btn-group">
          <Link href={"/contact "}>
            <button className="btn-yellow">Get Started</button>
          </Link>
          <Link href="/community">
            <button className="btn-white border border-mainBlue">
              Join Our Team!
            </button>
          </Link>
        </div>

        <div className="absolute bottom-0 p-4">
          <div className="p-4">
            <FaArrowDown className="animate-bounce text-mainBlue" size={50} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Content;
