
const About = () => {

  const pillars = [
    {
      id: 1,
      title: "Mission",
      desription: "Techinika's Mission is to make changes in the development of Africa through technology by putting our hands on developing and providing skills in technology and business as Africa is growing fast in tech. Especialy in Rwanda, we want to make Made In Rwanda grow to the highest level with, and in technology. We believe that 'with technology, businesses grow much faster'."
    },
    {
      id: 2,
      title: "Vision",
      desription: "Techinika's Mission is to make changes in the development of Africa through technology by putting our hands on developing and providing skills in technology and business as Africa is growing fast in tech. Especialy in Rwanda, we want to make Made In Rwanda grow to the highest level with, and in technology. We believe that 'with technology, businesses grow much faster'."
    },
  ]

  return (
    <div className="bg-mainBlue text-white" id="our-story">
    <section className="p-8 md:w-10/12 mx-auto py-10">
      <div>
        <h1 className="font-bold text-4xl my-4">Who are we?</h1>
        <p>{"In June 2020, that's when we started. Then, we were called NIGUTE. Some people might remember that, we had just a blog, and we still have it. Our goals have never changed, out vision is still the same. People used to ask, 'is this a business?'and our answer is YES. But we like to consider ourselves as something more than just a business. We are a business that care about the world and people."}</p>
      </div>
      <div className="flex flex-row mt-4 gap-4 items-start justify-between text-center w-11/12 mx-auto flex-wrap">
        {
          pillars.map(pillar => (
            <article key={pillar.id} className="flex-1 rounded-sm shadow-2xl bg-white text-mainBlue">
              <h3 className="text-xl font-bold p-4">{pillar.title}</h3>
              <hr></hr>
              <p className="p-4 card-body">{pillar.desription}</p>
            </article>
          ))
        }
      </div>
    </section>
    </div>
  );
}

export default About   