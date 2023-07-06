import Image from "next/image";
import community from "../public/community.png";
import learning from "../public/learning.png";
import consulting from "../public/consulting.png";
import Link from "next/link";

const Services = () => {
  return (
    <section className="py-20 p-4 w-full md:w-9/12 mx-auto">
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
            <h2 className="card-title">Learn from us</h2>
            <p className="card-body">
              {
                "Since 2020, we have been creating contents with only one purpose. We want to make you the tech savvy. You can learn from our articles, videos, and short form contents available on all of our platforms, or join our training programs. Contents are found in Kinyarwanda and English, and they are all free."
              }
            </p>
            <Link href="/learning">
              <a className="btn-main">Start Today</a>
            </Link>
          </div>
        </div>
        <div className="h-card">
          <div className="h-card-body">
            <h2 className="card-title">Join our community</h2>
            <p className="card-body">
              {
                "We are creating a community of individuals who are well informed on what is happening in technology space and how it affects their lives, their occupations and their businesses. By joining us, you get access to our weekly conversation and meeting like minded people who inspire a change in you."
              }
            </p>
            <Link href="/community">
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
                "We know technology changes every day and there is a need for businesses to keep up with the changes that are happening. If they don't, their services or products might become obsolete or irrelevant. That is why we are committed to helping your business stay up to date and relevant on the market. Let us talk!"
              }
            </p>
            <div className="btn-group">
              <Link href="services">
                <a className="btn-main">
                  Learn more
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
