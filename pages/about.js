import Head from "next/head";
import { Subscribe } from "../components/Subscribe";
import Footer from "../components/HeadFoot/Footer";
import Nav from "../components/HeadFoot/Nav";
import { PageTitle } from "../components/HeadFoot/PageTitle";
import { Team } from "../components/About/Team";

export default function About() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Information services company in Kigali"
        />
        <meta name="author" content="Techinika Devs" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Techinika</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>

        <title>
          About Techinika - Making Technology Accessible in Rwanda and Africa
        </title>
        <meta
          name="description"
          content="Learn about Techinika, a tech company based in Rwanda that is focused on making technology accessible to everyone in Rwanda and Africa. Discover our mission, vision, and commitment to solving problems through technology."
        ></meta>
      </Head>
       
      <div>
        <Nav />

        <PageTitle title={"About Techinika"} />
        <div className="md:w-9/12 mx-auto my-3 py-5">
          <div className="flex flex-row flex-wrap justify-between gap-4  m-2 md:p-0 bg-gray-50">
            <div className="card">
              <h2 className="card-title">Techinika</h2>
              <p>
                {
                  "Techinika is a tech company that is striving to make technology that solves problems accessible to everyone is Africa, especially Rwanda where we are based. "
                }
              </p>
            </div>
            <div className="card">
              <h2 className="card-title">Why?</h2>
              <p>
                {
                  "The future vehicle will be driven by those who understand and use technology. But more than 60% of Rwandans don't understand which tech tools they need and why."
                }
              </p>
            </div>
            <div className="card">
              <h2 className="card-title">Vision</h2>
              <p>
                {
                  "The society where everyone will have knowledge on which tool they need and why, plus being able to use it themselves, and solves other problems by creating new tools themselves."
                }
              </p>
            </div>
          </div>
        </div>
        <Team />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
}
