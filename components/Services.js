import Image from "next/image";
import community from "../public/community.png";
import learning from "../public/learning.png";
import consulting from "../public/consulting.png";
import Link from "next/link";

const Services = () => {
  return (
    <section className="py-20 w-9/12 mx-auto">
      <div>
        <h1 className="big-title">Explore how we can help you!</h1>
      </div>

      <div className="flex flex-col gap-5 my-5">
        <div className="h-card">
          <div className="image-hold hidden md:block">
            <Image
              src={learning}
              height={300}
              width={500}
              className="card-image"
            />
          </div>
          <div className="h-card-body">
            <h2 className="card-title">Learn from our contents</h2>
            <p className="card-body">
              {
                "If you want to become irreplaceable at your job, gain modern skills to make you competitive at the market, become job-ready with our institute of education."
              }
            </p>
            <Link href="/">
              <a className="btn-main">Start Today</a>
            </Link>
          </div>
        </div>
        <div className="h-card">
          <div className="h-card-body">
            <h2 className="card-title">Join our community</h2>
            <p className="card-body">
              {
                "If you want to become irreplaceable at your job, gain modern skills to make you competitive at the market, become job-ready with our institute of education."
              }
            </p>
            <Link href="/">
              <a className="btn-main">Join Today</a>
            </Link>
          </div>
          <div className="image-hold hidden md:block">
            <Image
              src={community}
              height={300}
              width={300}
              className="card-image"
            />
          </div>
        </div>
        <div className="h-card">
          <div className="image-hold hidden md:block">
            <Image
              src={consulting}
              height={300}
              width={300}
              className="card-image"
            />
          </div>
          <div className="h-card-body">
            <h2 className="card-title">Consult with professionals</h2>
            <p className="card-body">
              {
                "If you want to become irreplaceable at your job, gain modern skills to make you competitive at the market, become job-ready with our institute of education."
              }
            </p>
            <div className="btn-group">
              <Link href="https://youtube.com/@techinika">
                <a className="btn-main" target="_blank">
                  Book appointment
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
