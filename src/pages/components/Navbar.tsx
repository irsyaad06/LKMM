import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full relative dark:bg-slate-900 bg-white rounded-full px-4 py-4 shadow-md">
      <h1 className="dark:text-[#abc2d3] font-medium py-[7px] text-[1rem] px-4">
        LKMM 2025
      </h1>

      <ul className="items-center gap-5 text-[1rem] text-[#424242] md:flex hidden">
        {["Beranda", "Informasi", "Timeline"].map((item, i) => (
          <a
            key={i}
            href={item === "Beranda" ? "/" : `/${item.toLowerCase()}`}
            className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-0.5 before:transition-all before:duration-300 before:absolute relative before:rounded-full before:-bottom-0.5 dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize"
          >
            {item}
          </a>
        ))}
      </ul>

      <div>
        <a
          href="https://bit.ly/formlkmm2025"
          target="_blank"
          rel="noopener noreferrer"
          className="py-[7px] text-[1rem] px-4 rounded-full capitalize bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 sm:flex hidden"
        >
          Daftar Sekarang
        </a>

        <CiMenuFries
          className="text-[1.8rem] dark:text-[#abc2d3] mr-1 text-[#424242] cursor-pointer md:hidden flex"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />
      </div>

      <aside
        className={`${
          mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-20"
            : "translate-x-[200px] opacity-0 z-[-1]"
        } md:hidden bg-white dark:bg-slate-700 p-4 text-center absolute top-[65px] right-0 w-full sm:w-[60%] rounded-xl shadow-lg transition-all duration-300`}
      >
        <ul className="flex flex-col items-center gap-4 text-[1rem] text-gray-700 dark:text-[#abc2d3]">
          {["Beranda", "Informasi", "Timeline"].map((item, i) => (
            <a
              key={i}
              href={item === "Beranda" ? "/" : `/${item.toLowerCase()}`}
              className="relative w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#3B9DF8] after:rounded-full transition-all duration-300 hover:after:w-full hover:text-[#3B9DF8] cursor-pointer capitalize"
            >
              {item}
            </a>
          ))}
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
