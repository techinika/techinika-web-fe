import { PageTitle } from "./HeadFoot/PageTitle"


export const Timeline = () => {
    return (
        <>
            <div>
                <PageTitle title="Our Story"/>
                <div className="w-10/12 bg-bg m-auto p-10 md:p-24 my-5 rounded-md">
                    <h2 className="card-title">Who are we?</h2>
                    <p className="card-body">{"This is who we are. Muri Nyakanga 2020, nibwo twatangiye dufite urubuga rwitwaga NIGUTE twifashishaga mu kwigisha Abanyarwanda uko ikoranabuhanga rikora, ndetse n’uko baryifashisha mu byo bakora umunsi ku munsi. Muri 2021, nibwo twahinduye urubuga turwita Techinika, tukaba twarahuje amagambo abiri, Technology no Gutekinika."}</p>
                </div>
                <h2 className="text-mainBlue font-bold text-5xl py-5 text-center w-full">Important moments in our existance</h2>
                <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50 w-11/12 md:w-10/12 m-auto">
                    
                    <div className="flex flex-row-reverse md:contents">
                        <div className="bg-mainBlue col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                            <h3 className="font-semibold text-lg mb-1">June 2020</h3>
                            <p className="text-justify text-white leading-loose">Cishahayo Songa Achille started a blog to help Rwandans understand how technology works and how they can use it to improve their lives.</p>
                        </div>
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-mainBlue pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-mainBlue shadow"></div>
                        </div>
                    </div>

                    <div className="flex md:contents">
                        <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                            <div className="h-full w-1 bg-mainBlue pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-mainBlue shadow"></div>
                        </div>
                        <div className="bg-mainBlue col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                            <h3 className="font-semibold text-lg mb-1">July 2020</h3>
                            <p className="text-justify text-white leading-loose">Kabalira Lucette Sarah joined the team in the journey to make the best and strong contents to the audience that was growing day by day.</p>
                        </div>
                    </div>

                    <div className="flex flex-row-reverse md:contents">
                        <div className="bg-mainBlue col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                            <h3 className="font-semibold text-lg mb-1">April 2021</h3>
                            <p className="text-justify text-white leading-loose">We decided to transform our blog into the company and expand what we were doing. By doing that, we changed our name fron NIGUTE to Techinika. This name combines two names Technology and Gutekinika which means trying or exploring technology.</p>
                        </div>
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div className="h-full w-6 flex items-center justify-center">
                            <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                            </div>
                            <div
                            className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-mainBlue shadow"
                            ></div>
                        </div>
                    </div>

                    <div className="flex flex-row-reverse md:contents">
                        <div className="bg-mainBlue col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                            <h3 className="font-semibold text-lg mb-1">Since then,</h3>
                            <p className="text-justify text-white leading-loose">We had been working to bring technology to the masses in Rwanda and today, we have many programs to help us in doing that and we are getting piring results.</p>
                        </div>
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div className="h-full w-6 flex items-center justify-center">
                            <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                            </div>
                            <div
                            className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-mainBlue shadow"
                            ></div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}