

export const Programmes = () => {
    return (
        <>
            <div className="bg-mainBlue" id="programs">
                <div className="w-10/12 mx-auto text-white p-8">
                    <div>
                        <h1 className="font-bold text-4xl my-4">Our best programs!</h1>
                        <p>{"These are the programs that we set up for you to fulfil our mission. With these programs we share knowledge, engage the community, and grow."}</p>
                    </div>
                    <div className="flex flex-wrap flex-row justify-between items-start mx-auto mt-8 w-11/12 gap-4">
                        <div className="flex-1 shadow-lg rounded-md">
                            <iframe className="w-full h-auto rounded-md" src="https://www.youtube.com/embed/kmfOCnS5MU4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div className="p-4">
                                <h2 className="text-start font-bold text-2xl py-2">Iga Na Techinika</h2>
                                <p>{"Everyone has a right to understand technology. That's why through our program 'IGA NA TECHINIKA' we make dofferent courses and articles to help people understand how technology works and how they can use it to solve their problems."}</p>
                            </div>
                        </div>
                        <div className="flex-1 shadow-lg rounded-md">
                            <iframe className="w-full h-auto rounded-md" src="https://www.youtube.com/embed/kmfOCnS5MU4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div className="p-4">
                                <h2 className="text-start font-bold text-2xl py-2">Monthly Tech Talk</h2>
                                <p>{"There is power in cooperation. When great minds come together, there is likely something great going to come from the time they spend together. This is an event that happens mostly monthly and connect tech minds here in Kigali to talk about inventions, invent and connect to revolutionalize our tech industry."}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}