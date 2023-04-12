import Head from "next/head";
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
                <title>Techinika | For The Future</title>
                <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
            </Head>
            <div>    

                
                <Landing/>
                
                
            </div>
        </>
    )
}