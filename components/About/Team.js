import Image from "next/image";
import Francois from "../../public/team/Francois.jpg";
import Achille from "../../public/team/songa achille c.jpg";
import Ganza from "../../public/team/ganza.jpg";
import Gustave from "../../public/team/Gustave.jpg";
import robert from "../../public/team/robert.png";

export const Team = () => {
  const teamMembers = [
    {
      name: "Cishahayo Songa Achille",
      role: "Founder & Software Developer",
      image: Achille,
    },
    {
      name: "Ganza Kelvin Valentin",
      role: "Graphic Designer",
      image: Ganza,
    },
    {
      name: "Gustave",
      role: "Content creator",
      image: Gustave,
    },
    {
      name: "Robert Niyitanga",
      role: "Web Developer",
      image: robert,
    },
  ];

  const TeamMember = ({ name, role, image }) => (
    <div className="team-card">
      <div className="team-image-div">
        <Image src={image} className="team-image" layout="fill" />
        <div className="image-placeholder"></div>
      </div>
      <div className="p-5 text-center">
        <h3 className="team-name">{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  );

  return (
    <div className="p-4 md:p-0 md:w-9/12 mx-auto">
      <h2 className="card-title text-center">Meet our team</h2>
      <div className="team-row">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
