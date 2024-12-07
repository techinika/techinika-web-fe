import Head from "next/head";
import Nav from "../../components/HeadFoot/Nav";
import Footer from "../../components/HeadFoot/Footer";
import { Quote } from "../../components/HeadFoot/Quote";
import Partners from "../../components/Partners";
import Link from "next/link";
import { HeadTitle } from "../../components/HeadFoot/HeadTitle";

export default function Masterclass() {
  const mclasses = [
    {
      id: 1,
      title: "Figma Masterclass: Become a UI/UX Designer",
      description:
        "Learn all te basics you need to start designing beautiful and professional websites and software.",
      when: "19 October 2024",
      position: 1,
      picture: "",
      progress: "ENDED",
      link: "#",
    },
    {
      id: 2,
      title: "Building 3D designs with SolidWorks",
      description:
        "Learn all the basics you need to start designing 3D designs for manufacturing with SolidWorks.",
      when: "29 November 2024",
      position: 2,
      picture: "",
      progress: "IN PROGRESS",
      link: "#",
    },
    {
      id: 3,
      title: "Mastering building websites fast and easy with WordPress",
      description:
        "Learn all the basics you need to start designing 3D designs for manufacturing with SolidWorks.",
      when: "23 December 2024",
      position: 3,
      picture: "",
      progress: "UPCOMING",
      link: "wordpress-masterclass",
    },
  ];
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="keywords"
          content="wordpress in rwanda, wordpress developer in rwanda, learn wordpress"
        />
        <meta name="author" content="Techinika Developers" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>WordPress Masterclass - Techinika</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta
          name="description"
          content="WordPress is a software that is used to build websites without writing codes"
        ></meta>
      </Head>
      <div className="relative h-screen">
        <div className="font-main">
          <Nav />
        </div>
        <div className="bg-white font-main mx-auto mt-24">
          <div className="bg-gray-50">
            <HeadTitle
              title={`MONTHLY MASTERCLASSES`}
              tagline={
                "Equipping you with skills that unlocks new opportunities"
              }
            />
          </div>
          <div className="md:w-[60%] lg:w-[50%] sm:w-[90%] mx-auto text-xl py-4 p-2">
            <br></br>

            <h2 className="card-title">Description,</h2>
            <p>{`Our monthly Masterclass Program is designed to empower individuals with practical, industry-relevant skills to unlock new opportunities, increase their income, and bring their ideas to life. Each session focuses on a specific skill or topic, offering hands-on training led by experienced professionals.`}</p>
            <p>{`Whether you want to enhance your career, start a project, or build your own business, our masterclasses provide the tools, knowledge, and confidence you need to succeed. Join us and take the next step toward achieving your goals!`}</p>

            <br></br>
            <h2 className="card-title">Masterclass Sessions,</h2>
            <br></br>
            {mclasses.length > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                {[...mclasses]
                  .sort((a, b) => {
                    const statusOrder = {
                      UPCOMING: 1,
                      "IN PROGRESS": 2,
                      ENDED: 3,
                    };
                    return statusOrder[a.progress] - statusOrder[b.progress];
                  })
                  .map((mclass) => (
                    <div
                      key={mclass.id}
                      className="card bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
                    >
                      {/* Image Section */}
                      <div className="image-container w-full">
                        {mclass.picture ? (
                          <img
                            src={mclass.picture}
                            alt={`${mclass.title} cover`}
                            className="w-full h-40 object-cover"
                          />
                        ) : (
                          <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-500">
                            No Image Available
                          </div>
                        )}
                      </div>

                      {/* Content Section */}
                      <div className="p-4 flex flex-col justify-between h-full">
                        <div>
                          <h3 className="text-lg font-bold text-mainBlue">
                            {mclass.title}
                          </h3>
                          <p className="text-gray-600 mt-2">
                            {mclass.description}
                          </p>
                          <p className="text-gray-500 mt-1 text-sm">
                            <strong>When:</strong> {mclass.when}
                          </p>
                        </div>

                        {/* Footer Section */}
                        <div className="flex justify-between items-center mt-4">
                          <span
                            className={`status-badge px-3 py-1 rounded-full text-sm ${
                              mclass.progress === "UPCOMING"
                                ? "bg-green-100 text-green-700"
                                : mclass.progress === "IN PROGRESS"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {mclass.progress}
                          </span>
                          <Link
                            href={`/masterclass/${mclass.link}`}
                            className="text-mainBlue underline text-sm"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <p>{`No masterclass sessions yet!`}</p>
            )}
            <br></br>

            <p className="italic font-bold text-mainBlue">
              For more information and registration:
            </p>
            <br></br>
            <p>
              Contact us on email{" "}
              <b>
                <Link href={"mailto:info@techinika.com"} className="underline">
                  info@techinika.com
                </Link>
              </b>{" "}
              or send a text message or WhatsApp message on our phone number
              +250780630465.
            </p>
            <br></br>
          </div>
          <Partners />
          <Footer />
        </div>
      </div>
    </>
  );
}
