"use client";

import Nav from "../HeadFoot/Nav";
import Content from "../Parts/Content";
import { Programmes } from "../Parts/Programmes";
import Footer from "../HeadFoot/Footer";

export default function MainPage() {
  return (
    <div className="relative h-screen">
      <div className="font-main">
        <Nav />
      </div>
      <div className="bg-white font-main mx-auto mt-[10vh]">
        <Content />
        <Programmes />
        <Footer />
      </div>
    </div>
  );
}
