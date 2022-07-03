import Image from 'next/image';
import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import picAchile from '../public/Achile.png'
import lucette from '../public/lucette.jpeg'
import cedric from '../public/cedric.jpg'

const Team = () => {

  const teamMembers = [
    {
      id: 1,
      name: "Cishahayo Songa Achille",
      role: "Managing Director",
      image: picAchile,
      facebook: "https://facebook.com/songa.achille.9",
      instagram: "https://instagram.com/achille_songa",
      linkedin: "https://linkedin.com/in/achillesonga",
      twitter: "https://twitter.com/achille_songa"
    },
    {
      id: 2,
      name: "Kabalira Lucette Sarah",
      role: "Communications Director",
      image: lucette,
      facebook: "https://facebook.com/songa.achille.9",
      instagram: "https://instagram.com/achille_songa",
      linkedin: "https://linkedin.com/in/achillesonga",
      twitter: "https://twitter.com/achille_songa"
    },
    {
      id: 3,
      name: "Irakoze Mugisha Cedric",
      role: "Program Director",
      image: cedric,
      facebook: "https://facebook.com/songa.achille.9",
      instagram: "https://instagram.com/achille_songa",
      linkedin: "https://linkedin.com/in/achillesonga",
      twitter: "https://twitter.com/achille_songa"
    },
    {
      id: 4,
      name: "Ganza Kelvin Valentin",
      role: "Creative and Arts Director",
      image: picAchile,
      facebook: "https://facebook.com/songa.achille.9",
      instagram: "https://instagram.com/achille_songa",
      linkedin: "https://linkedin.com/in/achillesonga",
      twitter: "https://twitter.com/achille_songa"
    },
    {
      id: 5,
      name: "Niyitanga Robert",
      role: "Software Engineer",
      image: picAchile,
      facebook: "https://facebook.com/songa.achille.9",
      instagram: "https://instagram.com/achille_songa",
      linkedin: "https://linkedin.com/in/achillesonga",
      twitter: "https://twitter.com/achille_songa"
    },
  ]

  return (
    <div className="p-8 bg-mainBg flex flex-col items-center mx-auto">
      <div className='items-center md:w-10/12'>
        <h1 className="text-mainBlue font-bold text-4xl my-4">Leading Team</h1>
        <p>
          {"We are a young, dynamic and innovative team. We care about every employee's continued growth."}
        </p>
      </div>
      <div className="grid grid-cols-1 my-8 w-4/4 md:w-10/12 items-center justify-items-center md:grid-cols-4 gap-2  md:gap-2">
        {teamMembers ? teamMembers.map(t=> (
          <div className="bg-white shadow-md rounded-sm flex flex-col w-96 md:w-64" key={t.id}>
            <div className="mg:h-32 h-60 relative w-full">
              <Image src={t.image} alt={t.name} className='object-cover object-top absolute' width="200" layout="fill"/>
            </div>
            <div className="p-4 text-center w-full">
              <h4 className="font-bold text-base">{t.name}</h4>
              <p className='text-mainBlue'>{t.role}</p>
              <div className='flex flex-row flex-wrap gap-4 justify-between p-4 text-mainBlue'>
                <Link href={t.facebook} className="hover:bg-blue-900">
                  <a className='' target="_blank"><FaFacebook/></a>
                </Link>
                <Link href={t.instagram} className="hover:bg-blue-900">
                  <a className='' target="_blank"><FaInstagram/></a>
                </Link>
                <Link href={t.linkedin} className="hover:bg-blue-900">
                  <a className='' target="_blank"><FaLinkedin/></a>
                </Link>
                <Link href={t.twitter} className="hover:bg-blue-900">
                  <a className='' target="_blank"><FaTwitter/></a>
                </Link>
              </div>
            </div>
          </div>
        )) : <p>No team</p>}
      </div>
    </div>
  );
}

export default Team