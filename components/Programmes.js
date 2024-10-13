import Image from "next/image";
import Link from "next/link";

export const Programmes = () => {
  return (
    <>
      <div className="bg-gray-50 bg-no-repeat bg-cover py-4">
        <div className="md:w-10/12 xs:w-full mx-auto p-4 md:p-8">
          <p className="text-mainBlue font-bold text-center">Our Products:</p>
          <div className="grid grid-cols-4 justify-center items-stretch mx-auto mt-8 md:w-11/12 gap-4 sm:grid-cols-2 xs: grid-cols-1">
            <Link href="https://techinika.com" target="_blank">
              <div className="card">
                <Image src="/learning.png" width={200} height={40} />
              </div>
            </Link>
            <Link
              href="https://www.linkedin.com/showcase/rwanda-technology-community/"
              target="_blank"
            >
              <div className="card">
                <Image
                  src="/RWANDA TECHNOLOGY COMMUNITY LOGO.png"
                  width={200}
                  height={40}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
