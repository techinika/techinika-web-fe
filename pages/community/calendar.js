import Head from "next/head";
import Nav from "../../components/HeadFoot/Nav";
import { PageTitle } from "../../components/HeadFoot/PageTitle";
import Footer from "../../components/HeadFoot/Footer";

export default function Calendar() {
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
        <title>Community Calendar | Techinika</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <Nav />
      <PageTitle title={"Community Calendar"} />

      <Footer />
    </>
  );
}
