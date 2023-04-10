import About from "./About";
import Content from "./Content";
import Footer from "./Footer";
import Nav from "./Nav";
import Team from "./Team";
import Services from "./Services";
import { Partners } from "./Partners";
import { Programmes } from "./Programmes";
import { Subscribe } from "./Subscribe";

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
        {/* <Team/> */}
        {/* <Partners/> */}
        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export default Landing;
