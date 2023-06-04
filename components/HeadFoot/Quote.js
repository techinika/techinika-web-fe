import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export const Quote = () => {
  return (
    <div className="flex justify-center items-center py-10 md:w-8/12 m-auto flex-col gap-5 px-2">
      <FaQuoteLeft className="text-3xl"></FaQuoteLeft>
      <h2 className="quote-text h-1/2">
        {
          "Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road."
        }
      </h2>

      <FaQuoteRight className="text-3xl"></FaQuoteRight>
      <p>
        <i>{"Stewart Brand, Writer"}</i>
      </p>
    </div>
  );
};
