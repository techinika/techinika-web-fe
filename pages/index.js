import Head from "next/head";
import Link from "next/link";

export default function Home(){
    return (
        <>
            <Head>
                <meta charset="UTF-8"/>
                <meta name="description" content="Information services company in Kigali"/>
                <meta name="keywords" content="Web development, Graphic design, modern technologies, ICT Training to your staff, "/>
                <meta name="author" content="John Doe"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Home | Techinika Limited</title>
                <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap" rel="stylesheet"></link>
            </Head>
            <div>
                <p className="title">Welcome to Techinika Website</p>
                <div className="construction">
                    <p className="under">This website is under construction, Follow us on social media to stay updated. You can also request one of our services from our social media accounts.</p>
                    <div className="socials">
                        <Link href="https://twitter/techinika">
                            <a target="_blank">Twitter</a>
                        </Link>
                        <Link href="https://instagram/techinika">
                            <a target="_blank">Instagram</a>
                        </Link>
                        <Link href="https://facebook/techinika">
                            <a target="_blank">Facebook</a>
                        </Link>
                        <Link href="https://t.me/techinika">
                            <a target="_blank">Telegram</a>
                        </Link>
                        <Link href="https://linkedin/company/techinika">
                            <a target="_blank">Linkedin</a>
                        </Link>
                    </div>
                    <footer>
                        Techinika Limited &copy; 2022
                    </footer>
                </div>
            </div>
        </>
    )
}