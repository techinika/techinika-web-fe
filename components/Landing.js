import About from "./About";
import Content from "./Content";
import Footer from "./Footer";
import Nav from "./Nav";
import Team from "./Team";
import Skills from "./Skills";

const Landing = ({children}) => {
  return (
    <div className="bg-gray-200 font-main h-screen">
      <Nav/>
      <Content/>
      <About/>
      <Skills/>
      <Team/>
      <Footer />
    </div>
  );
};

export default Landing;
