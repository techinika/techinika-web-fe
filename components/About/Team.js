import Image from "next/image";
import Francois from "../../public/team/Francois.jpg";
import Achille from "../../public/team/songa achille c.jpg";
import Ganza from "../../public/team/ganza.jpg";
import g from "../../public/team/Gustave.jpg"
import robert from "../../public/team/robert.png"

export const Team = () => {
  return (
    <div className="md:w-9/12 mx-auto">
      <h2 className="card-title text-center">Meet our team</h2>
      <div className="team-row">
        <div className="team-card">
          <div className="team-image-div">
            <Image src={Achille} className="team-image" layout="fill" />
            <div className="image-placeholder"></div>
          </div>
          <div className="p-5 text-center">
            <h3 className="team-name">Cishahayo Songa Achille</h3>
            <p>Founder & Software Developer</p>
          </div>
        </div>
        <div className="team-card">
          <div className="team-image-div">
            <Image src={Francois} className="team-image" layout="fill" />
            <div className="image-placeholder"></div>
          </div>
          <div className="p-5 text-center">
            <h3 className="team-name">Usanase Aime Francois</h3>
            <p>Events & Programs Coordinator</p>
          </div>
        </div>
        <div className="team-card">
          <div className="team-image-div">
            <Image src={Ganza} className="team-image" layout="fill" />
            <div className="image-placeholder"></div>
          </div>
          <div className="p-5 text-center">
            <h3 className="team-name">Ganza Kelvin Valentin</h3>
            <p>Graphic Designer</p>
          </div>
        </div>
        <div className="team-card">
          <div className="team-image-div">
            <Image src={g} className="team-image" layout="fill" />
            <div className="image-placeholder"></div>
          </div>
          <div className="p-5 text-center">
            <h3 className="team-name">Gustave</h3>
            <p>Content creator</p>
          </div>
        </div>
        <div className="team-card">
          <div className="team-image-div">
            <Image src={robert} className="team-image" layout="fill" />
            <div className="image-placeholder"></div>
          </div>
          <div className="p-5 text-center">
            <h3 className="team-name">Robert Niyitanga</h3>
            <p>Web Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};
