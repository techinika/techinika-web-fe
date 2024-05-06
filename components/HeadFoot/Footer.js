import Link from "next/link";
import Image from "next/image";
import { Socials } from "./Socials";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="logo">
          <div className="bg-mainBlue rounded-full w-50">
            <Image
              src="/techinika-logo.png"
              width={200}
              height={20}
              alt="Techinika Logo"
            />
          </div>
          {/* <h2 className="card-title">Techinika</h2> */}
        </div>

        <Socials />
        <div className="copyright">
          <p>
            2023 - {new Date().getFullYear()} &copy; All right reserved -
            Techinika Limited
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
