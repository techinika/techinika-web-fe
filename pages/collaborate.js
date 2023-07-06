import Head from "next/head";
import Nav from "../components/HeadFoot/Nav";
import Footer from "../components/HeadFoot/Footer";
import { PageTitle } from "../components/HeadFoot/PageTitle";
import { BlogPage } from "../components/Study/blogPage";
import CollaborateForm from "../components/Forms/CollaborationPhone";

export default function Collaborate() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Collaborate with techinika to deliver high quality educations and technology products to the public."
        />
        <meta
          name="keywords"
          content="Everyone has a right to understand technology, Web development, Graphic design, modern technologies, ICT Training to your staff"
        />
        <meta name="author" content="Techinika Devs" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Techinika Community - Join the Tech Enthusiasts in Rwanda and Africa
        </title>
        <meta
          name="description"
          content="Techinika Community is a platform where tech enthusiasts come together to share knowledge, collaborate, and network. Join our vibrant community and be part of the tech revolution in Rwanda and Africa."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <div>
        <Nav />
        <PageTitle title="Explore how we can collaborate!" />

        <BlogPage>
          <CollaborateForm />
        </BlogPage>

        <Footer />
      </div>
    </>
  );
}
