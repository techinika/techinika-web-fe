import Image from "next/image";
import Link from "next/link";

export const Programmes = () => {
  return (
    <>
      <div className="bg-gray-50 bg-no-repeat bg-cover py-4">
        <div className="md:w-10/12 xs:w-full mx-auto p-4 md:p-8">
          <p className="text-mainBlue font-bold text-center">
            Our Products & Services
          </p>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 justify-center items-stretch mx-auto mt-8 md:w-11/12 gap-4 sm:grid-cols-3 xs:grid-cols-3">
            <Link href="https://techinika.com" target="_blank">
              <div className="card">
                <Image src="/learning.png" width={200} height={40} />
                <p>
                  Our online learning platform for students and business
                  employees.
                </p>
              </div>
            </Link>
            <Link href="/masterclass">
              <div className="card">
                <Image src="/masterclass.png" width={200} height={40} />
                <p>
                  Monthly training with technical skills in designing,
                  programming and data.
                </p>
              </div>
            </Link>
            <Link href="https://nas.io/tech-rw" target="_blank">
              <div className="card">
                <Image
                  src="/RWANDA TECHNOLOGY COMMUNITY LOGO.png"
                  width={200}
                  height={40}
                />
                <p>
                  We are building the most active and useful tech community in
                  Rwanda.
                </p>
              </div>
            </Link>
            <Link href="/request">
              <div className="card">
                <Image src="/consultancy.png" width={200} height={40} />
                <p>
                  We help your business determine right tools for the job, or
                  build them for you.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
