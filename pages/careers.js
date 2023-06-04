import Head from "next/head";
import Nav from "../components/HeadFoot/Nav";
import Footer from "../components/HeadFoot/Footer";
import { PageTitle } from "../components/HeadFoot/PageTitle";
import { Subscribe } from "../components/Subscribe";


export default function Careers () {
    return (
        <>
            <Head>
                <meta charset="UTF-8"/>
                <meta name="description" content="Collaborate with techinika to deliver high quality educations and technology products to the public."/>
                <meta name="keywords" content="Everyone has a right to understand technology, Web development, Graphic design, modern technologies, ICT Training to your staff"/>
                <meta name="author" content="Techinika Devs"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Together for the future | Techinika</title>
                <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
            </Head>
            <div>    

                <Nav/>
                <PageTitle title="Join us to make a change"/>

                <div className="md:w-10/12 xs:w-full mx-auto text-white p-8">
                    <h2 className="card-title">Check out available positions</h2>
                    <p className="text-gray-900">There are currently no available positions, please subscribe to be the first to know when we send out new positions.</p>
                </div>

                <Subscribe />

                <Footer />
            </div>
        </>
    )
}