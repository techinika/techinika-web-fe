
const About = () => {
  return (
    <div className="bg-mainBlue text-white" id="our-story">
    <section className="p-8 md:w-10/12 mx-auto py-10">
      <div>
        <h1 className="font-bold text-4xl my-4">Who are we?</h1>
        <p className="text-xl">{"In June 2020, that's when we started. Then, we were called NIGUTE. Some people might remember that, we had just a blog, and we still have it. Our goals have never changed, out vision is still the same. People used to ask, 'is this a business?'and our answer is YES. But we like to consider ourselves as something more than just a business. We are a business that care about the world and people."}</p>
      </div>
      <div className="flex flex-row mt-4 gap-4 items-start justify-between text-center w-11/12 mx-auto flex-wrap">
        <article className="flex-1 rounded-md shadow-2xl bg-white text-mainBlue">
            <h3 className="text-xl font-bold p-4">
              Mission
            </h3>
            <hr></hr>
            <p className="p-4">
              {"Techinika's Mission is to make changes in the development of Africa through technology by putting our hands on developing and providing skills in technology and business as Africa is growing fast in tech. Especialy in Rwanda, we want to make Made In Rwanda grow to the highest level with, and in technology. We believe that 'with technology, businesses grow much faster'."}
            </p>
        </article>
        <article className="flex-1 rounded-md shadow-2xl bg-white text-mainBlue">
            <h3 className="text-xl font-bold p-4">
              Vision
            </h3>
            <hr></hr>
            <p className="p-4">
              {"We have a vision of making African Network Group(Afrinet) a strong Tech company with different venture is many other businesses in Africa even World wide. The Afrinet will be the most loved and capable IT company in Rwanda. Our member will grow leadership capacity in business, Afrinet will be best place for people who want learn technology or want to welcome technology in their business or in their daily life."}
            </p>
        </article>
        <article className="flex-1 rounded-md shadow-2xl bg-white text-mainBlue">
            <h3 className="text-xl font-bold p-4">
              Core values
            </h3>
            <hr></hr>
            <p className="p-4">
              {"We want to change the way people used to take Africans in time context, so our very first core value is giving timely service, which satsfies the needs of customer. we work with honest as our pillar, hard work makes us perfect in what we do. team working is the key to our success and communication is the only way to achieve that. so, - Timely service - honest - hardwork -team work and communication are our core values."}
            </p>
        </article>
      </div>
    </section>
    </div>
  );
}

export default About   