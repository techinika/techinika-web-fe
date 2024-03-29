import Head from "next/head";
import Nav from "../../components/HeadFoot/Nav";
import { PageTitle } from "../../components/HeadFoot/PageTitle";
import Footer from "../../components/HeadFoot/Footer";
import { BlogPage } from "../../components/Study/blogPage";

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
      <BlogPage>
        <h2 className="card-title mb-3">Check out what we are doing...</h2>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Africa%2FMaputo&showTitle=0&showDate=1&showPrint=1&showTabs=1&showCalendars=0&mode=AGENDA&src=bmlndXRlcndhbmRhQGdtYWlsLmNvbQ&src=ZW4ucncjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%230B8043"
          style={{ borderWidth: 0 }}
          width="800"
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </BlogPage>
      <Footer />
    </>
  );
}
