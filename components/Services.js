import Image from "next/image";
import community from "../public/community.png";
import learning from "../public/learning.png";
import consulting from "../public/consulting.png";
import Link from "next/link";

const Services = () => {
  return (
    <section className="py-20 p-4 w-full md:w-9/12 mx-auto">
      <div>
        <h1 className="big-title">Explore Services!</h1>
      </div>

      <div className="flex flex-col gap-5 my-5">
        <div className="h-card">
          {/* <div className="image-hold hidden md:block flex items-center justify-center w-full"> */}
          <Image
            src="/workshops.png"
            height={300}
            width={200}
            className="card-image"
          />
          {/* </div> */}
          <div className="h-card-body">
            <h2 className="card-title">
              Corporate ICT Training and Consulting
            </h2>
            <p className="card-body">{"Did you know that your b"}</p>
            <Link href="/learning" className="btn-main">
              <p>BOOK TODAY</p>
            </Link>
          </div>
        </div>
        <div className="h-card">
          <div className="h-card-body">
            <h2 className="card-title">
              Individual Private & Customized Training
            </h2>
            <p className="card-body">
              {
                "We are creating a community of individuals who are well informed on what is happening in technology space and how it affects their lives, their occupations and their businesses. By joining us, you get access to our weekly conversation and meeting like minded people who inspire a change in you."
              }
            </p>
            <Link href="/community" className="btn-main">
              <p>Join Today</p>
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
            <h2 className="card-title">Software Development</h2>
            <p className="card-body">
              {
                "We know technology changes every day and there is a need for businesses to keep up with the changes that are happening. If they don't, their services or products might become obsolete or irrelevant. That is why we are committed to helping your business stay up to date and relevant on the market. Let us talk!"
              }
            </p>
            <div className="btn-group">
              <Link href="services" className="btn-main">
                <p>Learn more</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
