import Head from "next/head";
import Nav from "../components/HeadFoot/Nav";
import Content from "../components/Content";
import { Programmes } from "../components/Programmes";
import Services from "../components/Services";
import { Subscribe } from "../components/Subscribe";
import { JoinUs } from "../components/Join";
import Footer from "../components/HeadFoot/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="keywords"
          content="Everyone has a right to understand technology, Web development, Graphic design, modern technologies, ICT Training to your staff, "
        />
        <meta name="author" content="Techinika Devs" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <title>Techinika | For The Future</title> */}
        <title>
          Techinika - Technology Solutions for Everyone in Rwanda and Africa
        </title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta
          name="description"
          content="Techinika is a tech company based in Rwanda, dedicated to providing accessible technology solutions that solve problems for individuals and businesses in Rwanda and across Africa."
        ></meta>
      </Head>
      <div>
        <div className="font-main bg-bg">
          <Nav />
        </div>
        <div className="bg-white font-main mx-auto">
          <Content />
          <Programmes />
          <Services />
          <JoinUs />
          <Subscribe />
          <Footer />
        </div>
      </div>
    </>
  );
}
