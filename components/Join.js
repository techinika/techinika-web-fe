import Link from "next/link";

export const JoinUs = () => {
  return (
    <>
      <div
        className="w-full flex flex-row justify-center items-center"
        id="join"
      >
        {/* <div className="flex-1 md:py-10 bg-blue-800">
          <div className="md:w-10/12 ml-auto p-10 md:p-24">
            <h2 className="title">Careers</h2>
            <p className="text-white py-4">
              We are a team of highly motivated individuals working to create
              the country where Rwandans are able to use technology equipments
              available for them.
            </p>
            <div className="my-4">
              <Link href="/careers">
                <p className="btn btn-yellow text-center">Apply Now</p>
              </Link>
            </div>
          </div>
        </div> */}
        <div className="flex-1 md:p-10 bg-mainBlue text-center flex items-center justify-center">
          <div className="md:w-6/12 p-10 md:p-24">
            <h2 className="title">Wondering if we're right for you?</h2>
            <p className="text-white py-4">
              Let's talk and explore the possibilities.
            </p>
            <div className="my-4 flex items-center justify-center">
              <Link href="https://calendly.com/techinika/work" target="_blank">
                <p className="btn btn-white text-center">Get Started</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
