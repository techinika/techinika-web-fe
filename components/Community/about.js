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
                  "A technology community is a group of individuals who are very passionate about technology and are looking to use it to make their lives and world's lives better. They are constantly improving their skills, knowledge, and working on things that makes a difference."
                }
              </p>
              <button className="btn-card">Read more!</button>
            </div>
            <div className="card">
              <h2 className="card-title">Why should you join us?</h2>
              <p className="card-body">
                {
                  "You should join us if you love technology and believe that technology can be used to make  "
                }
              </p>
              <button className="btn-card">Secure your job!</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
