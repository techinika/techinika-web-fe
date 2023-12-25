import Head from "next/head";
import Nav from "../../components/HeadFoot/Nav";
import { PageTitle } from "../../components/HeadFoot/PageTitle";
import Footer from "../../components/HeadFoot/Footer";
import { AboutCommunity } from "../../components/Community/about";
import { Subscribe } from "../../components/Subscribe";
import { Events } from "../../components/Community/Events";
import Link from "next/link";

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
          <Events />
        </div>
        <div className="bg-mainBlue w-full text-white">
          <div className=" w-full md:w-9/12 mx-auto p-10">
            <p className="text-xl leading-loose">
              {`Are you passionate about technology and making a positive impact? Join our team and work with us to educate schools, villages, and companies about emerging technologies through captivating workshops and our engaging Digital Discourse podcast. Together, let's empower individuals, foster tech literacy, and shape a better future.`}
            </p>
            <div className="flex justify-between my-5">
              <div></div>
              <div className="flex gap-2 flex-wrap">
                <Link href="https://whatsapp.techinika.com" target="_blank" className="btn-yellow">
                  <p>
                    {"Join our community"}
                  </p>
                </Link>
                <Link href="/collaborate">
                  <button className="btn-white">{"Let's work together"}</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Subscribe />
        <Footer />
      </div>
    </>
  );
}
