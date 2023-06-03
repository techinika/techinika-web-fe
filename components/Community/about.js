export const AboutCommunity = () => {
  return (
    <>
      <div className="bg-no-repeat bg-cover py-4">
        <div className="md:w-10/12 xs:w-full mx-auto text-white p-8">
          <div className="flex flex-wrap justify-center items-start mx-auto mt-8 md:w-11/12 gap-4">
            <div className="card">
              <h2 className="card-title">What is Technology Community?</h2>
              <p className="card-body">
                {
                  "We are a vibrant hub where students and business professionals unite to explore the transformative power of technology. Join us to share knowledge, collaborate, and embark on a journey of continuous learning. Discover how technology shapes careers and businesses, while fostering connections with like-minded individuals. Together, we strive to unlock the potential of technology for personal and professional growth."
                }
              </p>
            </div>
            <div className="card">
              <h2 className="card-title">Why should you join us?</h2>
              <p className="card-body">
                {
                  "Join our vibrant community and embrace the transformative power of technology. Connect with students and business professionals, sharing knowledge and exploring its impact on careers and businesses. Network, collaborate, and stay ahead of industry trends. Unlock your potential, accelerate growth, and be part of an inspiring journey into the world of technology with us."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
