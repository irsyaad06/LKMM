import { TimelineData } from "../../utils/Data";

const Timeline = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 py-10">
      <h1 className="text-3xl font-bold mb-16 dark:text-[#abc2d3] text-center">
        Timeline LKMM 2025
      </h1>

      {/* DESKTOP TIMELINE */}
      <ul className="relative hidden  md:block before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-[3px] before:h-full before:bg-gray-300 dark:before:bg-slate-700">
        {TimelineData.map((milestone, index) => (
          <li
            key={index}
            className={`relative mb-12 md:w-1/2 ${
              index % 2 === 0
                ? "pr-10 text-right"
                : "pl-10 text-left left-1/2"
            }`}
          >
            {/* Icon */}
            <div
              className={`absolute top-1/2 transform -translate-y-1/2 bg-slate-700 text-white rounded-full p-3 border-4 border-white dark:border-slate-700 z-20 
              ${
                index % 2 === 0
                  ? "right-[-25px]" // 🔹 ikon sisi kanan
                  : "left-[-25px]"  // 🔹 ikon sisi kiri
              }`}
            >
              {milestone.icon}
            </div>

            {/* Box */}
            <div className="relative border rounded-md dark:bg-slate-900 dark:border-slate-700 border-gray-200/60 shadow-md p-4">
              <div className="text-[#3B9DF8] font-semibold">
                {milestone.date}
              </div>
              <div className="text-[#424242] dark:text-[#abc2d3] text-lg font-semibold">
                {milestone.title}
              </div>
              <p className="text-gray-500 dark:text-slate-400 text-sm mt-1">
                {milestone.description}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* MOBILE TIMELINE */}
      <div className="md:hidden relative border-l-4 border-gray-300 dark:border-slate-700">
        {TimelineData.map((milestone, index) => (
          <div key={index} className="mb-10 relative pl-10">
            {/* Icon */}
            <div className="absolute top-2 -left-[22px] bg-slate-700 text-white rounded-full p-2 border-2 border-white dark:border-slate-700 z-10">
              {milestone.icon}
            </div>

            {/* Content */}
            <div>
              <div className="text-[#3B9DF8] font-semibold">
                {milestone.date}
              </div>
              <div className="dark:text-[#abc2d3] text-[#424242] text-lg font-semibold">
                {milestone.title}
              </div>
              <p className="text-gray-500 dark:text-slate-400 text-sm mt-1">
                {milestone.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
