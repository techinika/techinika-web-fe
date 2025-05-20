"use client";

import Image from "next/image";
import Link from "next/link";

export const Programmes = () => {
  return (
    <div className="bg-gray-50 bg-no-repeat bg-cover py-4">
      <div className="md:w-10/12 xs:w-full mx-auto p-4 md:p-8">
        <p className="text-main-blue font-bold text-center">
          Our Products & Services
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 items-start justify-center mx-auto mt-8 md:w-11/12 gap-4 sm:grid-cols-3 xs:grid-cols-3">
          <Link href="https://apprena.app" target="_blank">
            <div className="card">
              <Image alt="Apprena" src="/apprena.png" width={200} height={40} />
              <p>
                <b>-Pending launch-</b> Operating system for education
                institutions and a source of rich education.
              </p>
            </div>
          </Link>
          <Link href="https://techinika.com" target="_blank">
            <div className="card">
              <Image
                alt="Techinika.com"
                src="/original.png"
                width={200}
                height={40}
              />
              <p>
                <b>-Original-</b> Publication platform with a purpose of helping
                people do it themselves.
              </p>
            </div>
          </Link>
          <Link href="/masterclass">
            <div className="card">
              <Image
                alt="Techinika Learning"
                src="/masterclass.png"
                width={200}
                height={40}
              />
              <p>
                <b>-For B2C & B2B-</b> A highly customized training program to
                help you stay competitive on a job market.
              </p>
            </div>
          </Link>
          <Link href="/community">
            <div className="card">
              <Image
                alt="Rwanda Technology Community"
                src="/community.png"
                width={200}
                height={40}
              />
              <p>
                <b>-Non-Profit-</b> We are building a community to ignite
                talents to learn and support them as they build.
              </p>
            </div>
          </Link>
          <Link href="/consultancy">
            <div className="card">
              <Image
                alt="Technology Consultation"
                src="/consultancy.png"
                width={200}
                height={40}
              />
              <p>
                <b>-For Businesses-</b> We help your business determine right
                tools for the job, or build them for you.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
