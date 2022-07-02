import Link from "next/link";
import techinikaLogo from "../public/Techinika.png";
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-mainBlue" id="contact">
        <footer className="text-white flex p-8 md:w-10/12 mx-auto items-start flex-wrap gap-4">
          <div className="w-full md:w-1/3">
            <div className="w-3/4 flex flex-col">
              <h2 className="text-xl font-bold text-backgroundColor pb-4">
                Techinika.
              </h2>
              <p className="">
                {"Technology solves problems. Everyone has right to understand the technology and benefit from it. We have made it our responsibility to make sure of that."}
              </p>
            </div>
            <div className="mt-5">
              <h2 className="text-xl font-bold text-backgroundColor">
                Follow us
              </h2>
              <div className="flex flex-wrap gap-3 mt-4">
                <Link href="https://www.twitter.com/techinika/">
                  <a target="_blank">
                    <FaTwitter size={20} />
                  </a>
                </Link>
                <Link href="https://www.instagram.com/techinika/">
                  <a target="_blank">
                    <FaInstagram size={20} />
                  </a>
                </Link>
                <Link href="https://www.facebook.com/techinika/">
                  <a target="_blank">
                    <FaFacebook size={20} />
                  </a>
                </Link>
                <Link href="https://www.t.me/techinika">
                  <a target="_blank">
                    <FaTelegram size={20} />
                  </a>
                </Link>
                <Link href="https://linkedin/company/techinika">
                  <a target="_blank">
                    <FaLinkedin size={20} />
                  </a>
                </Link>
                <Link href="https://tv.techinika.com">
                  <a target="_blank">
                    <FaYoutube size={20} />
                  </a>
                </Link>
                <Link href="https://www.twitter.com/techinika/">
                  <a target="_blank">
                    <Image src={techinikaLogo} width={20} height={20}/>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full md:w-1/3">
            <h2 className="text-xl font-bold text-backgroundColor">
              Quick links
            </h2>
            <ul className="py-4 grid grid-cols-1 gap-4">
              <li className="">
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Portfolio</Link>
              </li>
              <li>
                <Link href="/services">shop</Link>
              </li>
              <li>
                <Link href="/services">Our Blog</Link>
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 w-full">
            <h2 className="text-xl font-bold text-backgroundColor">Reach out</h2>
            <form method="post" className="py-4">
              <input
                type="text"
                className="form-input my-2 rounded-md text-mainBlue text-b w-full"
                placeholder="Enter your full name..."
              />
              <input
                type="text"
                className="form-input my-2 rounded-md  text-mainBlue w-full"
                placeholder="Enter your email here..."
              />
              <textarea
                name=""
                id="text-area"
                className="form-textarea rounded-md my-2 h-20 text-mainBlue w-full"
                cols="30"
                placeholder="Enter your message here..."
                rows="10"
              ></textarea>
              <br />
              <button className="bg-white hover:bg-gray-200 font-bold active:bg-gray-200 py-2 px-4 rounded-md text-mainBlue">
                Send
              </button>
            </form>
          </div>
        </footer>
      </div>
      <div className="bg-blue-900 text-white  text-backgroundColor text-sm  border-grey text-center p-2">
        <p>&copy; Techinika Limited 2022</p>
      </div>
    </>
  );
};

export default Footer;
