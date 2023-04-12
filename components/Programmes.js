

export const Programmes = () => {
    return (
        <>
            <div className="bg-causeBg bg-no-repeat bg-cover py-4">
                <div className="md:w-10/12 xs:w-full mx-auto text-white p-8">
                    <div className="flex flex-wrap justify-center items-start mx-auto mt-8 md:w-11/12 gap-4">
                        <div className="card">
                            <h2 className="card-title">Technology For the Future</h2>
                            <p className="card-body">{"It is now very obbbbbbbbvious than any other time how technology is taking a big part of our lives. Transformation is taking place before our eyes. Self driving cars, Artificial Intelligence, Internet of things, Robots and other tech inventions we used to watch only in movies are real today. Read more of what is coming and its impact on the world we know."}</p>
                            <button className="btn-card">Read more!</button>
                        </div>
                        <div className="card">
                            <h2 className="card-title">Is your job safe?</h2>
                            <p className="card-body">{"As technology improves, so is the fear of being replaced by it? Artificial Intelligence will be better than you in remembering and performing well in routines job. Robots will be able to lift heavy stuffs and be able to work many hours than you, many things will be automated. So, the question to ask yourself is, WHAT CAN I DO TO SECURE MY JOB?"}</p>
                            <button className="btn-card">Secure your job!</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}