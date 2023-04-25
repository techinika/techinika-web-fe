import About from "./About";
import Content from "./Content";
import Footer from "./HeadFoot/Footer";
import Nav from "./HeadFoot/Nav";
import Services from "./Services";
import { Programmes } from "./Programmes";
import { Subscribe } from "./Subscribe";
import { JoinUs } from "./Join";

const Landing = () => {
  return (
    <>
      <div className="font-main bg-bg">
        <Nav/>
      </div>
      <div className="bg-white font-main mx-auto">
        <Content/>
        <Programmes/>
        <Services/>
        <About/>
        <Subscribe />
        <JoinUs />
        <Footer />
      </div>
    </>
  );
};

export default Landing;
