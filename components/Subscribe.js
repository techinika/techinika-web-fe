export const Subscribe = () => {
  return (
    <>
      <div className="bg-bg p-10">
        <div className="bg-white p-10 w-full md:w-8/12 m-auto text-center rounded-lg shadow-md">
          <h2 className="card-title w-full text-center">
            Subscribe to our newsletter.
          </h2>
          <p>
            Be exclusive in getting our new courses, products, events, and
            services right into your inbox.
          </p>
          <form className="form flex flex-wrap">
            <input
              type="text"
              placeholder="Enter your name"
              className="input flex-1"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="input flex-1"
            />
            <input type="submit" value="Submit" className="btn btn-yellow" />
          </form>
        </div>
      </div>
    </>
  );
};
