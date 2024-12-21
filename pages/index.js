import Head from "next/head";
import Nav from "../components/HeadFoot/Nav";
import Content from "../components/Content";
import { Programmes } from "../components/Programmes";
import { JoinUs } from "../components/Join";
import Footer from "../components/HeadFoot/Footer";
import { Quote } from "../components/HeadFoot/Quote";
import Partners from "../components/Partners";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://techinika.co.rw",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://techinika.co.rw/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <title>Techinika - Empowering Digital Education</title>
        <meta
          name="description"
          content="Techinika provides digital solutions tailored for education and skills development in Rwanda. Discover our story, services, and programs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Techinika - Empowering Digital Education"
        />
        <meta
          property="og:description"
          content="Techinika provides digital solutions tailored for education and skills development in Rwanda."
        />
        <meta property="og:url" content="https://techinika.co.rw/" />
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
        <div className="bg-white font-main mx-auto">
          {/* <Carousels slides={slides} /> */}
          <Content />
          <Programmes />
          <Quote
            quote={
              "Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road."
            }
            speaker={"Stewart Brand, Writer"}
          />
          {/* <Services /> */}
          <Partners />
          <JoinUs />
          <Footer />
        </div>
      </div>
    </>
  );
}
