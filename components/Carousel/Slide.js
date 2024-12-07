import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

const Slide = ({
  title,
  description,
  button1Link,
  button2Link,
  button1Text,
  button2Text,
}) => {
  return (
    <div className="mx-auto relative">
      <main className="m-auto w-10/12 h-[70vh] items-center text-center justify-center flex flex-col gap-3">
        <div className="text-center">
          <p className="text-5xl font-bold text-mainBlue">{title}</p>
        </div>
        <p className="md:w-1/2 md:text-2xl sm:text-lg">{description}</p>
        <div className="btn-group">
          <Link href={button1Link}>
            <button className="btn-yellow">{button1Text}</button>
          </Link>
          <Link href={button2Link} target="_blank">
            <button className="btn-white border border-mainBlue">
              {button2Text}
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

export default Slide;
