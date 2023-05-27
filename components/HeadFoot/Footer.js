import Link from "next/link";
import techinikaLogo from "../../public/Techinika.png";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="logo">
          <div className="bg-mainBlue rounded-full w-50">
            <Image
              src={techinikaLogo}
              width={20}
              height={20}
              layout="responsive"
            />
          </div>
          <h2 className="card-title">Techinika</h2>
        </div>
        <div className="copyright">
          <p>&copy; Techinika Limited - 2023</p>
        </div>
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
      </div>
    </>
  );
};

export default Footer;
