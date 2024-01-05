"use client";

import { Button, Footer } from "flowbite-react";
import Head from "next/head";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="keywords"
          content="Technology, Business, ICT Consultancy, IT Consultancy, IT For your business"
        />
        <meta name="author" content="Techinika Limited" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Techinika - Technology for Business</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta
          name="description"
          content="Techinika is a tech company based in Rwanda, dedicated to providing accessible technology solutions that solve problems for individuals and businesses in Rwanda and across Africa."
        ></meta>
      </Head>
      <section className="">
        {/* Navigation */}
        <div className="w-full bg-[#061A22] shadow-lg shadow-white">
          <div className="box flex justify-between items-center py-3">
            <h1 className="text-white font-bold text-2xl">Techinika Limited</h1>
            <Button pill gradientMonochrome="info" size="lg">
              <div className="flex gap-5 items-center justify-between font-bold">
                Request Demo
                <HiOutlineArrowRight></HiOutlineArrowRight>
              </div>
            </Button>
          </div>
        </div>
        {/* Hero Section */}
        <div className="h-[90%] hero shadow-white shadow-xl">
          <div className="bg-[#061A22] h-screen opacity-95">
            <div className="box text-white flex justify-between h-[90%] flex-wrap-reverse items-center">
              <div className="flex-1 flex flex-col gap-6">
                <h1 className="font-bold text-5xl">
                  Looking to boost your business?
                </h1>
                <p className="text-2xl">
                  Look no more, we help you identify how technology can boost
                  your operations, increase, your revenue, integrate technology,
                  and ease your management efforts.
                </p>
                <p className="text-2xl">We walk with you!</p>
                <div className="py-5 flex gap-5">
                  <Button size="lg" gradientMonochrome="info" pill>
                    <p className="font-bold">Apply for Training</p>
                  </Button>
                  <Button size="lg" outline gradientDuoTone="greenToBlue" pill>
                    <p className="font-bold">Check our portfolio</p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="bg-[#061A22] p-5">
          <div className="box bg-[#061A22] flex justify-between items-center">
            <Footer.Copyright href="#" by="Techinika Limited" year={2022} />
            <Footer.LinkGroup>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </section>
    </>
  );
}
