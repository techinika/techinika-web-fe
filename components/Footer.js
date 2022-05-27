import {
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsTelegram, BsYoutube } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-mainBlue text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  p-4 ">
        <div>
          <div className="p-4 w-3/4">
            <h2 className="text-xl font-bold text-backgroundColor">
              Techinika.
            </h2>
            <p className="py-4 text-sm ">
              We are a team of tech professionals who are here for you. we
              design modern websites and mobile applications, and train your
              staff to use modern technologies.
            </p>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold text-backgroundColor">
              Follow us
            </h2>
            <ul className="grid grid-cols-5 gap-1 w-3/5 py-4">
              <Link href="https://www.twitter.com/techinika/">
                <a target="_blank">
                  <AiFillTwitterSquare size={20} />
                </a>
              </Link>
              <Link href="https://www.instagram.com/techinika/">
                <a target="_blank">
                  <AiFillInstagram size={20} />
                </a>
              </Link>
              <Link href="https://www.facebook.com/techinika/">
                <a target="_blank">
                  <AiFillFacebook size={20} />
                </a>
              </Link>
              <Link href="https://www.t.me/techinika">
                <a target="_blank">
                  <BsTelegram size={20} />
                </a>
              </Link>
              <Link href="https://linkedin/company/techinika">
                <a target="_blank">
                  <AiFillLinkedin size={20} />
                </a>
              </Link>
              <Link href="https://linkedin/company/techinika">
                <a target="_blank">
                  <BsYoutube size={20} />
                </a>
              </Link>
            </ul>
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold text-backgroundColor">
            Quick links
          </h2>
          <ul className="py-4 grid grid-cols-1 gap-4 text-sm">
            <li className="">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services"> Portfolio</Link>
            </li>
            <li>
              <Link href="/services"> shop</Link>
            </li>
            <li>
              <Link href="/services"> Our Blog</Link>
            </li>
          </ul>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold text-backgroundColor">Contact Us</h2>
          <form method="post" className="py-4">
            <input
              type="text"
              className="form-input placeholder:text-sm my-2 rounded-md text-black   text-b w-full sm:w-4/5 md:w-3/5"
              placeholder="Enter your full name..."
            />
            <input
              type="text"
              className="form-input placeholder:text-sm my-2 rounded-md  text-black w-full sm:w-4/5 md:w-3/5"
              placeholder="Enter your email here..."
            />
            <textarea
              name=""
              id="text-area"
              className="form-textarea rounded-md placeholder:text-sm my-2 h-20 text-black w-full sm:w-4/5 md:w-3/5"
              cols="30"
              placeholder="Enter your message here..."
              rows="10"
            ></textarea>
            <br />
            <button className="bg-white py-2 px-4 rounded-md text-mainBlue w-full sm:w-4/5 md:w-3/5">
              Send
            </button>
          </form>
        </div>
      </footer>
      <div className="bg-blue-900 text-white  text-backgroundColor text-sm  border-grey text-center p-2">
        <p>@ techinika 2022</p>
      </div>
    </>
  );
};

export default Footer;
