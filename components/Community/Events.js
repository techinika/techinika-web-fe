import Image from "next/image";
import consulting from "../../public/consulting.png";
import Link from "next/link";

export const Events = () => {
  return (
    <>
      <div className="w-9/12 mx-auto mb-5 mt-3">
        <h2 className="big-title">Some community activities!</h2>
        <div>
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
              <p className="card-body">
                {`A conversation with you and technology. It has a purpose of bringing together our community and people who are either in technology industry or want to join technology industry and update them on what is happening today and what it means.`}
                <br></br>
                {`Over time, we will contributing to our country by raising this community of individuals who are well informed on what is happening in technology space and how it affects their lives, their occupations and their businesses.`}
              </p>
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
      </div>
    </>
  );
};
