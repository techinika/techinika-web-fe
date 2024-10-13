import Head from "next/head";
import Nav from "../components/HeadFoot/Nav";
import Content from "../components/Content";
import { Programmes } from "../components/Programmes";
import Services from "../components/Services";
import { JoinUs } from "../components/Join";
import Footer from "../components/HeadFoot/Footer";
import { Quote } from "../components/HeadFoot/Quote";
import Partners from "../components/Partners";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="keywords"
          content="technology education in africa, edtech rwanda, tech rwanda, tech education in africa, digital skills education in rwanda, software development training in rwanda, technology internship in Rwanda, rwanda educating the future of educators in technology, courses about technology in kinyarwanda, school management software in Rwanda, hp classeasy in rwanda, leadxera in rwanda"
        />
        <meta name="author" content="Techinika Developers" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Techinika - Digitizing People and Institutions</title>
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
        <div className="bg-white font-main mx-auto">
          <Content />
          <Programmes />
          <Quote
            quote={
              "Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road."
            }
            speaker={"Stewart Brand, Writer"}
          />
          <Services />
          <Partners />
          <JoinUs />
          <Footer />
        </div>
      </div>
    </>
  );
}
