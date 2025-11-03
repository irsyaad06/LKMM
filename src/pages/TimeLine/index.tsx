import { TimelineData } from "../../utils/Data";

const Timeline = () => {
  return (
    <div className="w-full mx-auto p-6 ">
      <h1 className="text-3xl font-bold mb-16 dark:text-[#abc2d3] text-center">
        Timeline LKMM 2025
      </h1>

      <div>
        <ul className="relative h-fit before:content-[''] before:absolute before:w-1 before:h-full before:bg-gray-200 dark:before:bg-slate-800 before:left-1/2 before:transform before:-translate-x-1/2 before:rounded-md before:z-10">
          {TimelineData.map((milestone, index) => (
            <li
              key={index}
              className={`relative w-1/2  mb-4 ${
                index % 2 === 0 ? "text-right" : " left-1/2 text-left"
              }`}
            >
              <div
                id="icon"
                className={`absolute top-1/2 -translate-y-1/2  ${
                  index % 2 === 0
                    ? "translate-x-1/2 right-0"
                    : "-translate-x-1/2"
                }  bg-gray-200 dark:bg-slate-800 rounded-full p-2 z-10`}
              >
                {milestone.icon}
              </div>

              <div
                className={`relative border rounded-md dark:bg-slate-900 dark:border-slate-700 dark:shadow-slate-900 shadow-gray-50 border-gray-200/60 shadow-md ${
                  index % 2 === 0 ? "-left-8" : "-right-8"
                }`}
              >
                <div className="py-3 px-4">
                  <div>
                    <div className="text-[#424242] dark:text-[#abc2d3] text-lg font-semibold">
                      {milestone.title}
                    </div>
                    <div className="text-primary text-sm">{milestone.date}</div>
                  </div>
                  <p className="mt-1 text-sm dark:text-slate-400 text-gray-600">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
