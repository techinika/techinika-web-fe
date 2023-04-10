import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"


export const Subscribe = () => {
    return (
        <>
            <div className="bg-bg p-10">
                <div className="flex justify-center items-center p-10 w-8/12 m-auto flex-col gap-5 ">
                    <FaQuoteLeft className="text-3xl"></FaQuoteLeft>
                        <h2 className="quote-text h-1/2">The good thing you can do to yourself today, is educating yourself. Let us guide you.</h2>
                    <FaQuoteRight className="text-3xl"></FaQuoteRight>
                </div>
                <div className="bg-white p-10 w-8/12 m-auto text-center rounded-lg shadow-md">
                    <h2 className="card-title w-full text-center">Subscribe to our newsletter.</h2>
                    <p>Be exclusive in getting our new courses, products and services right into your inbox.</p>
                    <form className="form">
                        <input type="text" placeholder="Enter your name" className="input"/>
                        <input type="email" placeholder="Enter your email" className="input"/>
                        <input type="submit" value="Submit" className="btn btn-yellow"/>
                    </form>
                </div>

            </div>
        </>
    )
}