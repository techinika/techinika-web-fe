"use client";

import Image from "next/image";
import React from "react";

function Partners() {
  const partners = [
    {
      id: 2,
      name: "PieceX",
      logo: "/piecex.png",
      website: "https://www.piecex.com?affiliate=688",
    },
    {
      id: 4,
      name: "Ganza Nation",
      logo: "/ganzanation.png",
      website: "https://www.instagram.com/ganza_nation/",
    },
    {
      id: 6,
      name: "Green Home Group",
      logo: "/greenhomegroup.jpeg",
      website: "https://greenhomegroup.rw/",
    },
    {
      id: 7,
      name: "Rwanda ICT Chamber",
      logo: "/ictchamber.jpeg",
      website: "https://ictchamber.rw/",
    },
    {
      id: 8,
      name: "She Can Code School",
      logo: "/shecancode.png",
      website: "https://www.shecancodeschool.org/",
    },
    {
      id: 9,
      name: "ICP Rwanda",
      logo: "/icp.png",
      website: "https://x.com/icp_Rwanda_",
    },
    {
      id: 10,
      name: "HackNoel",
      logo: "/youthcode.png",
      website: "https://www.youthcodecamp.live/",
    },
    {
      id: 11,
      name: "HangaPitchFest",
      logo: "/hanga.png",
      website: "https://www.hangapitchfest.rw/",
    },
    {
      id: 12,
      name: "Sherrie Silver Foundation",
      logo: "/sherrie.jpg",
      website: "https://www.sherriesilverfoundation.org/",
    },
    {
      id: 13,
      name: "YALI Rwanda Chapter",
      logo: "/yali.png",
      website: "https://yalirwandachapter.org/",
    },
    {
      id: 14,
      name: "BICE Mechatrotech Ltd",
      logo: "/bice.png",
      website: "#",
    },
    {
      id: 15,
      name: "National Cyber Security Authority",
      logo: "/ncsa.png",
      website: "https://cyber.gov.rw/home/",
    },
  ];

  return (
    <div className="md:w-[60%] mx-auto py-10">
      <h2 className="font-bold text-center text-main-blue text-4xl mb-6">
        Brands we work with
      </h2>
      <div className="relative overflow-hidden group">
        <ul className="flex animate-infinite-scroll space-x-16 group-hover:pause">
          {[...partners, ...partners].map((partner, index) => (
            <li key={`${partner.id}-${index}`} className="flex items-center">
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                title={partner.name}
              >
                <Image
                  title={partner.name}
                  className="w-auto h-10 object-contain transition-transform duration-300 hover:scale-110"
                  src={partner.logo}
                  alt={partner.name}
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 170px"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Partners;
