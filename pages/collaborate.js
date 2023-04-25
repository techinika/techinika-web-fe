import Head from "next/head";
import Nav from "../components/HeadFoot/Nav";
import About from "../components/About";
import Footer from "../components/HeadFoot/Footer";
import { PageTitle } from "../components/HeadFoot/PageTitle";


export default function Collaborate () {
    return (
        <>
            <Head>
                <meta charset="UTF-8"/>
                <meta name="description" content="Collaborate with techinika to deliver high quality educations and technology products to the public."/>
                <meta name="keywords" content="Everyone has a right to understand technology, Web development, Graphic design, modern technologies, ICT Training to your staff"/>
                <meta name="author" content="Techinika Devs"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Collaborate with us | Techinika</title>
                <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
            </Head>
            <div>    

                <Nav/>
                <PageTitle title="Explore how we can collaborate!"/>

                <div className="md:w-10/12 xs:w-full mx-auto text-white p-8">
                    <div className="flex flex-wrap justify-center items-start mx-auto mt-8 md:w-11/12 gap-4">
                        <div className="card">
                            <h2 className="card-title">Be our host</h2>
                            <p className="card-body">{"It is now very obbbbbbbbvious than any other time how technology is taking a big part of our lives. Transformation is taking place before our eyes. Self driving cars, Artificial Intelligence, Internet of things, Robots and other tech inventions we used to watch only in movies are real today. Read more of what is coming and its impact on the world we know."}</p>
                            <button className="btn-card">Read more!</button>
                        </div>
                        <div className="card">
                            <h2 className="card-title">Sponsor our programs</h2>
                            <p className="card-body">{"As technology improves, so is the fear of being replaced by it? Artificial Intelligence will be better than you in remembering and performing well in routines job. Robots will be able to lift heavy stuffs and be able to work many hours than you, many things will be automated. So, the question to ask yourself is, WHAT CAN I DO TO SECURE MY JOB?"}</p>
                            <button className="btn-card">Secure your job!</button>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center items-start mx-auto mt-8 md:w-11/12 gap-4">
                        <div className="card">
                            <h2 className="card-title">Hire our trainees</h2>
                            <p className="card-body">{"It is now very obbbbbbbbvious than any other time how technology is taking a big part of our lives. Transformation is taking place before our eyes. Self driving cars, Artificial Intelligence, Internet of things, Robots and other tech inventions we used to watch only in movies are real today. Read more of what is coming and its impact on the world we know."}</p>
                            <button className="btn-card">Read more!</button>
                        </div>
                        <div className="card">
                            <h2 className="card-title">Promote us</h2>
                            <p className="card-body">{"As technology improves, so is the fear of being replaced by it? Artificial Intelligence will be better than you in remembering and performing well in routines job. Robots will be able to lift heavy stuffs and be able to work many hours than you, many things will be automated. So, the question to ask yourself is, WHAT CAN I DO TO SECURE MY JOB?"}</p>
                            <button className="btn-card">Secure your job!</button>
                        </div>
                    </div>
                </div>
                
                <Footer />
            </div>
        </>
    )
}