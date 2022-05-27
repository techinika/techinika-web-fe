import { FaCode } from "react-icons/fa";
import { SiAdobeaftereffects, SiTrainerroad } from "react-icons/si";

const Skills = () => {
  return (
    <section className="bg-white p-8 my-8">
      <div>
        <h1 className="text-mainBlue font-bold text-4xl my-4">What we do</h1>
        <p>We’ve got everything you need to launch and grow your business</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 m-2 md:m-4 gap-2 md:gap-4">
        <article className="flex w-11/12 md:w-3/4">
          <div className="basis-1/6">
            <FaCode className="text-4xl mt-4 ml-4  md:ml-8  text-mainBlue" />
          </div>
          <div className="basis-5/6">
            <h3 className="text-xl py-4 font-bold">
              Web and Mobile development
            </h3>
            <p className="text-base">
              Nemo cupiditate ab quibam quaerat impedit magni. um suscipit ipsum
              laium. Quo delectus est.
            </p>
          </div>
        </article>
        <article className="flex w-11/12 md:w-3/4">
          <div className="basis-1/6">
            <SiAdobeaftereffects className="text-4xl mt-4 ml-4  md:ml-8  text-mainBlue" />
          </div>
          <div className="basis-5/6 ">
            <h3 className="text-xl py-4 font-bold">Graphic design</h3>
            <p>
              Nemo cupiditate ab quibam quaerat impedit magni. um suscipit ipsum
              laium. Quo delectus est.
            </p>
          </div>
        </article>
        <article className="flex w-11/12 md:w-3/4">
          <div className="basis-1/6">
            <FaCode className="text-4xl mt-4 ml-4 md:ml-8  text-mainBlue" />
          </div>
          <div className="basis-5/6">
            <h3 className="text-xl py-4 font-bold">Web design</h3>
            <p>
              Nemo cupiditate ab quibam quaerat impedit magni. um suscipit ipsum
              laium. Quo delectus est.
            </p>
          </div>
        </article>
        <article className="flex w-11/12 md:w-3/4">
          <div className="basis-1/6">
            <SiTrainerroad className="text-4xl mt-4 ml-4 md:ml-8  text-mainBlue" />
          </div>
          <div className="basis-5/6">
            <h3 className="text-xl py-4 font-bold">Staff ICT training</h3>
            <p>
              Nemo cupiditate ab quibam quaerat impedit magni. um suscipit ipsum
              laium. Quo delectus est.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Skills;
