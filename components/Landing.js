import About from "./About";
import Content from "./Content";
import Footer from "./Footer";
import Nav from "./Nav";
import Team from "./Team";
import Services from "./Services";
import { Partners } from "./Partners";
import { Programmes } from "./Programmes";

const Landing = () => {
  return (
    <>
      <div className="font-main bg-gray-200">
        <Nav/>
      </div>
      <div className="bg-gray-200 font-main mx-auto">
        <Content/>
        <Programmes/>
        <Services/>
        <About/>
        <Team/>
        <Partners/>
        <Footer />
      </div>
    </>
  );
};

export default Landing;
