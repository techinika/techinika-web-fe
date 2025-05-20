import Head from "next/head";
import Nav from "../../src/components/HeadFoot/Nav";
import Footer from "../../src/components/HeadFoot/Footer";
import Partners from "../../src/components/Parts/Partners";
import Link from "next/link";
import { HeadTitle } from "../../src/components/HeadFoot/HeadTitle";

export default function Consultancy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Consultancy Services - Techinika",
    url: "https://techinika.co.rw/consultancy",
    description:
      "Techinika offers IT and Software Consultancy services, including identifying, recommending, and implementing solutions for business problems, and software development.",
  };

  const portfolio = [
    {
      id: 1,
      title: "Members Management System for Sherrie Silver Foundation",
      description:
        "A project we made for them to manage their organization's members, volunteers, and other daily operations.",
      picture: "/sherriekms.png",
      link: "/consultancy/sherrie-silver-foundation",
    },
    {
      id: 2,
      title: "Alumni Management System for YALI Rwanda Chapter",
      description:
        "A system designed to help YALI Rwanda Chapter keep their Alumni information up to date.",
      picture: "/yaliams.png",
      link: "/consultancy/yali-alumni-management",
    },
  ];

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="keywords"
          content="IT consultancy, software solutions, business problem-solving"
        />
        <meta name="author" content="Techinika Developers" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Consultancy - Techinika</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta
          name="description"
          content="Techinika provides IT and Software Consultancy services, helping businesses solve problems through tailored solutions and expert advice."
        ></meta>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <div className="relative h-screen">
        <div className="font-main">
          <Nav />
        </div>
        <div className="bg-white font-main mx-auto mt-24">
          <div className="bg-gray-50">
            <HeadTitle
              title={`IT & Software Consultancy`}
              tagline={
                "Identifying, recommending, and implementing solutions tailored to your business."
              }
            />
          </div>
          <div className="md:w-[60%] lg:w-[50%] sm:w-[90%] mx-auto text-xl py-4 p-2">
            <br></br>

            <h2 className="card-title">Our Services,</h2>
            <p>{`At Techinika, we specialize in providing IT and Software Consultancy services that address your unique business challenges. Our team of experts works closely with you to:`}</p>
            <ul className="list-disc list-inside mt-4">
              <li>Identify and analyze your business problems.</li>
              <li>Recommend tailored IT and software solutions.</li>
              <li>
                Implement strategies and systems that drive efficiency and
                growth.
              </li>
              <li>
                Deliver custom software development to meet specific needs.
              </li>
            </ul>

            <br></br>
            <h2 className="card-title">Our Portfolio,</h2>
            <br></br>
            {portfolio.length > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                {portfolio.map((project) => (
                  <Link href={project.link} key={project.id}>
                    {" "}
                    <div className="card bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
                      {/* Image Section */}
                      <div className="image-container w-full">
                        {project.picture ? (
                          <img
                            src={project.picture}
                            alt={`${project.title} cover`}
                            className="w-full h-64 object-cover"
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
                          <h3 className="text-lg font-bold text-main-blue">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 mt-2">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p>{`No portfolio items yet!`}</p>
            )}
            <br></br>

            <p className="italic font-bold text-main-blue">
              Ready to transform your business?
            </p>
            <br></br>
            <p>
              Contact us at email{" "}
              <b>
                <Link href={"mailto:info@techinika.com"} className="underline">
                  info@techinika.com
                </Link>
              </b>{" "}
              or send a text message or WhatsApp message to our phone number
              +250780630465.
            </p>
            <br></br>
            <div className="flex items-center justify-center">
              <Link href="/request" className="btn-main">
                GET FREE CONSULTATION
              </Link>
            </div>
          </div>
          <Partners />
          <Footer />
        </div>
      </div>
    </>
  );
}
