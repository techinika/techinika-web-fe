import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export const Quote = ({quote, speaker}) => {
  return (
    <div className="flex justify-center w-full items-center py-10 md:w-8/12 m-auto flex-col gap-5 px-4">
      <FaQuoteLeft className="text-3xl"></FaQuoteLeft>
      <h2 className="quote-text h-1/2">{quote}</h2>

      <FaQuoteRight className="text-3xl"></FaQuoteRight>
      <p>
        <i>{speaker}</i>
      </p>
    </div>
  );
};
