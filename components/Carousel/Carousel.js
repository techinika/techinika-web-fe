import React, { useState } from "react";
import Slide from "./Slide";

const Carousels = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  let nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  let prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full">
            <Slide {...slide} />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-mainBlue text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-mainBlue text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        Next
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-mainBlue" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousels;
