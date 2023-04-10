import Link from "next/link"


export const JoinUs = () => {
    return (
        <>
            <div className="w-full flex flex-row flex-wrap">
                <div className="flex-1 py-10 bg-blue-800">
                    <div className="w-10/12 ml-auto p-24">
                        <h2 className="title">Careers</h2>
                        <p className="text">We are a team of highly motivated individuals working to create the country where Rwandans are able to use technology equipments available for them.</p>
                        <div className="my-4">
                            <Link href="#">
                                <a className="btn btn-yellow">Apply Now</a>
                            </Link>
                        </div>
                        
                    </div>
                </div>
                <div className="flex-1 p-10 bg-mainBlue">
                    <div className="w-10/12 p-24">
                        <h2 className="title">Collaborate</h2>
                        <p className="text">We are a team of highly motivated individuals working to create the country where Rwandans are able to use technology equipments available for them.</p>
                        <div className="my-4">
                            <Link href="#">
                                <a className="btn btn-yellow">Join Us</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}