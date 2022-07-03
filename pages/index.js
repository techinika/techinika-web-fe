import Head from "next/head";
import Link from "next/link";
import Landing from "../components/Landing";

export default function Home(){
    return (
        <>
            <Head>
                <meta charset="UTF-8"/>
                <meta name="description" content="Information services company in Kigali"/>
                <meta name="keywords" content="Everyone has a right to understand technology, Web development, Graphic design, modern technologies, ICT Training to your staff, "/>
                <meta name="author" content="Techinika Devs"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Techinika - Everyone has a right to understand technology</title>
                <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet"/>
            </Head>
            <div>    

                
                <Landing/>
                
                
            </div>
        </>
    )
}