import Link from "next/link"


export const JoinUs = () => {
    return (
        <>
            <div className="w-full flex flex-row flex-wrap" id="join">
                <div className="flex-1 md:py-10 bg-blue-800">
                    <div className="md:w-10/12 ml-auto p-10 md:p-24">
                        <h2 className="title">Careers</h2>
                        <p className="text">We are a team of highly motivated individuals working to create the country where Rwandans are able to use technology equipments available for them.</p>
                        <div className="my-4">
                            <Link href="/careers">
                                <a className="btn btn-yellow">Apply Now</a>
                            </Link>
                        </div>
                        
                    </div>
                </div>
                <div className="flex-1 md:p-10 bg-mainBlue">
                    <div className="md:w-10/12 p-10 md:p-24">
                        <h2 className="title">Collaborate</h2>
                        <p className="text">We are a team of highly motivated individuals working to create the country where Rwandans are able to use technology equipments available for them.</p>
                        <div className="my-4">
                            <Link href="/collaborate">
                                <a className="btn btn-white">Join Us</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}