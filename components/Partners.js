import Link from "next/link";
import Image from 'next/image';

export const Partners = () => {
    return (
        <>
            <div className="p-8 bg-mainBg flex flex-col items-center mx-auto">
                <div className='w-full items-center md:w-10/12'>
                    <h1 className="text-mainBlue font-bold text-4xl my-4">Our Partners</h1>
                    <p className='w-1/2'>
                    {"To deliver high quality service and best experience possible to our clients, we work with the the best companies and individuals who offer the best in their fields."}
                    </p>
                </div>
                <div className="grid grid-cols-1 my-8 w-full md:w-10/12 items-center justify-items-center md:grid-cols-5 gap-2  md:gap-4">
                    <div  className="bg-gray-200 p-5 rounded-md">
                        <Link href="https://afflatusafrica.org">
                            <a target="_blank">Afflatus Affrica</a>
                        </Link>
                    </div>
                    <div  className="bg-gray-200 p-5 rounded-md">
                        <Link href="https://afflatusafrica.org">
                            <a target="_blank">Afflatus Affrica</a>
                        </Link>
                    </div>
                    <div  className="bg-gray-200 p-5 rounded-md">
                        <Link href="https://afflatusafrica.org">
                            <a target="_blank">Afflatus Affrica</a>
                        </Link>
                    </div>
                    <div  className="bg-gray-200 p-5 rounded-md">
                        <Link href="https://afflatusafrica.org">
                            <a target="_blank">Afflatus Affrica</a>
                        </Link>
                    </div>
                    <div  className="bg-gray-200 p-5 rounded-md">
                        <Link href="https://afflatusafrica.org">
                            <a target="_blank">Afflatus Affrica</a>
                        </Link>
                    </div>
                    <div  className="bg-gray-200 p-5 rounded-md">
                        <Link href="https://afflatusafrica.org">
                            <a target="_blank">Afflatus Affrica</a>
                        </Link>
                    </div>
                    <div  className="bg-gray-200 p-5 rounded-md">
                        <Link href="https://afflatusafrica.org">
                            <a target="_blank">Afflatus Affrica</a>
                        </Link>
                    </div>
                </div>
                </div>
        </>
    )
}