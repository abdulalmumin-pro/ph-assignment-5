import { use } from "react";
import type { Itechnologies } from "../type/TechnologiesType";

interface TechnologiesProps {
  technologiesPromise: Promise<Itechnologies[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);

  return (
    <section className="mx-16 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-black">
          Explore the{" "}
          <span className="bg-gradient-to-r from-[#FD5426] via-[#D81B7E] to-[#C623AE] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="py-2 text-gray-600">
          Pick one technology per category to build your ideal stack
        </p>
      </div>

      {/* Technology Cards */}
      <div>
        <div className="grid grid-cols-3 gap-5">
          {technologies.map((technology) => (
            <div
              key={technology.name}
              className="flex min-h-[270px] flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Top section */}
              <div className="mb-4 flex items-start justify-between">
                <div>
                  {/* Simple icon placeholder */}
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-lg font-bold">
                    {technology.name.charAt(0)}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    {technology.name}
                  </h3>
                </div>

                {technology.badge && (
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-500">
                    {technology.badge}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="mb-5 text-sm leading-5 text-gray-500">
                {technology.description}
              </p>

              {/* Category + Level + Rating */}
              <div className="mb-5 mt-auto flex items-center justify-between gap-2 text-xs">
                <span className="rounded-md bg-gray-100 px-2 py-1 font-medium text-gray-600">
                  {technology.category}
                </span>

                <span className="text-gray-500">{technology.level}</span>

                <span className="font-semibold text-gray-700">
                  <span className="mr-1 text-yellow-400">★</span>
                  {technology.rating}
                </span>
              </div>

              <button
                type="button"
                className="w-full rounded-lg bg-[#080D1D] py-3 text-sm font-semibold text-white transition hover:bg-[#151b2e] active:scale-[0.98]"
              >
                Add to Stack
              </button>
            </div>
          ))}
        </div>
        {/* select count area */}
        <div>
          <div>
            <h4>Your Stack</h4>
            <p>Technologies Selected</p>
          </div>

          <button>Remove All</button>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
