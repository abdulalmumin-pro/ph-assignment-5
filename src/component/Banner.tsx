import React from "react";
import BannerImg from '../assets/banner-stack.png'

const Banner = () => {
  return (
    <div  className="flex justify-between mx-16">
      {/* left side */}
      <div className="flex flex-col justify-center">
        <h1 className="text-6xl font-bold">
          Built Your Ideal <br />
          <span className="bg-gradient-to-r from-[#FD5426] via-[#E93755] to-[#8437E3] bg-clip-text text-transparent">Development Stack</span>
        </h1>
        <p className="text-lg py-8">
          Explore frontend, backend, database, and tooling options,<br /> compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex gap-4">
          <button className="py-2 px-4 rounded-lg bg-linear-to-r/shorter from-[#F97316] to-[#EC4899]">Explore Technologies</button>
          <button className="border border-gray-400 py-2 px-4 rounded-lg">Learn More</button>
        </div>
      </div>
      {/* right side */}
      <div>
        <img src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
