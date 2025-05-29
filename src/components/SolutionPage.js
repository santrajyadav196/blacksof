"use client";

import VerticalSlider from "./VerticalSlide";

const SolutionPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="flex items-center justify-center px-4 text-white text-center py-10">
        <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-normal max-w-5xl leading-snug">
          Evolving the drive with 360-degree comprehensive solutions
        </div>
      </div>
      <VerticalSlider />
    </div>
  );
};

export default SolutionPage;
