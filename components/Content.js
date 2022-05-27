import Image from "next/image";
import  profilePic  from "../public/undraw_development_re_g5hq.svg";

const Content = (props) => {
  return (
    <div className="">
      <main className="flex flex-col md:flex-row items-center justify-center m-6 sm:m-16 md:m-24 content-center">
        <div className="basis-1/2">
          <h1 className="text-mainBlue font-bold text-4xl my-4">Welcome !</h1>
          <p className="text-xl w-full sm:w-4/5 md:w-3/5  text-black">
            Technology for change, Enroll to get your own share in the future of
            brilliant minds.
          </p>
          <button className="bg-mainBlue hover:animate-bounce duration-1000 rounded-md text-white mt-4 hover:bg-blue-900 py-2 px-8">Get Started</button>
        </div>
        <div className="basis-1/2 my-4 md:block">
          <Image
            src={profilePic}
            alt="Picture of the author"
          />
        </div>
      </main>
    </div>
  );
};

export default Content;
