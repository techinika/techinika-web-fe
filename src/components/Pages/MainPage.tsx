"use client";

import Nav from "../HeadFoot/Nav";
import Content from "../Parts/Content";
import { Programmes } from "../Parts/Programmes";
import { JoinUs } from "../Parts/Join";
import Footer from "../HeadFoot/Footer";
import { Quote } from "../HeadFoot/Quote";
import Partners from "../Parts/Partners";

export default function MainPage() {
  return (
    <div className="relative h-screen">
      <div className="font-main">
        <Nav />
      </div>
      <div className="bg-white font-main mx-auto mt-[19vh] md:mt-[10vh]">
        <Content />
        <Programmes />
        <Quote
          quote={
            "Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road."
          }
          speaker={"Stewart Brand, Writer"}
        />
        <Partners />
        <JoinUs />
        <Footer />
      </div>
    </div>
  );
}
