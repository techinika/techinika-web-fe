import Head from "next/head";
import { Timeline } from "../components/Timeline";
import { JoinUs } from "../components/Join";
import { Subscribe } from "../components/Subscribe";
import Footer from "../components/HeadFoot/Footer";
import Nav from "../components/HeadFoot/Nav";

export default function Home(){
    return (
        <>
            <Head>
                <meta charset="UTF-8"/>
                <meta name="description" content="Information services company in Kigali"/>
                <meta name="keywords" content="Everyone has a right to understand technology, Web development, Graphic design, modern technologies, ICT Training to your staff, "/>
                <meta name="author" content="Techinika Devs"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Our Story | Techinika</title>
                <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
            </Head>
            <div>    

                <Nav />
                
                <Timeline />

                <Subscribe />

                <JoinUs />

                <Footer />
                
            </div>
        </>
    )
}