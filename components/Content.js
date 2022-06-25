import Image from "next/image";
import  profilePic  from "../public/undraw_development_re_g5hq.svg";

const Content = (props) => {
  return (
    <div className="w-10/12 mx-auto">
      <main className="flex flex-col md:flex-row items-center justify-center content-center p-8 h-screen">
        <div className="basis-1/2">
          <h1 className="text-mainBlue font-bold text-4xl my-4">Welcome to Techinika!</h1>
          <p className="text-xl w-full sm:w-4/5 md:w-3/5  text-black">
            {"Technology solves problems. Everyone has right to understand the technology and benefit from it. We have made it our responsibility to make sure of that."}
          </p>
          <button className="bg-mainBlue hover:animate-bounce duration-1000 rounded-md text-white mt-4 hover:bg-blue-900 py-2 px-8 text-xl">Hire us</button>
        </div>
        <div className="basis-1/2 my-4 md:block">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/AkFhkUkpTEc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </main>
    </div>
  );
};

export default Content;
