import { use, useState } from "react";
import type { Itechnologies } from "../type/TechnologiesType";

interface TechnologiesProps {
  technologiesPromise: Promise<Itechnologies[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);
  const [selected, setSelected] = useState<Itechnologies[]>([]);

  // technology selection Add / Remove
  const toggleSelect = (tech: Itechnologies) => {
    const exists = selected.some((item) => item.name === tech.name);
    if (exists) {
      setSelected((prev) => prev.filter((item) => item.name !== tech.name));
    } else {
      setSelected((prev) => [...prev, tech]);
    }
  };

  // Remove single technology from stack
  const handleRemove = (techName: string) => {
    setSelected((prev) => prev.filter((item) => item.name !== techName));
  };

  // Clear all selected technologies
  const handleRemoveAll = () => {
    setSelected([]);
  };

  return (
    <section className="mx-auto max-w-7xl px-16 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-gray-900">
          Explore the{" "}
          <span className="bg-gradient-to-r from-[#FD5426] via-[#D81B7E] to-[#C623AE] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="py-2 text-sm text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Main Grid & Stack Area */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Technology Cards Grid (Takes up 3 columns) */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:col-span-3">
          {technologies.map((technology) => {
            const isSelected = selected.some(
              (item) => item.name === technology.name
            );

            return (
              <div
                key={technology.name}
                className={`flex min-h-[270px] flex-col rounded-2xl border bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                  isSelected
                    ? "border-red-500 ring-1 ring-red-500"
                    : "border-gray-200"
                }`}
              >
                {/* Top section */}
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    {/* Icon placeholder */}
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 text-lg font-bold">
                      {technology.name.charAt(0)}
                    </div>

                    <h3 className="text-lg font-bold text-gray-900">
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
                <p className="mb-5 text-xs leading-relaxed text-gray-500">
                  {technology.description}
                </p>

                {/* Category + Level + Rating */}
                <div className="mb-5 mt-auto flex items-center justify-between gap-2 text-xs">
                  <span className="rounded-md bg-gray-100 px-2 py-1 font-medium text-gray-600">
                    {technology.category}
                  </span>

                  <span className="text-gray-400">{technology.level}</span>

                  <span className="font-semibold text-gray-700 flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    {technology.rating}
                  </span>
                </div>

                {/* Dynamic Button State */}
                <button
                  type="button"
                  onClick={() => toggleSelect(technology)}
                  className={`w-full rounded-lg py-2.5 text-xs font-semibold transition active:scale-[0.98] ${
                    isSelected
                      ? "bg-gray-900 bg-none text-red-500 hover:opacity-90"
                      : "bg-[#080D1D] text-white hover:bg-[#151b2e]"
                  }`}
                >
                  {isSelected ? "Added to Stack" : "Add to Stack"}
                </button>
              </div>
            );
          })}
        </div>

        {/* Right Side: Your Stack Panel (Takes up 1 column) */}
        <div className="lg:col-span-1">
          <div className="sticky top-6 flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h4 className="text-lg font-bold text-gray-900">Your Stack</h4>
            <p className="mb-6 text-xs text-gray-400">
              {selected.length}{" "}
              {selected.length === 1 ? "Technology" : "Technologies"} Selected
            </p>

            {/* Selected Tech List */}
            <div className="mb-6 space-y-3 min-h-[100px]">
              {selected.length === 0 ? (
                <p className="text-center py-8 text-xs text-gray-400 border border-dashed border-gray-200 rounded-xl">
                  No technologies selected yet.
                </p>
              ) : (
                selected.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50/50 px-3 py-2.5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-xs font-bold text-gray-700 shadow-xs">
                        {tech.name.charAt(0)}
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-gray-800">
                          {tech.name}
                        </h5>
                        <span className="text-[10px] text-gray-400">
                          {tech.category}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleRemove(tech.name)}
                      className="text-gray-400 hover:text-red-500 transition p-1"
                      title="Remove technology"
                    >
                      ✕
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Clear Button */}
            <button
              type="button"
              disabled={selected.length === 0}
              onClick={handleRemoveAll}
              className={`w-full rounded-xl border py-2.5 text-xs font-medium transition ${
                selected.length > 0
                  ? "border-red-100 text-red-500 hover:bg-red-50 cursor-pointer"
                  : "border-gray-100 text-gray-300 cursor-not-allowed"
              }`}
            >
              Remove All
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;