import Image from 'next/image';
import React from 'react'
import picAchile from '../public/Achile.png'

const Team = () => {
  return (
    <div className="p-8 bg-mainBg">
      <div>
        <h1 className="text-mainBlue font-bold text-4xl my-4">Our Team</h1>
        <p className='w-1/2'>
          We are a young, dynamic and innovative team. We care about every
          employee's continued growth.
        </p>
      </div>
      <div className="grid grid-cols-1 my-8 w-full md:w-10/12 items-center justify-items-center   md:grid-cols-3 gap-2  md:gap-4">
        <div className="bg-white  md:w-2/3 shadow-md rounded-md">
          <Image src={picAchile}  className="" atl="Achile Songa " />
          <div className="p-4">
            <h4 className="font-bold py-2 text-base">C. Achile Songa</h4>
            <p>CEO</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-md">
          <Image src={picAchile} atl="Achile Songa " />
          <div className="p-4">
            <h4 className="font-bold py-2 text-base">Robert Niyitanga</h4>
            <p>Software developer</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-md">
          <Image src={picAchile} atl="Achile Songa " />
          <div className="p-4">
            <h4 className="font-bold py-2 text-base"> Divine</h4>
            <p>CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team