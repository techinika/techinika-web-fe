import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Socials = () => {
  return (
    <div className="social">
      <Link href="https://facebook.com/techinika" className="cursor-pointer" target="_blank">
        <div className="icon">
          <FaFacebookF size={20} color="white"></FaFacebookF>
        </div>
      </Link>

      <Link href="https://instagram.com/techinika" className="cursor-pointer" target="_blank">
        <div className="icon">
          <FaInstagram size={20}></FaInstagram>
        </div>
      </Link>

      <Link href="https://twitter.com/techinika" className="cursor-pointer" target="_blank">
        <div className="icon">
          <FaTwitter size={20}></FaTwitter>
        </div>
      </Link>

      <Link href="https://linkedin/company/techinika" className="cursor-pointer" target="_blank">
        <div className="icon">
          <FaLinkedin size={20}></FaLinkedin>
        </div>
      </Link>
    </div>
  );
};
