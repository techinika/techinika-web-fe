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
        <title>Collaborate with us | Techinika</title>
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
