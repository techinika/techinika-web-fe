import Head from "next/head";
import Nav from "../components/HeadFoot/Nav";
import { PageTitle } from "../components/HeadFoot/PageTitle";
import Footer from "../components/HeadFoot/Footer";
import { Subscribe } from "../components/Subscribe";
import Link from "next/link";
import { useState } from "react";
import WorkForm from "../components/Forms/WorkForm";

export default function Services() {
  const [service, setService] = useState(0);
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="The community of individuals interested in using technology to tackle world's problems."
        />
        <meta
          name="keywords"
          content="Everyone has a right to understand technology, Web development, Graphic design, modern technologies, ICT Training to your staff"
        />
        <meta name="author" content="Techinika Devs" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Services | Techinika</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <div>
        <Nav />
        <PageTitle title="Services" />
        <div className="md:w-9/12 mx-auto p-2">
          <div className="flex flex-row flex-wrap gap-2 my-2">
            <div className="card">
              <h2 className="card-title">Corporate trainings</h2>
              <p>
                {
                  "Elevate your team's technological skills with our tailored corporate ICT trainings. Equip your employees with the latest knowledge in software applications, hardware systems, cybersecurity, and digital transformation. Drive innovation, improve productivity, and stay ahead in today's digital age with our hands-on workshops and interactive learning experiences."
                }
              </p>
            </div>
            <div className="card">
              <h2 className="card-title">Software & Web development</h2>
              <p>
                {
                  "Unleash the full potential of your business with our comprehensive software and web development services. Our skilled team will transform your vision into custom applications and websites that streamline processes, enhance user experiences, and empower your digital presence. Let us create robust, scalable solutions that drive growth and exceed expectations."
                }
              </p>
            </div>
            <div className="card">
              <h2 className="card-title">Graphic Design & Branding</h2>
              <p>
                {
                  "Make a lasting impression with our captivating graphic design and branding services. Our creative experts will craft a unique visual identity that reflects your brand's personality and resonates with your target audience. From logos to websites, packaging to social media, we'll help you stand out and establish a strong brand presence."
                }
              </p>
            </div>
          </div>

          <div className="flex flex-row flex-wrap gap-2 my-2">
            <div className="card">
              <h2 className="card-title">Digital Marketing</h2>
              <p>
                {
                  "Take your business to new heights with our result-driven digital marketing services. Our team of experts will help you navigate the complex online landscape, utilizing search engines, social media, and email marketing to reach and engage your ideal customers. Drive traffic, generate leads, and maximize your ROI with our data-driven strategies."
                }
              </p>
            </div>
            <div className="card">
              <h2 className="card-title">Content Development</h2>
              <p>
                {
                  "Captivate your audience with compelling content developed by our expert team. From engaging blog posts and informative articles to persuasive website copy and captivating videos, we'll create high-quality content tailored to your brand. Establish your authority, drive traffic, and connect with your audience through our captivating storytelling."
                }
              </p>
            </div>
            <div className="card">
              <h2 className="card-title">Advertising</h2>
              <p>
                {
                  "Connect with a highly engaged tech-savvy audience of over 200 daily visitors across our diverse platforms. Advertise your brand prominently on our website, feature in our YouTube videos, and reach our active social media followers. Be seen by the right audience and maximize your brand exposure for optimal results."
                }
              </p>
            </div>
          </div>
          <div className="py-5 flex justify-between flex-wrap gap-5 flex-row">
            <div className="md:w-6/12">
              <h2 className="card-title">Why should you work with us?</h2>
              <p>
                {
                  "Choose us for unparalleled expertise and exceptional service. We bring a wealth of knowledge, creativity, and passion to every project. With our team of seasoned professionals, cutting-edge strategies, and a client-centric approach, we deliver outstanding results that elevate your brand and drive your business forward."
                }
              </p>
              <br></br>
              <p>
                {
                  "Working with us means gaining a competitive edge in the market. We offer tailored solutions that align with your unique goals, leveraging the latest trends and technologies. Trust our proven track record, attention to detail, and unwavering commitment to your success. Experience the difference of a collaborative partnership that delivers tangible, measurable outcomes."
                }
              </p>
              <p className="font-bold text-mainBlue">
                Our team is the best because, we have:
              </p>
              <div className="flex flex-wrap gap-3 text-center">
                <div className="card">
                  <p>5+ years of experience</p>
                </div>
                <div className="card">
                  <p>Young & Flexible team members</p>
                </div>
                <div className="card">
                  <p>Worked with big brands</p>
                </div>
              </div>
            </div>
            <div className="md:w-4/12 bg-bg rounded p-5">
              <WorkForm />
            </div>
          </div>
        </div>

        <div className="bg-mainBlue w-full text-white">
          <div className="w-9/12 mx-auto p-10">
            <p className="text-xl leading-loose">
              {`While focusing on the services we mentioned earlier, we understand the importance of collaboration. We are actively seeking partnerships to deliver these services effectively. By joining forces with us, you become an integral part of our journey towards positive impact and transformation. Together, let's shape a brighter future through technology and empower individuals with the tools they need to succeed.`}
            </p>
            <div className="flex justify-between my-5">
              <div></div>
              <Link href="/collaborate">
                <button className="btn-white">{"Let's work together"}</button>
              </Link>
            </div>
          </div>
        </div>
        <Subscribe />
        <Footer />
      </div>
    </>
  );
}
