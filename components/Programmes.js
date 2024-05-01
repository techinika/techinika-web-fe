import Image from "next/image";
import Link from "next/link";

export const Programmes = () => {
  return (
    <>
      <div className="bg-gray-50 bg-no-repeat bg-cover py-4">
        <div className="md:w-10/12 xs:w-full mx-auto text-white p-4 md:p-8">
          <p>Products you can get from us:</p>
          <div className="flex flex-wrap justify-center items-stretch mx-auto mt-8 md:w-11/12 gap-4">
            <div className="card">
              <Image src="/learning.png" width={200} height={40} />
            </div>
            <div className="card">
              <Image
                src="/RWANDA TECHNOLOGY COMMUNITY LOGO.png"
                width={200}
                height={40}
              />
            </div>
            <div className="card">
              <Image src="/HP-Classeasy-Logo.png" width={200} height={40} />
            </div>
            <div className="card">
              <Image src="/LeadXera-Logo.png" width={200} height={40} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

{
  /* <p>Official representative of:</p>
          <div className="flex items-center justify-around w-full gap-10">
            <div>
              <Image src="/HP-Classeasy-Logo.png" width={200} height={40} />
            </div>
            <div>
              <Image src="/LeadXera-Logo.png" width={200} height={40} />
            </div>
          </div> */
}
