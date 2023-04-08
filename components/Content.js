
const Content = (props) => {
  return (
    <div className="mx-auto bg-mainBlue">
      <main className="text-white m-auto w-10/12 h-screen items-center justify-center flex flex-col gap-3">
        <div className="text-center">
          <p className="text-2xl">Hi <i>there!</i></p>
          <p className="text-7xl">Welcome to,</p>
          <p className="text-7xl font-bold">Techinika.</p>
        </div>
        <p>Skills for the future, Solutions to boost your productivity.</p>
        <div className="mt-3 flex flex-row flex-wrap gap-5">
          <button className="btn-yellow">Let's help you!</button>
          <button className="btn-white">Join us!</button>
        </div>
      </main>
    </div>
  );
};

export default Content;
