"use client";
import { useState } from "react";

const slides = [
  {
    title: "Passenger vehicles",
    description: "Revving up innovation from interior to exterior.",
    video: "/Passenger-Alpha.bc06b347f5b526ad9a60.mp4",
  },
  {
    title: "Commercial vehicles",
    description: "Advancing engineering for heavy-duty vehicles.",
    video: "/Commercial-Alpha.92c92d40f9116c837d1d.mp4",
  },
];

export default function VerticalSlide() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between w-full bg-black text-white pt-5 min-h-[500px] px-4 md:px-0">
      {/* Left Vertical Navigation */}
      <div className="flex flex-col gap-5 w-full md:w-[475px] h-auto md:h-[340px] relative">
        {/* Vertical line (md and up only) */}
        <div className="hidden md:block absolute left-20 top-0 h-full w-px bg-white/20" />

        {/* Active indicator (md and up only) */}
        <div
          className="hidden md:block absolute left-20 h-[170px] w-0.5 bg-white transition-all duration-500 ease-in-out"
          style={{
            transform: `translateY(${activeIndex * 170}px)`,
            opacity: 1,
          }}
        />

        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative flex h-auto md:h-[170px] py-4 md:pl-30"
          >
            <button
              onClick={() => handleSlideChange(index)}
              className={`text-left cursor-pointer transition-all duration-300 pl-4 md:pl-6 relative z-10 w-full ${
                activeIndex === index
                  ? "text-white"
                  : "text-white/55 hover:text-white/80"
              }`}
            >
              <h2 className="text-2xl md:text-3xl font-semibold transition-all duration-300">
                {slide.title}
              </h2>
              <p className="text-md md:text-lg mt-2 font-normal transition-all duration-300">
                {slide.description}
              </p>
            </button>
          </div>
        ))}
      </div>

      {/* Right Content (Video) */}
      <div className="flex items-center justify-center w-full md:w-[760px] h-auto md:h-[340px] mt-4 md:mt-0 overflow-hidden">
        <video
          key={activeIndex}
          className="w-full h-full object-contain transition-opacity duration-500"
          src={slides[activeIndex].video}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </div>
    </div>
  );
}
