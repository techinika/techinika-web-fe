import React from "react";

function Partners() {
  const partners = [
    {
      id: 1,
      name: "Classera",
      logo: "/Classera-Logo.png",
      website: "https://classera.com/",
    },
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
      website: "https://ganzanation.com/",
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
  ];
  return (
    <div className="md:w-[60%] mx-auto py-10">
      <h2 className="font-bold text-md p-5 text-center text-mainBlue text-4xl">
        Brands we work with
      </h2>
      <div className="p-10 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {partners &&
            partners.map((partner) => {
              return (
                <a target="_blank" href={partner?.website}>
                  <li>
                    <img
                      title={partner?.name}
                      className="h-8"
                      src={partner?.logo}
                      alt={partner?.name}
                    />
                  </li>
                </a>
              );
            })}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {partners &&
            partners.map((partner) => {
              return (
                <a target="_blank" href={partner?.website}>
                  <li>
                    <img
                      className="h-8"
                      title={partner?.name}
                      src={partner?.logo}
                      alt={partner?.name}
                    />
                  </li>
                </a>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Partners;
