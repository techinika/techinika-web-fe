import { FaCode } from "react-icons/fa";
import { SiAdobeaftereffects, SiTrainerroad, SiMarketo } from "react-icons/si";

const Services = () => {
  return (
    <section className="bg-transparent p-8 my-8 w-10/12 mx-auto" id="offers">
      <div>
        <h1 className="text-mainBlue font-bold text-4xl my-4">What do we offer?</h1>
        <p>{"We’ve got everything you need to launch and grow your business. Don't worry we are relieving the load you had to carry yourself and carrying it for you."}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 m-2 md:m-4 gap-2 md:gap-4">
        <article className="flex">
          <div className="basis-1/6 p-2">
            <FaCode className="text-4xl mt-4 ml-4  md:ml-8  text-mainBlue" />
          </div>
          <div className="basis-5/6">
            <h3 className="text-xl py-4 font-bold">
              Web and Mobile App Development
            </h3>
            <p className="text-base">
              {"This is time your business needs online presence. If you don't, the world will run ahead of you. You can work online, sell, advertise, and reach the whole world with the solution we provide. That includes websites, mobile applications, in different categories."}
            </p>
          </div>
        </article>
        <article className="flex">
          <div className="basis-1/6 p-2">
            <SiAdobeaftereffects className="text-4xl mt-4 ml-4  md:ml-8  text-mainBlue" />
          </div>
          <div className="basis-5/6 ">
            <h3 className="text-xl py-4 font-bold">Best Graphic Design</h3>
            <p>
              {"A good design explains itself. People will remember how you made them feel. And feeling does not just come from the usage of a product, but also from how it looks. If you want people to love your products in and out, reach out to us. We offer best flyer designs, logo designs, advertsments designs, and many more."}
            </p>
          </div>
        </article>
        <article className="flex">
          <div className="basis-1/6 p-2">
            <SiMarketo className="text-4xl mt-4 ml-4 md:ml-8  text-mainBlue" />
          </div>
          <div className="basis-5/6">
            <h3 className="text-xl py-4 font-bold">Digital Marketing</h3>
            <p>
              {"Clients you get, are not clients you asked for. Do you know why? Maybe you do, but you don't have enough time to apply best practices you need. We are going to take all the load for you and help you reach the right customers in the right time and in the large quantity."}
            </p>
          </div>
        </article>
        <article className="flex">
          <div className="basis-1/6 p-2">
            <SiTrainerroad className="text-4xl mt-4 ml-4 md:ml-8  text-mainBlue" />
          </div>
          <div className="basis-5/6">
            <h3 className="text-xl py-4 font-bold">Staff ICT training</h3>
            <p>
              {"Everyone has right to understand technology. So have you thought about your staff? Your kids? Your students? Maybe not. But let me tell you. People who understand technology, are going to boost your productivity by 30% because technology does not only help in doing a good job, but also helps doing it very fast."}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
