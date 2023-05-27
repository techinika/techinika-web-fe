
const Content = (props) => {
  return (
    <div className="mx-auto bg-mainBlue">
      <main className="text-white m-auto w-10/12 h-screen items-center text-center justify-center flex flex-col gap-3">
        <div className="text-center">
          <p className="text-2xl">Hi there!</p>
          <p className="text-7xl">Welcome to,</p>
          <p className="text-7xl font-bold">Techinika.</p>
        </div>
        <p className="md:w-1/2 md:text-xl md:text-gray-200">Our main objective is equip people with technology skills that are in demand and keeps them relevant with the most ever changing world of tech. We also provide technical and learning support and consultancy to businesses and individuals. </p>
        <div className="btn-group">
          <button className="btn-yellow">Let's help you!</button>
          <button className="btn-white">Join us!</button>
        </div>
      </main>
    </div>
  );
};

export default Content;
