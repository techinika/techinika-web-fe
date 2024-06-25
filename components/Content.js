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
          Do you want to start a career in tech? Do you run a training
          institution, a school, or want to upskill your employees? Are you
          looking for a software and a team to make your initiative smooth? We
          can help you!
        </p>
        <div className="btn-group">
          <Link href={"https://calendly.com/techinika/work"} target="_blank">
            <button className="btn-yellow">Learn More</button>
          </Link>
          <Link href="https://forms.gle/QqxZcTN9Pyn9vFAfA" target="_blank">
            <button className="btn-white border border-mainBlue">
              Join Our Team
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
