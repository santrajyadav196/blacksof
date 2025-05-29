"use client";

const DrivenPerformance = () => {
  return (
    <section className="relative h-[calc(100vh-76px)] min-h-[450px] overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10 filter brightness-50 saturate-100"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/automotive.224e7418884105595114.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground content */}
      <div className="absolute inset-0 grid place-content-center place-items-center pt-10 md:pt-5 lg:pt-10 gap-2 text-center w-11/12 mx-auto">
        <span className="font-normal text-xl md:text-2xl xl:text-3xl 2xl:text-[1.75rem] text-white block leading-snug">
          Driven by performance
        </span>

        <div className="text-white font-light pb-4 text-2xl md:text-4xl xl:text-5xl 2xl:text-[3rem] leading-tight">
          <span className="font-semibold">
            Soft trims and <span className="text-primary">NVH solutions</span>
          </span>
          <br className="hidden md:block" />
          <span className="font-normal ml-2">for seamless rides</span>
        </div>
      </div>
    </section>
  );
};

export default DrivenPerformance;
