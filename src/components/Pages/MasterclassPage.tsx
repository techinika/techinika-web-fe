"use client";

import Nav from "../HeadFoot/Nav";
import Footer from "../HeadFoot/Footer";
import Partners from "../Parts/Partners";
import Link from "next/link";
import { HeadTitle } from "../HeadFoot/HeadTitle";

export default function Masterclass() {
  const today = new Date();

  const determineStatus = (startDate: string, endDate?: string) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : null;

    if (end && today > end) return "ENDED";
    if (today >= start && (!end || today <= end)) return "IN PROGRESS";
    if (today < start) return "UPCOMING";
    return "UNKNOWN";
  };

  const masterclasses = [
    {
      id: 1,
      title: "WordPress Masterclass",
      sessions: [
        { startDate: "2024-12-23", endDate: "2025-01-03" },
        { startDate: "2025-01-20", endDate: "2025-01-31" },
      ],
    },
    {
      id: 2,
      title: "SolidWorks Masterclass",
      sessions: [{ startDate: "2025-02-17", endDate: "2025-03-17" }],
    },
    {
      id: 3,
      title: "Coding for Beginners",
      sessions: [],
    },
    {
      id: 4,
      title: "UI/UX for Beginners with Figma",
      sessions: [{ startDate: "2024-10-19", endDate: "2024-10-19" }],
    },
  ];

  return (
    <div className="relative h-screen">
      <div className="font-main">
        <Nav />
      </div>
      <div className="bg-white mt-24 mx-auto">
        <div className="bg-white font-main mx-auto mt-24">
          <div className="bg-gray-50">
            <HeadTitle
              title={`MASTERCLASS PROGRAM`}
              tagline={
                "Equipping you with skills that unlocks new opportunities"
              }
            />
          </div>
          <div className="md:w-[60%] lg:w-[50%] sm:w-[90%] mx-auto text-xl py-4 p-2">
            <br></br>

            <h2 className="card-title">Description,</h2>
            <p>{`Our Masterclass Program is designed to empower individuals and teams with practical, industry-relevant skills to unlock new opportunities, increase their income, and bring their ideas to life. Each session focuses on a specific skill or topic, offering hands-on training led by experienced professionals.`}</p>
            <br></br>
            <p>{`Whether you want to enhance your career, start a project, or build your own business, our masterclasses provide the tools, knowledge, and confidence you need to succeed. Join us and take the next step toward achieving your goals!`}</p>

            <br></br>
            <h2 className="card-title">Masterclass Sessions,</h2>
            <br></br>
            {masterclasses.map((mclass) => (
              <div key={mclass.id} className="mb-6">
                <h3 className="text-lg font-bold text-main-blue">
                  {mclass.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  {mclass.sessions.map((session, index) => {
                    const status = determineStatus(
                      session.startDate,
                      session.endDate
                    );
                    return (
                      <div
                        key={index}
                        className="card border border-gray-200 shadow-md p-4 rounded-lg"
                      >
                        <p className="text-sm text-gray-600">
                          <strong>Start:</strong>{" "}
                          {new Date(session.startDate).toDateString()}
                        </p>
                        {session.endDate && (
                          <p className="text-sm text-gray-600">
                            <strong>End:</strong>{" "}
                            {new Date(session.endDate).toDateString()}
                          </p>
                        )}
                        <span
                          className={`status-badge inline-block mt-2 px-3 py-1 text-sm rounded-full ${
                            status === "UPCOMING"
                              ? "bg-green-100 text-green-700"
                              : status === "IN PROGRESS"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {status}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
            <br></br>

            <p className="italic font-bold text-main-blue">
              For more information and registration:
            </p>
            <br></br>
            <p>
              Contact us on email{" "}
              <b>
                <Link href={"mailto:info@techinika.com"} className="underline">
                  info@techinika.com
                </Link>
              </b>{" "}
              or send a text message or WhatsApp message on our phone number
              +250780630465.
            </p>
            <br></br>
          </div>
        </div>
        <Partners />
        <Footer />
      </div>
    </div>
  );
}
