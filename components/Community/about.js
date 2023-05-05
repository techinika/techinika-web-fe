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
                  "A technology community is a group of individuals who are very passionate about technology and are looking to use it to make their lives and world's lives better. They are constantly improving their skills, knowledge, network, and working on things that makes a difference."
                }
              </p>
            </div>
            <div className="card">
              <h2 className="card-title">Why should you join us?</h2>
              <p className="card-body">
                {
                  "You should join us if you love technology and believe that technology can be used to make the world a better place and you are willing to be a part of this journey. This community will provide the network and resources to make you a leader in the technology revolution. You will also be required to participate consistently. Do a favor to yourself and be a part of this."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
