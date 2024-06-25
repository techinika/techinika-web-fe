const Services = () => {
  return (
    <div className="bg-gray-100 text-justify py-10">
      <h2 className="font-bold text-md p-5 text-center text-mainBlue text-4xl">
        This is How we Help
      </h2>
      <section className="md:w-10/12 text-center mx-auto grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-3 bg-gray-100">
        <div className="items-center  flex flex-col p-10">
          {/* <div className="h-30 border border-gray-100">
            <img src="/consulting.png" className="w-full object-cover" />
          </div> */}
          <div className="flex flex-col justify-center items-center">
            <h1 className="big-title">Organizations!</h1>
            <p>
              We fulfill upskilling needs of your organization! We offer
              trainings in digital skills to your team, beneficiaries, your
              clients! We have a software that you can also use to carry out
              training online, onboard trainees, and trainers and also be able
              to sell training as a subscription.
            </p>
          </div>
        </div>
        <div className="items-center  flex flex-col p-10">
          {/* <div className="h-30 border border-gray-100">
            <img src="/achools.png" className="w-full object-cover" />
          </div> */}
          <div className="flex flex-col justify-center items-center">
            <h1 className="big-title">Schools!</h1>
            <p>
              We help you digitize your schools operations, through HP
              Classeasy, a comprehensive Learning Management System with super
              abilities to manage multiple departments of your school. We also
              help you drive innovation and creativity in your students through
              our community, Rwanda Technology Community!
            </p>
          </div>
        </div>
        <div className="items-center  flex flex-col p-10">
          {/* <div className="h-30 border border-gray-100">
            <img src="/individuals.png" className=" w-full object-cover border border-gray-100" />
          </div> */}
          <div className="flex flex-col justify-center items-center">
            <h1 className="big-title">Individuals!</h1>
            <p>
              We offer you private and fully customized training that gives you
              employable skills in software development, digital marketing, and
              basic computer literacy skills.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
