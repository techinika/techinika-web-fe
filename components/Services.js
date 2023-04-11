import Image from "next/image";
import training from "../public/training.jpg";
import Link from "next/link";

const Services = () => {
  return (
    <section className="py-20 w-10/12 mx-auto">
      <div>
        <h1 className="big-title">Explore how we can help you!</h1>
      </div>

      <div className="flex flex-col gap-5 my-5">
        <div className="h-card">
          <div className="image-hold hidden md:block">
            <Image src={training} height={500}   layout="responsive" className="card-image"/>
          </div>
          <div className="h-card-body">
            <h2 className="card-title">Join our Institute of Technology</h2>
            <p className="card-body">{"If you want to become irreplaceable at your job, gain modern skills to make you competitive at the market, become job-ready with our institute of education."}</p>
            <Link href="/">
              <a className="btn-main">Apply Today</a>
            </Link>
          </div>
        </div>
        <div className="h-card">
          <div className="h-card-body">
            <h2 className="card-title">Attend our monthly workshops</h2>
            <p className="card-body">{"If you want to become irreplaceable at your job, gain modern skills to make you competitive at the market, become job-ready with our institute of education."}</p>
            <Link href="/">
              <a className="btn-main">RSVP Today</a>
            </Link>
          </div>
          <div className="image-hold hidden md:block">
            <Image src={training} layout="responsive" height={500} className="card-image"/>
          </div>
        </div>
        <div className="h-card">
          <div className="image-hold hidden md:block">
            <Image src={training} layout="responsive"  height={500} className="card-image"/>
          </div>
          <div className="h-card-body">
            <h2 className="card-title">Learn from our free contents</h2>
            <p className="card-body">{"If you want to become irreplaceable at your job, gain modern skills to make you competitive at the market, become job-ready with our institute of education."}</p>
            <div className="btn-group">
              <Link href="https://techinika.com/sobanukirwa">
                <a className="btn-yellow" target="_blank">Read articles</a>
              </Link>
              <Link href="https://youtube.com/@techinika">
                <a className="btn-main" target="_blank">Watch videos</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-card">
          <div className="h-card-body">
            <h2 className="card-title">Join our community</h2>
            <p className="card-body">{"If you want to become irreplaceable at your job, gain modern skills to make you competitive at the market, become job-ready with our institute of education."}</p>
            <Link href="https://whatsapp.techinika.com">
              <a className="btn-main" target="_blank">Join Now</a>
            </Link>
          </div>
          <div className="image-hold hidden md:block">
            <Image src={training} layout="responsive"  height={500} className="card-image"/>
          </div>
        </div>
        <div className="h-card">
          <div className="image-hold hidden md:block">
            <Image src={training} layout="responsive" height={500} className="card-image"/>
          </div>
          <div className="h-card-body">
            <h2 className="card-title">Get consultancy from professionals</h2>
            <p className="card-body">{"If you want to become irreplaceable at your job, gain modern skills to make you competitive at the market, become job-ready with our institute of education."}</p>
            <Link href="/">
              <a className="btn-main">Book appointment</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
