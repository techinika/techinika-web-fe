import Head from "next/head";
import Nav from "../../components/HeadFoot/Nav";
import Footer from "../../components/HeadFoot/Footer";
import Partners from "../../components/Partners";
import Link from "next/link";
import { HeadTitle } from "../../components/HeadFoot/HeadTitle";

export default function Community() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rwanda Technology Community",
    url: "https://techinika.co.rw/community",
    description:
      "A community dedicated to keeping Rwandans up to date with the latest developments in the world of technology through various engaging activities.",
  };

  const activities = [
    "Digital Discourse online events",
    "Physical Workshops",
    "Hackathons & Competitions",
    "Community Outreach for awareness",
    "Intellectual Visits",
    "Community Sports",
  ];

  const benefits = [
    "Learn the latest in technology trends.",
    "Build practical skills through hackathons and workshops.",
    "Network with like-minded individuals and industry leaders.",
    "Gain access to community resources and mentorship programs.",
    "Participate in engaging community-building activities like sports.",
  ];

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="keywords"
          content="technology community, Rwanda, digital events, workshops"
        />
        <meta name="author" content="Techinika Developers" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Community - Rwanda Technology Community</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta
          name="description"
          content="Join Rwanda Technology Community to stay updated with technology trends, participate in engaging activities, and build your tech skills."
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
              title={`Rwanda Technology Community`}
              tagline={
                "Empowering Rwandans through technology education and community engagement."
              }
            />
          </div>
          <div className="md:w-[60%] lg:w-[50%] sm:w-[90%] mx-auto text-xl py-4 p-2">
            <br></br>

            <h2 className="card-title">About the Community</h2>
            <p>
              {`Rwanda Technology Community is committed to keeping Rwandans up to date with the latest developments in the world of technology. Our mission is to empower individuals by not only teaching them but also providing opportunities to practice and utilize their skills in meaningful ways.`}
            </p>
            <br></br>

            <h2 className="card-title">Our Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {activities.map((activity, index) => (
                <div
                  key={index+1}
                  className="bg-white border border-gray-200 shadow-md rounded-lg p-4"
                >
                  <h3 className="text-main-blue font-bold text-lg">
                    {activity}
                  </h3>
                </div>
              ))}
            </div>
            <br></br>

            <h2 className="card-title">Benefits of Joining</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index+1}
                  className="bg-white border border-gray-200 shadow-md rounded-lg p-4"
                >
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
            <br></br>

            <p className="italic font-bold text-main-blue">
              Ready to be part of our tech revolution?
            </p>
            <br></br>
            <div className="flex items-center justify-center">
              <Link href="https://nas.io/tech-rw" className="btn-main">
                JOIN THE COMMUNITY
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
