import Head from "next/head";
import Nav from "../components/HeadFoot/Nav";
import { PageTitle } from "../components/HeadFoot/PageTitle";
import Footer from "../components/HeadFoot/Footer";
import { AboutCommunity } from "../components/Community/about";

export default function Community() {
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
        <title>Technology Community | Techinika</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <div>
        <Nav />
        <PageTitle title="Technology Community" />
          <div>
            <AboutCommunity />
          </div>
        <Footer />
      </div>
    </>
  );
}
