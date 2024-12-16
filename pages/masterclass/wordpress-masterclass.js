import Head from "next/head";
import Nav from "../../components/HeadFoot/Nav";
import Footer from "../../components/HeadFoot/Footer";
import { Quote } from "../../components/HeadFoot/Quote";
import Partners from "../../components/Partners";
import Link from "next/link";

export default function Story() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "WordPress Masterclass",
    url: "https://techinika.co.rw/masterclass/wordpress-masterclass",
    description:
      "A comprehensive WordPress Masterclass to help you build and manage websites effectively.",
    provider: {
      "@type": "Organization",
      name: "Techinika",
      url: "https://techinika.co.rw",
    },
  };
  
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <title>WordPress Masterclass - Techinika</title>
        <meta
          name="description"
          content="A comprehensive WordPress Masterclass to build and manage websites effectively."
        />
        <meta property="og:title" content="WordPress Masterclass - Techinika" />
        <meta
          property="og:description"
          content="A comprehensive WordPress Masterclass to build and manage websites effectively."
        />
        <meta
          property="og:url"
          content="https://techinika.co.rw/masterclass/wordpress-masterclass"
        />
        <meta property="og:type" content="website" />
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
            <Quote
              quote={`From idea to website: Master Web Development without coding using WordPress`}
              speaker={
                "Duration: 40 hours - 23 December 2024 to 03 January 2025"
              }
            />
          </div>
          <div className="md:w-[60%] lg:w-[50%] sm:w-[90%] mx-auto text-xl py-4 p-2">
            <br></br>
            <div className="flex items-center justify-center">
              <Link href="/masterclass/apply" className="btn-main">
                APPLY NOW
              </Link>
            </div>
            <br></br>
            <h2 className="card-title">Key Information,</h2>
            <br></br>
            <ul className="list">
              <li>
                <b>Theme: </b>From idea to website: Master Web Development
                without coding using WordPress
              </li>
              <li>
                <b>Date: </b>From 23 December 224 to 03 January 2025
              </li>
              <li>
                <b>Training Fee: </b>
                <i>Standard:</i> <s>80,000 RWF</s> 50,000 RWF (before 15th Dec),{" "}
                <i>Students: </i>50,000 RWF
              </li>
              <li>
                <b>Venue: </b>Gikondo, Kigali, Techinika Office.
              </li>
            </ul>
            <br></br>
            <h2 className="card-title">Who can apply,</h2>
            <ul className="list">
              <li>Entrepreneurs, Founders, Business people</li>
              <li>Advanced High school students (Discount)</li>
              <li>Web Development enthusiasts</li>
              <li>
                <b>Venue: </b>Gikondo, Kigali, Techinika Office.
              </li>
            </ul>
            <br></br>
            <h2 className="card-title">Description,</h2>
            <p>{`This training aims to equip entrepreneurs, business owners, Innovators, Founders, and students in Rwanda with the skills necessary to create and manage their own WordPress websites. In an era where digital presence is key to business success, participants will gain hands-on experience in developing professional websites that can enhance their businesses or personal brands. The training focuses on providing cost-effective, practical skills for building websites without relying on expensive developers.`}</p>

            <br></br>
            <h2 className="card-title">What can participants expect?</h2>
            <p>{`By participating in this masterclass, you can expect to learn:`}</p>
            <div className="p-4 text-center my-3 text-mainBlue text-lg font-bold border rounded-lg border-mainBlue">
              <h2 className="italic">
                {`We will teach you how to build all kinds of websites, in a short time, and host them.`}
              </h2>
            </div>
            <ul></ul>
            <ul class="list list-square">
              <li>
                <b>Build websites of all kinds without using codes: </b>Create
                diverse websites using easy-to-use tools and platforms without
                needing to write code.
              </li>
              <li>
                <b>Building websites in a short time: </b>Learn methods and
                tools to quickly design and launch websites.
              </li>
              <li>
                <b>Problem-solving mechanisms: </b>Understand how to
                troubleshoot and solve common website-related issues.
              </li>
              <li>
                <b>Choosing and buying domain names: </b>Learn how to set up and
                manage a hosting environment for your websites.
              </li>
            </ul>

            <br></br>
            <h2 className="card-title">Key Content,</h2>
            <p>{`Some key components of our curriculum:`}</p>
            <br></br>
            <ul class="list list-square">
              <li>
                <b>Setting up cPanel on a hosting server: </b>Learn how to
                install and use cPanel to manage hosting accounts, files,
                databases, and emails.
              </li>
              <li>
                <b>Installing and configuring WordPress on a server: </b>
                Understand how to install WordPress and set it up for use on
                your hosting server.
              </li>
              <li>
                <b>Choosing, installing, and configuring WordPress themes: </b>
                Select, install, and customize WordPress themes to match your
                website’s design needs.
              </li>
              <li>
                <b>Choosing, installing, and configuring WordPress Plugins: </b>
                Discover plugins to extend WordPress functionality and configure
                them for optimal performance.
              </li>
              <li>
                <b>Configuring WordPress Settings: </b>Set up essential
                WordPress settings like site title, permalinks, user roles, and
                more to ensure smooth website operation.
              </li>
              <li>
                <b>
                  Optimizing Search Engine Optimization for WordPress websites:{" "}
                </b>
                Learn SEO best practices for improving website visibility and
                ranking on search engines.
              </li>
            </ul>

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
            <div className="flex items-center justify-center">
              <Link href="/masterclass/apply" className="btn-main">
                APPLY NOW
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
