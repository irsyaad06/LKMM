import { IoGlobeOutline } from "react-icons/io5";
import { BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 boxShadow rounded-t-4xl w-full p-2 md:p-5">
      <div className="flex justify-center gap-[30px] flex-wrap w-full sm:px-32">
        <div className="flex items-center flex-wrap gap-2.5 text-[#424242]">
          <a
            href="https://www.instagram.com/hmifunikom?igsh=MW56bmplNm9qamZvaw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] dark:text-[#abc2d3] transition-all duration-300"
          >
            <BsInstagram />
          </a>
          <a
            href="https://www.youtube.com/@hmifunikom9377"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[1.3rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] dark:text-[#abc2d3] transition-all duration-300"
          >
            <BsYoutube />
          </a>
          <a
            href="https://www.tiktok.com/@hmifunikom?_r=1&_t=ZS-915rpm7qf9o"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] dark:text-[#abc2d3] transition-all duration-300"
          >
            <BsTiktok />
          </a>
          <a
            href="https://hmif.unikom.my.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-[#3B9DF8] dark:text-[#abc2d3] transition-all duration-300"
          >
            <IoGlobeOutline />
          </a>
        </div>
        <div className="border-t dark:border-slate-700 border-gray-200 pt-5 flex items-center w-full flex-wrap gap-5 justify-center">
          <p className="text-[0.8rem] dark:text-slate-500 sm:text-[0.9rem] text-gray-600">
            © 2025 HMIF. All Rights Reserved.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
