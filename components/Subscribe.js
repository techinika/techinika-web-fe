export const Subscribe = () => {
  const subscribe = async (e) => {
    e.preventDefault();

    setState(1);
    seterrorMsg("");
    console.log(e.target[0].value);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        body: e.target[0].value,
      });

      const data = await res.json();
      if (data.error !== null) {
        throw data.error;
      }
      setState(2);
    } catch (e) {
      seterrorMsg(e);
      setState(3);
    }
  };
  return (
    <>
      <div className="bg-bg p-10">
        <div className="bg-white p-10 w-full md:w-6/12 m-auto text-center rounded-lg shadow-md">
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
              className="input"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="input"
            />
            <input type="submit" value="Submit" className="btn btn-yellow" />
          </form>
        </div>
      </div>
    </>
  );
};
