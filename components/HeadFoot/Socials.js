import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Socials = () => {
  return (
    <div className="social">
      <Link href="#" className="cursor-pointer">
        <div className="icon">
          <FaFacebookF size={20} color="white"></FaFacebookF>
        </div>
      </Link>

      <Link href="#" className="cursor-pointer">
        <div className="icon">
          <FaInstagram size={20}></FaInstagram>
        </div>
      </Link>

      <Link href="#" className="cursor-pointer">
        <div className="icon">
          <FaTwitter size={20}></FaTwitter>
        </div>
      </Link>

      <Link href="#" className="cursor-pointer">
        <div className="icon">
          <FaLinkedin size={20}></FaLinkedin>
        </div>
      </Link>
    </div>
  );
};
