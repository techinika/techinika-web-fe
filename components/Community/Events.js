import Image from "next/image";
import consulting from "../../public/consulting.png";
import workshops from "../../public/workshops.png";
import Link from "next/link";
import { useState } from "react";

export const Events = () => {
  const [moreWorkshops, setMoreWorkshops] = useState(false);
  const [moreDiscourse, setMoreDiscourse] = useState(false);
  return (
    <>
      <div className="w-9/12 mx-auto mb-5 mt-3">
        <h2 className="big-title">Some community activities!</h2>
        <div className="my-3">
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
              <h2 className="card-title">Digital Discourse Podcast</h2>
              <p className={`card-body ${
                  !moreDiscourse && "h-32 overflow-hidden"
                }`}>
                {`A conversation with you and technology. It has a purpose of bringing together our community and people who are either in technology industry or want to join technology industry and update them on what is happening today and what it means.`}
                <br></br>
                {`Over time, we will contributing to our country by raising this community of individuals who are well informed on what is happening in technology space and how it affects their lives, their occupations and their businesses.`}
              </p>
              {!moreDiscourse ? (
                <button
                  className="text-button"
                  onClick={() => setMoreDiscourse(true)}
                >
                  Show more
                </button>
              ) : (
                <button
                  className="text-button"
                  onClick={() => setMoreDiscourse(false)}
                >
                  Show less
                </button>
              )}
              <div className="btn-group">
                <Link href="https://youtube.com/@techinika">
                  <a className="btn-main" target="_blank">
                    Check out
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="my-3">
          <div className="h-card">
            <div className="image-hold hidden md:block">
              <Image
                src={workshops}
                height={300}
                width={300}
                className="card-image"
              />
            </div>
            <div className="h-card-body">
              <h2 className="card-title">Information Workshops</h2>
              <p
                className={`card-body ${
                  !moreWorkshops && "h-32 overflow-hidden"
                }`}
              >
                {`Our workshop aims to bridge the gap between technology and the wider community. We embark on a journey to schools, villages, and companies, spreading awareness about the latest advancements and emerging technologies. Through interactive sessions, we educate and empower individuals, providing insights into how technology will shape their lives, careers, and businesses.`}
                <br></br>
                {`Join us as we embark on a mission to educate and inspire. Our workshop series brings the world of technology to your doorstep, visiting schools, villages, and companies. Through engaging presentations and hands-on activities, we demystify emerging technologies, fostering a deeper understanding of their impact and empowering individuals to embrace the opportunities they bring. Prepare for a transformative experience that will shape the future of your community.`}
              </p>
              {!moreWorkshops ? (
                <button
                  className="text-button"
                  onClick={() => setMoreWorkshops(true)}
                >
                  Show more
                </button>
              ) : (
                <button
                  className="text-button"
                  onClick={() => setMoreWorkshops(false)}
                >
                  Show less
                </button>
              )}
              <div className="btn-group">
                <Link href="https://youtube.com/@techinika">
                  <a className="btn-main" target="_blank">
                    Calendar
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
