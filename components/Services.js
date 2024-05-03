const Services = () => {
  return (
    <section className="py-20 w-full">
      <div className="bg-gray-100">
        <div className="grid grid-cols-2 w-[80%] mx-auto">
          <div>
            <img src="/consulting.png" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="big-title">For Organizations!</h1>
            <p>
              We fulfill upskilling needs of your organization! We offer
              trainings in digital skills to your team, beneficiaries, your
              clients, and a fully customizable software in case you would like
              to do it yourself!
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 w-[80%] mx-auto">
          <div className="flex flex-col justify-center items-start">
            <h1 className="big-title">For Schools!</h1>
            <p>
              We help you digitize your schools operations, through HP
              Classeasy, a comprehensive Learning Management System with super
              abilities to manage multiple departments of your school. We also
              help you drive innovation and creativity in your students through
              our community, Rwanda Technology Community!
            </p>
          </div>
          <div>
            <img src="/consulting.png" />
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="grid grid-cols-2 w-[80%] mx-auto">
          <div>
            <img src="/consulting.png" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="big-title">For Individuals!</h1>
            <p>
              We offer you private and fully customized training that gives you
              employable skills in software development, digital marketing, and
              basic computer literacy skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
