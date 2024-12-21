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
  ];

  return (
    <div className="md:w-[60%] mx-auto py-10">
      <h2 className="font-bold text-md p-5 text-center text-mainBlue text-4xl">
        Brands we work with
      </h2>
      <div className="relative overflow-hidden group">
        <ul className="flex animate-infinite-scroll group-hover:paused">
          {partners.map((partner, index) => (
            <a
              key={partner.id}
              target="_blank"
              href={partner.website}
              rel="noopener noreferrer"
            >
              <li className="mx-8">
                <img
                  title={partner.name}
                  className="h-10 object-contain transition-transform duration-300 hover:scale-110"
                  src={partner.logo}
                  alt={partner.name}
                />
              </li>
            </a>
          ))}
          {partners.map((partner, index) => (
            <a
              key={`duplicate-${partner.id}`}
              target="_blank"
              href={partner.website}
              rel="noopener noreferrer"
            >
              <li className="mx-8">
                <img
                  title={partner.name}
                  className="h-10 object-contain transition-transform duration-300 hover:scale-110"
                  src={partner.logo}
                  alt={partner.name}
                />
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Partners;
