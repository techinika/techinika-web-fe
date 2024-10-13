import Head from "next/head";
import Nav from "../components/HeadFoot/Nav";
import Footer from "../components/HeadFoot/Footer";
import { Quote } from "../components/HeadFoot/Quote";
import Partners from "../components/Partners";
import Link from "next/link";

export default function Story() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="keywords"
          content="what is techinika?, how did techinika exist?, who founded techinika?, the best edtech company in rwanda?, learn about techinika, a company from rwanda, education company in rwanda, the best tech company in rwanda"
        />
        <meta name="author" content="Techinika Developers" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Our Story - Techinika</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta
          name="description"
          content="Techinika is an edtech company in Rwanda that provides solutions for training institutions, schools, international organizations and the government to nurture the technologists in rwanda and africa."
        ></meta>
      </Head>
      <div className="relative h-screen">
        <div className="font-main">
          <Nav />
        </div>
        <div className="bg-white font-main mx-auto mt-24">
          <div className="bg-gray-50">
            <Quote
              quote={`...we are constantly running towards building people who use digital tools, and build digital tools to solve problems.`}
              speaker={"Cishahayo Songa Achille, The Founder"}
            />
          </div>
          <div className="md:w-[60%] lg:w-[60%] sm:w-[90%] mx-auto text-xl py-4 text-justify p-2">
            <p className="italic">Hi, there!</p>
            <p>
              Thank you for visiting our website. I am taking this time to
              welcome you, and tell you the story of how we came to be, what we
              are doing today, and the plans for the future. Enjoy reading.
            </p>
            {/* <h2 className="card-title">The beginning,</h2>
            <p>{`In 2017, I started studying Networking at IPRC Kigali. It was not my first time seeing a computer, or touching it, but it was the first time spending hours with a computer, with an internet connection. In my mind, I assumed that everyone in my class was very proficient with computers, and I was the only one left behind.`}</p> */}
            {/* <p>{`That meant that I spent more hours learning than what everyone else did. But only *learning what the teacher taught us, was no longer enough.* I started going to the lab so many times, and did research on new things, and that opened me to the wide web full of knowledge and possibilities. Soon enough I was on a very good level in IT world.`}</p> */}
            <br></br>
            <h2 className="card-title">The Foundation,</h2>
            <p>{`In 2020, after graduating high school, many people were coming to me seeking support on simple things that they should be able to do themselves on their phones, computers or even on the internet. In June, I started a blog and started writing articles on how they can do most of the things themselves, and I was writing in Kinyarwanda.`}</p>
            <p>{`One year later in 2021, Techinika was born, but it wasn't registered until March 2023. It is now registered as a private company limited by shares, and governed by laws of Rwanda.`}</p>
            <div className="p-4 text-center my-3 text-mainBlue text-2xl font-bold border rounded-lg border-mainBlue">
              <h2 className="italic">
                {`Our offer was simple, "Learn from our content, if you need further support, we help you through a private training."`}
              </h2>
            </div>
            <p>{`We have pivoted, the way we deliver, but the offer is still the same. Our training is for digital skills. Basic Computer Literacy, Software Development, Digital Marketing, utilizing AI tools for productivity, and Data related subjects.`}</p>
            <p>{`Currently, 10+ people went through our training, and 50,000+ have consumed our content online.`}</p>
            <br></br>
            <h2 className="card-title">Techinika Today,</h2>
            <p>{`Today, we are building what is set out to be the biggest digital skills learning platform. Our platform allows members to acquire skills, carry our test activities, connect with the communities, and connect with companies boosting their employment opportunities.`}</p>
            <div className="p-4 text-center my-3 text-mainBlue text-2xl font-bold border rounded-lg border-mainBlue">
              <h2 className="italic">
                {`We build talents, test talents, and expose them.`}
              </h2>
            </div>
            <figure>
              <img
                src="/iot session by techinika.jpg"
                className="rounded-lg"
                id="im"
                title="A session we carried out at African Leadership University through
              Rwanda Technology Community"
                alt="A session we carried out at African Leadership University through
              Rwanda Technology Community"
              />
              <figcaption
                itemID="im"
                className="w-full text-xs italic text-center p-1"
              >
                A session we carried out at African Leadership University
                through Rwanda Technology Community
              </figcaption>
            </figure>
            <p>{`We are running the Monthly Masterclass, where our participants get to learn new skills every month, skills that can be used right away. For people who are unable to join our Masterclasses, we have Rwanda Technology Community, a community that keeps members up to date on emerging technologies.`}</p>
            <br></br>
            <h2 className="card-title">Techinika in the Future,</h2>
            <p>
              Our goals won't change anytime soon. Our delivery methods might
              change, our platform might change, but{" "}
              <b>
                *we are constantly running towards building people who use
                digital tools, and build digital tools to solve problems.*
              </b>
            </p>
            <p className="italic font-bold text-mainBlue">
              Some of the programs incoming include:
            </p>
            <ul>
              <li className="flex items-center gap-2">
                <b>Techinika Learning (ongoing):</b>
                <p>
                  Our platform, Our community, and other programs to develop
                  digital skills of beneficiaries.
                </p>
              </li>
              {/* <li className="flex items-center gap-2">
                <b>Techinika Ventures:</b>
                <p>
                  Helping, guiding and investing in our talents to build
                  solutions.
                </p>
              </li>
              <li className="flex items-center gap-2">
                <b>Techinika Talents:</b>
                <p>
                  Helping, guiding and connecting our successful talents to
                  employment.
                </p>
              </li> */}
            </ul>
            <br></br>
            <h2 className="card-title">Our ask from you,</h2>
            <p>{`You have now read our story, kindly invite people you know who are looking to start careers in tech, let's connect with them and help them. If you are an investor, we invite you to invest in us, let's talk about it. If you have a network, kindly spread the word to them.`}</p>
            <br></br>
            <p>
              We are thankful to you, our partners, our clients, and advisors
              who helped us get where we are today. Our work is building
              hundreds of generations to come, and we welcome new ideas and
              feedback from you! You can reach out to us on our email{" "}
              <b>
                <Link href={"mailto:info@techinika.com"} className="underline">
                  info@techinika.com
                </Link>
              </b>{" "}
              or use our{" "}
              <Link href={"/request"} className="underline">
                contact page
              </Link>
              .
            </p>
            <br></br>
            <p>Best Regards,</p>
            <p className="italic">Cishahayo Songa Achille, The Founder</p>
          </div>
          <Partners />
          <Footer />
        </div>
      </div>
    </>
  );
}
