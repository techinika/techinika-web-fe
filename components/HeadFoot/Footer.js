import Link from "next/link";
import techinikaLogo from "../../public/Techinika.png";
import Image from "next/image";
import { Socials } from "./Socials";

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
        <Socials />
      </div>
    </>
  );
};

export default Footer;
