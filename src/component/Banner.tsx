
import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mx-4 sm:mx-8 lg:mx-16 py-8 md:py-12 lg:py-16">

      {/* left side */}
      <div className="flex flex-col justify-center md:w-1/2">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
          Built Your Ideal <br />
          <span className="bg-gradient-to-r from-[#FD5426] via-[#E93755] to-[#8437E3] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="text-base sm:text-lg py-6 lg:py-8">
          Explore frontend, backend, database, and tooling options,
          <br className="hidden sm:block" />
          compare them side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="py-2 px-4 rounded-lg bg-linear-to-r/shorter from-[#F97316] to-[#EC4899]">
            Explore Technologies
          </button>

          <button className="border border-gray-400 py-2 px-4 rounded-lg">
            Learn More
          </button>
        </div>
      </div>

      {/* right side */}
      <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        <img
          src={BannerImg}
          alt=""
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
        />
      </div>

    </div>
  );
};

export default Banner;