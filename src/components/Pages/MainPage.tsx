"use client";

import Nav from "../HeadFoot/Nav";
import Content from "../Parts/Content";
import { Programmes } from "../Parts/Programmes";
import CallToAction from "../Parts/Join";
import Footer from "../HeadFoot/Footer";
import Expertise from "../Parts/HowWeWork";
import FAQ from "../Parts/FrequentlyAskedQuestions";

export default function MainPage() {
  return (
    <div className="relative h-screen">
      <div className="font-main">
        <Nav />
      </div>
      <div className="bg-white font-main mx-auto mt-[10vh]">
        <Content />
        <Programmes />
        <CallToAction />
        <Expertise />
        {/* <OurStory /> */}
        {/* <Testimonials /> */}
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
