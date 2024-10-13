import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

const Content = (props) => {
  return (
    <div className="mx-auto relative">
      <main className="m-auto w-10/12 h-screen items-center text-center justify-center flex flex-col gap-3">
        <div className="text-center">
          <p className="text-5xl font-bold text-mainBlue">We are Techinika!</p>
        </div>
        <p className="md:w-1/2 md:text-2xl sm:text-lg">
          We empower you with skills that boosts your employment opportunities.
          And software solutions that streamline your business operations.
        </p>
        <div className="btn-group">
          <Link href={"/training"}>
            <button className="btn-yellow">Apply Now</button>
          </Link>
          <Link href="/request" target="_blank">
            <button className="btn-white border border-mainBlue">
              Request Service
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
