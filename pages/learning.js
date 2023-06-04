import Head from "next/head";
import { PageTitle } from "../components/HeadFoot/PageTitle";
import Nav from "../components/HeadFoot/Nav";
import Link from "next/link";
import { useState } from "react";
import { Quote } from "../components/HeadFoot/Quote";
import { Subscribe } from "../components/Subscribe";
import Footer from "../components/HeadFoot/Footer";

export default function Learning() {
  const [program, setProgram] = useState(0);
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Information services company in Kigali"
        />
        <meta
          name="keywords"
          content="Everyone has a right to understand technology, Web development, Graphic design, modern technologies, ICT Training to your staff, "
        />
        <meta name="author" content="Techinika Devs" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Learning Programs | Techinika</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <div>
        <div className="font-main bg-bg">
          <Nav />
        </div>
        <PageTitle title={"Learning Programs"} />
        <div className="md:w-9/12 mx-auto p-10">
          <div className="flex flex-row flex-wrap justify-between gap-2 bg-gray-50">
            <div className="card">
              <h2 className="card-title">Articles</h2>
              <p>
                Our articles are our primary and best medium to bring you
                knowledge and skills that you need and will be happy to possess!
              </p>
              <Link href="https://techinika.com">
                <a target="_blank">
                  <button className="btn-card">Read them</button>
                </a>
              </Link>
            </div>
            <div className="card">
              <h2 className="card-title">Videos</h2>
              <p>
                Our articles are our primary and best medium to bring you
                knowledge and skills that you need and will be happy to possess!
              </p>
              <Link href="https://tv.techinika.com">
                <a target="_blank">
                  <button className="btn-card">Watch them</button>
                </a>
              </Link>
            </div>
            <div className="card">
              <h2 className="card-title">Wari Uzi Ko!</h2>
              <p>
                Our articles are our primary and best medium to bring you
                knowledge and skills that you need and will be happy to possess!
              </p>
              <Link href="https://instagram.com/techinika">
                <a target="_blank">
                  <button className="btn-card">Check them</button>
                </a>
              </Link>
            </div>
          </div>
          <div className="py-5 flex justify-between flex-wrap gap-5 flex-row ">
            <div className="md:w-6/12">
              <h2 className="card-title">Self-Learning?</h2>
              <p>
                We recognize the importance of self learning and consuming
                contents from the internet. We understand the people who possess
                the ability to teach themselves grow and get ahead of people who
                wait to be taught.
              </p>
              <p>
                But we also recognize the importance of mentorship and guidance.
                We recognize that individuals who have had guidance avoid some
                common mistake and step up their learning process. That is why
                we woud like you to offer us a chance to guide you in your
                leaning journey.
              </p>
              <p className="font-bold text-mainBlue">
                Check out our guided learning programs:
              </p>
              <div className="flex flex-wrap gap-3 text-center">
                <div
                  className="card"
                  title={
                    "This is a program that allows individuals who encounter one time problems, to get support from us. This might be like fixing the bug, understanding a concept, wanting to download a learning material and any other on time support no matter how long it will take."
                  }
                >
                  <p>One time learning support</p>
                </div>
                <div
                  className="card"
                  title={
                    "A subscription service for learners who are commited and would like guidance and support during their self learning journey. They pay on a monthly basis, and will have someone who will help them any time they need that support."
                  }
                >
                  <p>Monthly learning support</p>
                </div>
                <div
                  className="card"
                  title={
                    "A 3 month proogram designed to help you learn all the basics from the beginner level to the professional level. It also gives you the opportunity to work on real projects plus being a potential candidate for jobs. This program provides certificate at the completion of the training."
                  }
                >
                  <p>Technology Institute</p>
                </div>
              </div>
            </div>
            <div className="md:w-4/12 bg-bg rounded p-5">
              <h2 className="card-title text-end">
                Apply to join our programs!
              </h2>
              <form className="">
                <label>Your name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input bg-white"
                />
                <label>Your email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input bg-white"
                />
                <label className="font-bold mt-3">Choose Program</label>
                <select
                  className="input"
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                >
                  <option value={0}>Select a program</option>
                  <option value={1}>One time learning support</option>
                  <option value={2}>Monthly learning support</option>
                  <option value={3}>
                    {"Join our techology institute (3 months)"}
                  </option>
                </select>
                {program === "1" && (
                  <div>
                    <p>
                      If you have a problem while learning, don't hesitate to
                      reach out for help. You will pay according to how long it
                      takes to help you.
                    </p>
                    <p className="font-bold text-mainBlue">
                      Starting from $2/hour
                    </p>
                  </div>
                )}

                {program === "2" && (
                  <div>
                    <p>
                      You might be expecting to encounter problems multiple
                      times. In that case, we offer you a subscription plan that
                      allows you to reach out to us anytime you have a problem
                      and we help you resolve it or learn how to resolve it.
                    </p>
                    <p className="font-bold text-mainBlue">
                      Starting from $50/month
                    </p>
                  </div>
                )}

                {program === "3" && (
                  <div>
                    <p>
                      It is possible that you are still a beginner and you need
                      to learn from zero to the level you want. We have a three
                      month program designed to help you learn all the basics
                      and after three months, we allow you to choose what you
                      want to learn next.
                    </p>
                    <p className="font-bold text-mainBlue">
                      Starting from $150/3 months
                    </p>
                  </div>
                )}

                {program === "0" ? null : (
                  <button className="btn-card">Proceed</button>
                )}
              </form>
            </div>
          </div>
        </div>
        <div className="my-5 bg-bg p-10">
          <div className="md:w-9/12 mx-auto">
            <h2 className="card-title text-center">Things you will learn</h2>
            <div className="flex flex-wrap gap-2 justify-around my-5">
              <div className="rounded-full bg-mainBlue relative h-[200px] w-[200px] text-center flex justify-center items-center font-black text-white">
                {"Web design"}
              </div>
              <div className="rounded-full bg-mainBlue relative h-[200px] w-[200px] text-center flex justify-center items-center font-black text-white">
                {"Graphic design"}
              </div>
              <div className="rounded-full bg-mainBlue relative h-[200px] w-[200px] text-center flex justify-center items-center font-black text-white">
                {"Digital Marketing"}
              </div>
              <div className="rounded-full bg-mainBlue relative h-[200px] w-[200px] text-center flex justify-center items-center font-black text-white">
                {"Basic Computer Skills"}
              </div>
              <div className="rounded-full bg-mainBlue relative h-[200px] w-[200px] text-center flex justify-center items-center font-black text-white">
                {"Emerging Technologies"}
              </div>
            </div>
          </div>
        </div>
        <Quote />
        <div className="bg-mainBlue w-full text-white">
          <div className="w-9/12 mx-auto p-10">
            <p className="text-xl leading-loose">
              {`Join our mission to make a difference in the lives of thousands in Rwanda and Burundi. Since 2020, we have been creating valuable content and gaining insights into people's needs. Moving forward, we aim to educate over 150,000 individuals in technology and empower them with in-demand skills, leading to a 60% employment rate. You can contribute by volunteering, sharing your expertise, skills, or spreading the word among your network.`}
            </p>
            <div className="flex justify-between my-5">
              <div></div>
              <Link href="/collaborate">
                <button className="btn-white">{"Let's work together"}</button>
              </Link>
            </div>
          </div>
        </div>
        <Subscribe />
        <Footer />
      </div>
    </div>
  );
}
