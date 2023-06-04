import Head from "next/head";
import { Timeline } from "../components/Timeline";
import { JoinUs } from "../components/Join";
import { Subscribe } from "../components/Subscribe";
import Footer from "../components/HeadFoot/Footer";
import Nav from "../components/HeadFoot/Nav";
import { PageTitle } from "../components/HeadFoot/PageTitle";
import {
  FaEnvelopeSquare,
  FaLocationArrow,
  FaMapMarked,
  FaMapMarkerAlt,
  FaPhone,
  FaPhoneAlt,
  FaPhoneSquare,
  FaSearchLocation,
  FaWhatsappSquare,
} from "react-icons/fa";
import {
  AiFillMessage,
  AiOutlineMessage,
  AiOutlineSafetyCertificate,
} from "react-icons/ai";
import { Socials } from "../components/HeadFoot/Socials";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Information services company in Kigali"
        />
        <meta
          name="keywords"
          content="Everyone has a right to understand technology, Web development, Graphic design, modern technologies, ICT Training to your staff, "
        />
        <meta name="author" content="Techinika Devs" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact Techinika</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <div>
        <Nav />
        <PageTitle title={"Contact Techinika"} />
        <div className="flex flex-row flex-wrap md:w-8/12 mx-auto gap-3 p-4">
          <div className="flex-1">
            <h2 className="card-title">{"Let's connect..."}</h2>
            <p>
              {
                "Do you want to know more about us? Want to work with us? Want to recommend us? We appreciate you checking out our website, let us connect now."
              }
            </p>
            <div>
              <h3 className="text-xl text-mainBlue font-black my-3">
                Our contacts:
              </h3>
              <div className="flex gap-2 items-center">
                <FaPhoneSquare size={25} className="text-mainBlue" />
                <p className="font-bold">{"+ (250) 791 377 446"}</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaWhatsappSquare size={25} className="text-mainBlue" />
                <p className="font-bold">{"+ (250) 791 377 446"}</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaEnvelopeSquare size={25} className="text-mainBlue" />
                <p className="font-bold">{"info@techinika.com"}</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl text-mainBlue font-black my-3">
                Our Address:
              </h3>
              <div className="flex gap-2 items-center">
                <FaMapMarkerAlt size={25} className="text-mainBlue" />
                <p className="font-bold">{"Kigali, Rwanda"}</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaMapMarked size={25} className="text-mainBlue" />
                <p className="font-bold">{"ICT Innovation Center, KK 15 rd"}</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaMapMarked size={25} className="text-mainBlue" />
                <p className="font-bold">{"Muhima"}</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl text-mainBlue font-black my-3">
                Our Socials:
              </h3>
              <Socials />
            </div>
          </div>
          <div className="flex-1 bg-bg p-5">
            <h2 className="card-title text-start">Send us a message...</h2>
            <form className="">
              <label>Your name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input bg-white"
                required
              />
              <label>Your email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input bg-white"
                required
              />
              <label>Your message</label>
              <textarea
                className="input"
                placeholder="Enter your message..."
                rows={10}
                required
              ></textarea>
              <input type="submit" className="btn-card" value="Send" />
            </form>
          </div>
        </div>
        <div className="bg-mainBlue w-full text-white">
          <div className="w-9/12 mx-auto p-10">
            <p className="text-xl leading-loose">
              {`We are very eager to hear from you. Tell us what you are doing, your project and let us start discussions on how we can help each other. Book appointment with us and learn more about how we can help you achieve your project goals.`}
            </p>
            <div className="flex justify-between my-5">
              <div></div>
              <Link href="/collaborate">
                <button className="btn-white">{"Book Appointment"}</button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
